import TaskCard, { ITask } from "./TaskCard";

interface ITaskListProps {
    tasks: ITask[];
    completeTask: (index:number) => void;
    deleteTask: (index:number) => void;
}
const TaskList: React.FC<ITaskListProps> = ({tasks,completeTask, deleteTask}) => {
    return (
        <div>
          <h2>Task List</h2>
          {tasks.map((task, index) => (
            <TaskCard
              key={index}
              task={task}
              completeTask={() => completeTask(index)}
              deleteTask={() => deleteTask(index)}
            />
          ))}
        </div>
      );
}
export default TaskList;