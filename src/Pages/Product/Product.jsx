import React, { useEffect, useState } from 'react'
import './Product.css'
import Chart from '../../Components/Chart/Chart'
import { productData } from "../../dummyData"
import { Publish } from "@mui/icons-material";
import {useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const Product = () => {
    const navigate = useNavigate();
    const { productId } = useParams();

    const [updateProdData, setUpdateProdData] = useState([]);

    const [name, setName] = useState('')
    const [stock, setStock] = useState('')
    const [status, setStatus] = useState('')
    const [price, setPrice] = useState('')

    const UpdateProductData = () => {
        axios.get(`http://localhost:3000/products/${productId}`)
            .then((response) => {
                setUpdateProdData(response.data)
            }).catch((error) => {
                console.log(error)
            })
    }

    const handleProductUpdate = (e) => {
        e.preventDefault()
        axios.put(`http://localhost:3000/products/${productId}`, {
            name,
            stock,
            status,
            price
        })
            .then((resp) => {
                console.log(resp.data)
                navigate('/products')
            })
    }

    useEffect(() => {
        UpdateProductData()
    }, [])
    return (
        <div className='Product'>
            <div className="productTitleContainer">
                <h1 className="productTitle">Product</h1>

            </div>
            <div className="productTop">
                <div className="productTopLeft">
                    <Chart data={productData} dataKey="Sales" title="Sales Performance" />
                </div>
                <div className="productTopRight">
                    <div className="productInfoTop">
                        <img src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="productInfoImg" />
                        <span className="productName">{updateProdData.name}</span>
                    </div>
                    <div className="productInfoBottom">
                        <div className="productInfoItem">
                            <span className="productInfoKey">stock :</span>
                            <span className="productInfoValue">{updateProdData.stock}</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">sales :</span>
                            <span className="productInfoValue">5123</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">Status :</span>
                            <span className="productInfoValue">{updateProdData.status}</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">Price :</span>
                            <span className="productInfoValue">{updateProdData.price}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="productBottom">
                <form onSubmit={handleProductUpdate} className="productForm">
                    <div className="productFormLeft">
                        <label>Product Name</label>
                        <input type="text" placeholder={updateProdData.name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <label>Stock</label>
                        <input type="text" placeholder={updateProdData.stock}
                            onChange={(e) => setStock(e.target.value)}
                        />
                        <label>Status</label>
                        <input type="text" placeholder={updateProdData.status}
                            onChange={(e) => setStatus(e.target.value)}
                        />
                        <label>Price</label>
                        <input type="text" placeholder={updateProdData.price}
                            onChange={(e) => setPrice(e.target.value)}
                        />
                    </div>
                    <div className="productFormRight">
                        <div className="productUpload">
                            <img src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="productUploadImg" />
                            <label for="file">
                                <Publish />
                            </label>
                            <input type="file" id="file" style={{ display: "none" }} />
                        </div>
                        <button type='submit' className="productButton">Update</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Product
