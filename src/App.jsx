import './App.css'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import News from './pages/News'
import About from './pages/About'

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" Component={Home}/>
          <Route path='/news' Component={News}/>
          <Route path='/about' Component={About}/>
        </Routes>
      </Router>
    </>
  )
}

export default App;
