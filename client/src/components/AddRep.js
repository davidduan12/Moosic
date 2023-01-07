import { useState } from 'react'

const AddRep = ({ onAdd }) => {
    const [text, setText] = useState('')
    const [comments, setComments] = useState('')
    const [date, setDate] = useState('')
    const [link, setLink] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()
         
        if (!text || !date) {
            alert('Please fill all fields')
            return
        }
        onAdd({ text, comments, link, date})

        setText('')
        setComments('')
        setLink('')
        setDate('')
    }
  return (
    <form className='add-form' onSubmit={onSubmit}>
      <div className='form-control'> 
      <input type='text' placeholder='Piece info' value={text} onChange={(e) => setText(e.target.value)}/>
      <input type='text' placeholder='Date' value={date} onChange={(e) => setDate(e.target.value)}/>
      <input type='text' placeholder='Link to Performance (Optional)' value={link} onChange={(e) => setLink(e.target.value)}/>
      <input type='text' placeholder='Comments (Optional)' value={comments} onChange={(e) => setComments(e.target.value)}/>
      </div>
      <input type='submit' value='Add Rep' className = 'btn btn-block'/>
    </form>
  )
}

export default AddRep
