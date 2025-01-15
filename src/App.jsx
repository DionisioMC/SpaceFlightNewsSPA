import { useState } from 'react'
import './App.css'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" Component={Home}/>
        </Routes>
      </Router>
    </>
  )
}

export default App;
