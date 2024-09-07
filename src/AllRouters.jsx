import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from './Pages/Home'
import Login from "./Components/LoginRegister/Login"
import Cart from "./Components/Cart"
import Fav from "./Components/Favorite"


const AllRouters = () => {
  return (
   <>
   <Router>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/fav" element={<Fav/>} />
    </Routes>
   </Router>
   
   </>
  )
}

export default AllRouters