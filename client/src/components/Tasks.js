import Task from'./Task';
const Tasks = ({tasks , onDelete, onEdit}) => {
  return (
    <>
      {tasks.map((task) => (
        <Task key={task._id} 
              task = {task} 
              onDelete={() => onDelete(task._id)} 
              onEdit={onEdit}
        />
      ))}
    </>
  )
}

export default Tasks
