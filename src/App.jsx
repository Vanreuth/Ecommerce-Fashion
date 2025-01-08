import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Shop from './pages/Shop'
import Home from './pages/Home'
import Feature from './pages/Feature'
import Blog from './pages/Blog'
import About from './pages/About'
import Contact from './pages/Contact'
import Order from './pages/Order'
import Header from './components/Navbar'
import Footer from './components/Footer'
import Product from './pages/Product'
import PlaceOrder from './pages/PlaceOrder'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SearchBar from './components/Serachbar'

const App = () => {
  return (
   <>
   <ToastContainer />
    <Header/>
    <SearchBar/>
     <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/shop' element={<Shop/>}/>
        <Route path='/feature' element={<Feature/>}/>
        <Route path='/place-order' element={<PlaceOrder />} />
        <Route path='/product/:productId' element={<Product/>}/>
        <Route path='/blog' element={<Blog/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact />}/>
        <Route path='/order' element={<Order/>} />
        <Route path="*" element={<h1>404 - Page Not Found</h1>} />
     </Routes>
     <Footer/>
     </>
  )
}

export default App