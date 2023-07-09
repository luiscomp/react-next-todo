'use client';

import BottomSheet from "@/components/BottomSheet/BottomSheet";
import Button from "@/components/Button/Button";
import Card from "@/components/Card";
import Checkbox from "@/components/Checkbox/Checkbox";
import GroupSelect from "@/components/GroupSelect/GroupSelect";
import InputText from "@/components/InputText/InputText";
import List from "@/components/List/List";
import ListItem from "@/components/List/ListItem";
import Page from "@/components/Page";
import Tabs from "@/components/Tabs/Tabs";
import { useState } from "react";
import "./style.scss";

type Priority = "very_low" | "low" | "medium" | "high"

interface Task {
  name: string
  priority: Priority
  completed: boolean
}

export default function Home() {

  const priorities: Priority[] = ["very_low", "low", "medium", "high"]
  const prioritiesNames: string[] = ["Very Low", "Low", "Medium", "High"]
  const [currentTab, setCurrentTab] = useState(0)
  const [newTask, setNewTask] = useState<Task>({
    name: "",
    priority: "very_low",
    completed: false,
  })
  const [tasks, setTasks] = useState<Task[]>([])
  const [openNewTask, setOpenNewTask] = useState(false)

  const convertPriotiry = (priority: Priority) => {
    return prioritiesNames[priorities.indexOf(priority)]
  }

  const listAllTasks = (filter: { type?: "all" | "completed" | "uncompleted" } = {
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
        <ListItem key={index}>
          <div className={`task-item ${task.completed && '-done'}`}>
            <div className="check-container">
              <Checkbox id="check-task" checked={task.completed} onChange={() => {
                const newTasks = tasks
                newTasks[index].completed = !newTasks[index].completed
                setTasks([...newTasks])
              }}/>
            </div>
            <div className="task-info">
              <span className={`task-name ${task.completed && '-done'}`}>
                {task.name}
              </span>
              <span className="task-priority">
                {convertPriotiry(task.priority)}
              </span>
            </div>
            <div className="actions">
              <button className="delete" onClick={() => deleteTask(index)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="#888888" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m7 7l10 10M7 17L17 7"></path></svg>
              </button>
            </div>
          </div>
        </ListItem>
      ))
  }

  const listOfTasks = (tab: number) => {
    switch (tab) {
      case 1:
        return <List className="min-h-[490px] mt-4">{listAllTasks({ type: "completed" })}</List>
      case 2:
        return <List className="min-h-[490px] mt-4">{listAllTasks({ type: "uncompleted" })}</List>
      default:
        return <List className="min-h-[490px] mt-4">{listAllTasks({ type: "all" })}</List>
    }
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
          <header className="flex items-center mb-4">
            <div className="flex-1 flex flex-col">
              <span className="font-normal text-gray-500 text-sm">
                {new Date().toLocaleDateString("pt-BR")}
              </span>
              <h1 className="font-normal text-2xl">Today Tasks</h1>
            </div>
            <div className="bg-[var(--primary-color)] rounded-full h-10 w-10 shadow-[0_2px_8px_rgba(255,255,255,0.8)] shadow-[var(--primary-color-shadow)]"></div>
          </header>
          
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