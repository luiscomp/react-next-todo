'use client';

import Header from "@/components/App/Header";
import TaskItem from "@/components/App/TaskItem";
import BottomSheet from "@/components/BottomSheet/BottomSheet";
import Button from "@/components/Button/Button";
import Card from "@/components/Card/Card";
import GroupSelect from "@/components/GroupSelect/GroupSelect";
import InputText from "@/components/InputText/InputText";
import List from "@/components/List/List";
import Page from "@/components/Page/Page";
import Tabs from "@/components/Tabs/Tabs";
import { Task } from "@/models/Task";
import { filterTaskList, priorities, prioritiesNames } from "@/utils/Constants";
import { useState } from "react";
import { FilterTaskList } from "../types";
import "./style.scss";

export default function Home() {
  const [currentTab, setCurrentTab] = useState(0)
  const [newTask, setNewTask] = useState<Task>({
    name: "",
    priority: "very_low",
    completed: false,
  })
  const [tasks, setTasks] = useState<Task[]>([])
  const [openNewTask, setOpenNewTask] = useState(false)

  const listAllTasks = (filter: { type?: FilterTaskList } = {
    type: "all"
  }) => {
    return tasks.filter(task => {
      switch (filter.type) {
        case "completed":
          return task.completed
        case "uncompleted":
          return !task.completed
        default:
          return true
      }
    }).map((task, index) => (
        <TaskItem key={index} task={task} index={index} tasks={tasks} setTasks={setTasks} deleteTask={deleteTask}/>
    ))
  }

  const listOfTasks = (tab: number) => {
    return (
      <List className="min-h-[490px] mt-4">{listAllTasks({ type: filterTaskList[tab] })}</List>
    )
  }

  function openCreateNewTask (value: boolean) {
    setOpenNewTask(value)
  }

  function currentPriority() {
    return priorities.indexOf(newTask.priority)
  }

  function addNewTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (newTask.name.length > 0) {
      setTasks([...tasks, newTask])
      setNewTask({
        name: "",
        priority: "very_low",
        completed: false,
      })
      openCreateNewTask(false)
    }
  }

  function deleteTask(index: number) {
    const newTasks = tasks
    newTasks.splice(index, 1)
    setTasks([...newTasks])
  }

  return (
    <Page>
        <Card className="w-[380px] min-w-[360px] relative">
          <Header/>
          
          <Tabs tabs={[
              "All",
              "Completed",
              "Uncompleted",
            ]} 
            select={setCurrentTab}
            current={currentTab}
          />

          {listOfTasks(currentTab)}

          <Button label="+ New Task" onClick={() => openCreateNewTask(true)}/>

          <BottomSheet title="Create a new task" open={openNewTask} onClose={() => openCreateNewTask(false)}>
            <form onSubmit={addNewTask} className="mt-8">
              <InputText id="input-description" label="Task name" autoComplete="off" value={newTask.name} onInput={(e) => setNewTask({
                ...newTask,
                name: e.target.value
              })}/>

              <GroupSelect title="Priority" className="mt-8"
                items={prioritiesNames}
                current={currentPriority()}
                select={(index) => setNewTask({
                  ...newTask,
                  priority: priorities[index]
                })}
              />
              
              <Button type="submit" label="+ Create Task" color="secondary" className="mt-8 mx-auto"/>
            </form>
          </BottomSheet>
        </Card>
    </Page>
  )
}