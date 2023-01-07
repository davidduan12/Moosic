import { FaTimes, FaEdit} from 'react-icons/fa'
import {EditText} from 'react-edit-text';
import 'react-edit-text/dist/index.css'; 
const Task = ({ task, onDelete, onEdit }) => {
  return (
    <div className = {`task ${task.category}`}>
      <h3><EditText 
      name={task._id + ''} 
      defaultValue={task.text} 
      showEditButton onSave={(e) => onEdit(e.name,e.value,task.day,task.category)}
      editButtonProps={{ style: {backgroundColor:'#f4f4f4'} }}
      editButtonContent={<FaEdit style ={{color:'green', cursor: 'pointer'}}/> } />  
      </h3>
      
      <p>{task.day}<FaTimes style ={{color:'red', cursor: 'pointer', height: 15,marginRight:'3px'}} onClick = {onDelete} /></p>
    </div>
  )
}

export default Task
