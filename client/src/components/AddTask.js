import { useState } from 'react'

const AddTask = ({ onAdd }) => {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [category, setCategory] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()
         
        if (!text || !day || !category) {
            alert('Please fill all fields')
            return
        }
        onAdd({ text, day, category})

        setText('')
        setDay('')
        setCategory('')
    }
  return (
    <form className='add-form' onSubmit={onSubmit}>
      <div className='form-control'> 
      <label>Tasks
      <input type='text' placeholder='Paganini Caprice 24' value={text} onChange={(e) => setText(e.target.value)}/>
      </label>
      <label>Time
      <input type='text' placeholder='Time to Complete' value={day} onChange={(e) => setDay(e.target.value)}/>
      </label>
      </div>
      <div className="options">
					<label>
          <input type="radio" name='category' checked={category==="Techniques"} value="Techniques" onChange={(e) => 
          setCategory(e.target.value)}/>
          <span className="bubble techniques"></span>
          <div>Techniques</div>
          </label>
					<label>
          <input type="radio" name="category" checked={category==="Etudes"} value="Etudes" onChange={(e) => 
          setCategory(e.target.value)}/>
          <span className ="bubble etudes"></span>
          <div>Etudes</div>
          </label> 
					<label>
			
          <input type="radio" name="category" checked={category==="Pieces"} value="Pieces" onChange={(e) => 
          setCategory(e.target.value)}/>
          <span className ="bubble pieces"></span>
          <div>Pieces</div>
          </label>
             </div>

      <input type='submit' value='Add Task' className = 'btn btn-block'/>
    </form>
  )
}

export default AddTask
