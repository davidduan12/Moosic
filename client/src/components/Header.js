import Button from './Button'
import {useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'
const Header = ({ onAdd, showAdd}) => {
  const location = useLocation();


  return (
    <header className = 'header'>
      <h1>{location.pathname === '/' ? 'Task Tracker' : 'Reportoire Records'}</h1>
      <ul>
        {location.pathname === '/' ? <li><Link className='link' to='/Reptracker'>Reps</Link></li>
          : <li><Link className='link' to='/'>Tasks</Link></li>} 
      </ul>
      
      {(location.pathname === '/'|| location.pathname === '/Reptracker') && <Button  color={showAdd ?'red' : 'green'} text={showAdd ? 'Close' : 'Add'} onClick={onAdd} />}
    </header>
  )
}

export default Header
