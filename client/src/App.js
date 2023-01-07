import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Footer from './components/Footer'
import About from './components/About'
import RepTracker from './components/RepTracker'
import TaskTracker from './components/TaskTracker'
function App() {

  return ( 
    <Router>
    <div className="container">
      <Routes>
        <Route path='/repTracker' element={<RepTracker />} />
        <Route path='/' element={<TaskTracker />} />
        <Route path='/about' element={<About />} />
      </Routes>
      <Footer />
    </div>
  </Router>
  );
}

export default App;
