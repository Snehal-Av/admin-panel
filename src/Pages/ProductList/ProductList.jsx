import React from 'react'
import './ProductList.css'
import { DeleteOutline } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from 'axios';

const ProductList = () => {
  const [product, SetProduct] = useState([])

  const GetProductData = () => {
    axios.get('http://localhost:3000/products')
      .then((resp) => {
        SetProduct(resp.data)
      }).catch((error) => {
        console.log(error)
      })
  }

  const handleProductDelete = (id) => {
if(window.confirm("Do you want to Delete")){
  axios.delete(`http://localhost:3000/products/${id}`)
  .then(() => {
  GetProductData()
  })
}
  }

  useEffect(() => {
    GetProductData()
  }, [])

  return (
    <div className='ProductList'>
      <div className='productTitleContainer'>
      <Link to="/newProduct">
          <button className="productAddButton">Add New Product</button>
        </Link>
      </div>
      <table class="table table-bordered">
        <thead >
          <tr >
            <th  scope="col">ID</th>
            <th scope="col" >Product</th>
            <th scope="col">price</th>
            <th scope="col">Stock</th>
            <th scope="col">Status</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {
            product.map((productItem) =>
              <>
                <tr>
                  <td scope="row" key={productItem.id}>{productItem.id}</td>
                  <td className='UserListUser'>
                    <div className="productListItem">
                      <img className="productListImg" src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
                      {productItem.name}
                    </div>
                  </td>
                  <td>{productItem.price}</td>
                  <td>{productItem.stock}</td>
                  <td>{productItem.status}</td>
                  <td >
                    <Link to={`/product/${productItem.id}`}>
                      <button className='productListEdit'>Edit</button>
                    </Link>
                    <DeleteOutline className='productListDelete' onClick={() => handleProductDelete(productItem.id)} />
                  </td>

                </tr>
              </>
            )
          }
        </tbody>
      </table>
    </div>
  )
}

export default ProductList