import React, { useEffect, useState } from 'react'
import './user.css'
import axios from 'axios';
import {
    CalendarToday,
    LocationSearching,
    MailOutline,
    PermIdentity,
    PhoneAndroid,
    Publish,
} from "@mui/icons-material";
import { Link, useNavigate, useParams } from "react-router-dom"

const User = () => {

    const navigate=useNavigate()
    const [updateData, setUpdateData] = useState([])

    
    const [fullName, setFullName] = useState('');
    const [userName, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [phone,setPhone]=useState('')
    const [address, setAddress] = useState('')

    const { userId } = useParams()

    const UpdateData = () => {
        axios.get(`http://localhost:3000/users/${userId}`)
            .then((response) => {
                setUpdateData(response.data)
            })
    }
    useEffect(() => {
        UpdateData()
    }, [])

    const handleUpdate=(e)=>{
        e.preventDefault();
        axios.put(`http://localhost:3000/users/${userId}`,{
            phone,
            fullName,
            userName,
            email,
            address,
        }).then((response)=>{
           console.log(response.data)
           navigate('/users')
        })
    }
    return (
        <div className='users'>
            <div className="userTitleContainer">
                <h1 className="userTitle">Edit User</h1>
               
            </div>
            <div className="userContainer">
                <div className="userShow">
                    <div className="userShowTop">
                        <img
                            src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                            alt=""
                            className="userShowImg"
                        />
                        <div className="userShowTopTitle">
                            <span className="userShowUsername">{updateData.fullName}</span>
                            <span className="userShowUserTitle">Software Engineer</span>
                        </div>
                    </div>
                    <div className="userShowBottom">
                        <span className="userShowTitle">Account Details</span>
                        <div className="userShowInfo">
                            <PermIdentity className="userShowIcon" />
                            <span className="userShowInfoTitle">{updateData.userName}</span>
                        </div>
                        <div className="userShowInfo">
                            <CalendarToday className="userShowIcon" />
                            <span className="userShowInfoTitle">10.12.1999</span>
                        </div>
                        <span className="userShowTitle">Contact Details</span>
                        <div className="userShowInfo">
                            <PhoneAndroid className="userShowIcon" />
                            <span className="userShowInfoTitle">{updateData.phone}</span>
                        </div>
                        <div className="userShowInfo">
                            <MailOutline className="userShowIcon" />
                            <span className="userShowInfoTitle">{updateData.email}</span>
                        </div>
                        <div className="userShowInfo">
                            <LocationSearching className="userShowIcon" />
                            <span className="userShowInfoTitle">New York</span>
                        </div>
                    </div>
                </div>
                <div className="userUpdate">
                    <span className="userUpdateTitle">Edit</span>
                    <form onSubmit={handleUpdate} className="userUpdateForm">
                        <div className="userUpdateLeft">
                            <div className="userUpdateItem">
                                <label>Username</label>
                                <input
                                    type="text"
                                    placeholder={updateData.userName}
                                    className="userUpdateInput"
                                    onChange={(e) => setUserName(e.target.value)}
                                />
                            </div>
                            <div className="userUpdateItem">
                                <label>Full Name</label>
                                <input
                                    type="text"
                                    placeholder={updateData.fullName}
                                    className="userUpdateInput"
                                    onChange={(e) => setFullName(e.target.value)}
                                />
                            </div>
                            <div className="userUpdateItem">
                                <label>Email</label>
                                <input
                                    type="text"
                                    placeholder={updateData.email}
                                    className="userUpdateInput"
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="userUpdateItem">
                                <label>Phone</label>
                                <input
                                    type="text"
                                    placeholder={updateData.phone}
                                    className="userUpdateInput"
                                    onChange={(e) => setPhone(e.target.value)}
                                />
                            </div>
                            <div className="userUpdateItem">
                                <label>Address</label>
                                <input
                                    type="text"
                                    placeholder={updateData.address}
                                    className="userUpdateInput"
                                    onChange={(e) => setAddress(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="userUpdateRight">
                            <div className="userUpdateUpload">
                                <img
                                    className="userUpdateImg"
                                    src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                                    alt=""
                                />
                                <label htmlFor="file">
                                    <Publish className="userUpdateIcon" />
                                </label>
                                <input type="file" id="file" style={{ display: "none" }} />
                            </div>
                            <button type='submit' className="userUpdateButton">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default User