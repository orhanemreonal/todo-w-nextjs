import {useState} from "react";
import { ITask } from "./TaskCard";
import styles from "../styles/TaskForm.module.css"


interface ITaskFormProps{
    addTask: (data: ITask) => void;
}
const createTime = (): string => {
    const now = new Date();

    const date = now.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "2-digit",
      year: "2-digit",
    });

    const time = now.toLocaleTimeString("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    });

    return `${date} ${time}`;
  };

const TaskForm:React.FC<ITaskFormProps> = ({addTask}:ITaskFormProps) => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [priority, setPriority] = useState<string>("low");

  const onSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const createdTime = createTime();
    addTask({ title, description, priority,createdTime, completed: false });
    setTitle("");
    setDescription("");
    setPriority("low");
}
  return (
    <form onSubmit={onSubmit}>
      <div className={styles.formContainer}>
        <label>Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className={styles.inputText}
        />
      
        <label>Description:</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      
        <label>Priority:</label>
        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          className={styles.select}
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      
        <input className={styles.btnAddTask} type="submit" value="Add Task" />
      </div>
    </form>
  );
}

export default TaskForm;