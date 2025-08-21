import { HashRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Publications from './pages/Publications'
import Team from './pages/Team'
import Research from './pages/Research'
import Calendar from './pages/Calendar'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/publications' element={<Publications/>}/>
        <Route path='/team' element={<Team/>}/>
        <Route path='/research' element={<Research/>}/>
        <Route path='/calendar' element={<Calendar/>}/>
      </Routes>
    </Router>
  )
}

export default App