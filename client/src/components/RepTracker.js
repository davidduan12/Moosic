import {useState, useEffect} from 'react'
import Reps from './Reps'
import AddRep from './AddRep'
import Header from './Header'
import axios from 'axios'
const RepTracker = () => {
  const [showAddRep, setShowAddRep] = useState(true)
  const [reps, setReps] = useState([])

  //Get reps
  async function getReps(){
    const res = await axios.get('/api/v1/reps');
    setReps(res.data.data)
  }

  const deleteRep = async (id) => {
    await axios.delete(`/api/v1/reps/${id}`);
    setReps(reps.filter((rep) => rep._id !== id))
  }
  
  const addRep = async (rep) => {
    const config = {
      headers: {
          'Content-Type': 'application/json'
      }
  }
  const res = await axios.post('/api/v1/reps', rep, config);
    setReps([...reps,res.data.data])
  }

  useEffect(() => {
    getReps();

  },[])
  return (
    <div>
    <Header onAdd={() => setShowAddRep(!showAddRep)} showAdd={showAddRep}/>
      {showAddRep && <AddRep onAdd={addRep}/>}
         
        <Reps reps = {reps} onDelete = {deleteRep}/>
        
    </div>
  )
}

export default RepTracker