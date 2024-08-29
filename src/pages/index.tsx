import { useEffect, useState } from "react";
import { ITask } from "@/components/TaskCard";
import TaskForm from "@/components/TaskForm";
import TaskList from "@/components/TaskList";

const Home: React.FC = () => {

  const [tasks, setTasks] = useState<ITask[]>([]);

//   useEffect(() => {
   
//     const savedTasks = localStorage.getItem("tasks");
//     if (savedTasks) {
//       setTasks(JSON.parse(savedTasks));
//     }
//   }, []);

// useEffect(()=> {
//   localStorage.setItem("tasks",JSON.stringify(tasks));
// },[tasks]);

const addTask = (newTask: ITask) => {
  setTasks([...tasks,newTask]);
};

const completeTask = (index:number) => {
  const newTasks = [...tasks];
  newTasks[index].completed = !newTasks[index].completed;
  setTasks(newTasks);
}

const deleteTask = (index:number) => {
  const newTasks = tasks.filter((_,i) => i !== index)
  setTasks(newTasks)
}
  return (
    <div className="App">
	
      <h1>TodoApp</h1>
      <TaskForm addTask={addTask} />
      <TaskList tasks={tasks} completeTask={completeTask} deleteTask={deleteTask} />
        </div>
  );
}

export default Home;


