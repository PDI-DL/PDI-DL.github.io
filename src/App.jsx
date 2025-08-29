import { HashRouter as Router, Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import Publications from "./pages/Publications"
import Team from "./pages/Team"
import Research from "./pages/Research"
import Calendar from "./pages/Calendar"
import NotFound from "./pages/other/NotFound"
import Snake from "./pages/other/Snake"

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/home" element={<Home/>}/>
                <Route path="/publications" element={<Publications/>}/>
                <Route path="/team" element={<Team/>}/>
                <Route path="/research" element={<Research/>}/>
                <Route path="/calendar" element={<Calendar/>}/>
                <Route path="*" element={<NotFound/>}/>

                <Route path="/snake" element={<Snake/>}/>
            </Routes>
        </Router>
    )
}

export default App
