import { FaTimes} from 'react-icons/fa'
const Rep = ({ rep, onDelete}) => {
  return (
    <div className='task'>
      <h3>{rep.text}   
      <FaTimes style ={{color:'red', cursor: 'pointer', height: 15,marginRight:'3px', float:'right', marginTop:'7px'}} onClick = {onDelete} />
      {rep.link && <a target="_blank" href={rep.link} style={{float:'right', marginRight:'10rem'}}> Link to performance</a>}
      </h3>
      <p>Date: {rep.date}</p>
      {rep.comments && <p>Comments: {rep.comments}</p>}
    </div>
  )
}

export default Rep
