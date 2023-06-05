import React, { useState } from 'react'
import './NewProduct.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const NewProduct = () => {
  const navigate = useNavigate()

  
  const [name, SetName] = useState('')
  const [stock, setStock] = useState('')
  const [status, setStatus] = useState('')
  const [price, setPrice] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3000/product',{
      name,
      stock,
      price,
      status,
    }).then((response) => {
      console.log(response)
      navigate('/products')
    })
  }
  return (
    <div className='NewProduct'>
      <h1 className="addProductTitle">New Product</h1>
      {name}
      <form onSubmit={handleSubmit} className="addProductForm">
        <div className="addProductItem">
          <label>Name</label>
          <input type="text" placeholder="Apple Airpods"
            onChange={(e) => SetName(e.target.value)}
          />
        </div>
        <div className="addProductItem">
          <label>Stock</label>
          <input type="text" placeholder="123"
          onChange={(e) => setStock(e.target.value)}
          />
        </div>
        <div className="addProductItem">
          <label>Price</label>
          <input type="text" placeholder="$126.00"
          onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className="addProductItem">
          <label>Status</label>
          <input type="text" placeholder="active/Not active"
          onChange={(e) => setStatus(e.target.value)}
          />
        </div>
        <button type='submit' className="addProductButton">Create</button>
      </form>
    </div>
  )
}

export default NewProduct