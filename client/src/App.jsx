import{Routes, Route} from 'react-router-dom'

import Navigation from "./components/Navigation/Navigation"
import Footer from "./components/Footer/Footer"
import Home from './components/Home/Home'
import MovieList from './components/MovieList/MovieList'
import Login from './components/Login/Login'
import Register from './components/Register/Register'
import AddMovie from './components/AddMovie/AddMovie'



function App() {
  
  return (
    <>
    
      <Navigation/>
      <Footer/>
      <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/movies" element={<MovieList />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/register" element={<Register />}></Route>
      <Route path="/add-movie" element={<AddMovie />}></Route>
      </Routes>
    </>
  )
}

export default App
