import React from 'react';
import './App.css';
import TopBar from './Components/TopBar';
import SideBar from './Components/SideBar';
import Home from './Pages/Home/Home';
import { Route, Routes } from 'react-router-dom';
import UserList from './Pages/UserList/UserList';
import User from './Pages/User/User';
import NewUser from './Pages/NewUser/NewUser';
import ProductList from './Pages/ProductList/ProductList';
import Product from './Pages/Product/Product';
import NewProduct from './Pages/NewProduct/NewProduct';
import PageNotFound from './PageNotFound';


function App() {
  return (
    <div >
    <TopBar/>
    <div className='Container sm'>
      <SideBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/users/' element={<UserList/>}/>
        <Route path="/user/:userId" element={<User/>}/>
        <Route path='/newUser' element={<NewUser/>}/>
        <Route path='/products' element={<ProductList/>}/>
        <Route path='/product/:productId' element={<Product/>}/>
        <Route path='/newProduct' element={<NewProduct/>}/>
        <Route path='*' element={<PageNotFound/>}/>
      </Routes>
      
    </div>
    </div>
  );
}

export default App;
