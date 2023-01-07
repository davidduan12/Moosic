import { useState, useEffect} from 'react'
import Header from './Header'
import Tasks from './Tasks'
import AddTask from './AddTask'
import axios from 'axios'
const TaskTracker = () => {

  const [showAddTask, setShowAddTask] = useState(true)
  const [tasks, setTasks] = useState([])


    //Get Tasks
  async function getTasks(){
    const res = await axios.get('/api/v1/tasks');
    setTasks(res.data.data)
    }

    // Delete Task
  const deleteTask = async (id) => {
    await axios.delete(`/api/v1/tasks/${id}`);
    setTasks(tasks.filter((task) => task._id !== id))
  }

  //Add Task
  const addTask = async (task) => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    const res = await axios.post('/api/v1/tasks', task, config);
    setTasks([...tasks,res.data.data]);
  }

  //Edit Task
  const editTask = async (id, text, day, category) =>{
    const res = await axios.patch(`/api/v1/tasks/${id}/body/${text}`);
    setTasks(tasks.map((task) => task.id === parseInt(id) ? res.data.data : task));
  }

  useEffect(() => {
    getTasks();

  },[])
  return (
    <>
    <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
        {showAddTask && <AddTask onAdd={addTask}/>}
        {tasks.length ? ( 
        <Tasks tasks = {tasks} onDelete = {deleteTask} onEdit = {editTask}/>
        ) : (
         'No more tasks!'
       )}
       </> 
  )
}

export default TaskTracker
