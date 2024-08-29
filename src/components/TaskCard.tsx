import { useState } from "react";
import styles from "../styles/TaskCard.module.css"


export interface ITaskProps {
    task: ITask;
    completeTask: () => void;
    deleteTask: () => void;
}

export interface ITask {
  title: string;
  description:string;
  priority:string;
  completed:boolean;
  createdTime:string;
}

const TaskCard: React.FC<ITaskProps> = ({task,completeTask,deleteTask}) => {
    return (
        <div className={styles.taskContainer} >
        <h3 className={styles.taskTitle} style={{ textDecoration: task.completed ? "line-through" : "" }}>{task.title}</h3>
        <p className={styles.taskDescription} style={{ textDecoration: task.completed ? "line-through" : "" }}>{task.description}</p>
        <p className={styles.taskPriority} style={{ textDecoration: task.completed ? "line-through" : "" }}>Priority: {task.priority}</p>
        <p className={styles.createdTime} style={{ textDecoration: task.completed ? "line-through" : "" }}>{task.createdTime}</p>
        <div className={styles.buttonsDiv}>
          <button className={styles.completeTaskBtn} onClick={completeTask}>
          {task.completed ? "Undo" : "Complete"}
        </button>
        <i onClick={deleteTask} className="fa-solid fa-trash" style={{ marginLeft: '10px' }}></i>

        </div>
        
      </div>
    );
}

export default TaskCard;