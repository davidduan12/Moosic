import Rep from'./Rep'

const Reps = ({reps , onDelete}) => {
  
  return (
    <>
      {reps.map((rep) => (
        <Rep key={rep._id} 
              rep = {rep} 
              onDelete={() => onDelete(rep._id)} 
        />
      ))}
    </>
  )
}

export default Reps
