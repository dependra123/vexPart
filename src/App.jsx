import './App.css'
import Home from "./pages/home"
import PartSignOut from "./pages/partSignOut"
// import routes, browser router, and routes
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


function App() {
  
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/team/:routeID' element={<PartSignOut />}/>
        <Route path='*' element={<h1>404: Not Found</h1>}/>

      </Routes>
    </Router>  
  )
}

export default App
