import { Priority } from "@/app/types";
import { Task } from "@/models/Task";
import { priorities, prioritiesNames } from "@/utils/Constants";
import Checkbox from "../Checkbox/Checkbox";
import ListItem from "../List/ListItem";

interface TaskItemProps {
  task: Task;
  index: number;
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
  deleteTask: (index: number) => void;
}

export default function TaskItem({ task, index, tasks, setTasks, deleteTask }: TaskItemProps) {

    const convertPriotiry = (priority: Priority) => {
      return prioritiesNames[priorities.indexOf(priority)]
    }

    return (
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
    )
}