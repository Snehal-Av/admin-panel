import React, { useState } from 'react'
import './NewUser.css'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const NewUser = () => {

  const navigate = useNavigate()

  const [fullName, setFullName] = useState('');
  const [userName, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [address, setAddress] = useState('')
  const [phone, setPhone] = useState('')
  const [active, setActive] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3000/products', {
      fullName,
      userName,
      email,
      address,
      phone,
      active
    })
      .then((response) => {
        console.log(response)
        navigate('/users')
      })
  }

  return (
    <div className='newUser'>
      <h1 className="newUserTitle">New User</h1>
      <form className="newUserForm" onSubmit={handleSubmit}>
        <div className="newUserItem">
          <label>Username</label>
          <input type="text" placeholder="john"
           onChange={(e) => setUserName(e.target.value)} 
          />
        </div>
        <div className="newUserItem">
          <label>Full Name</label>
          <input type="text" placeholder="John Smith"
            
            onChange={(e) => setFullName(e.target.value)}
          />

        </div>
        <div className="newUserItem">
          <label>Email</label>
          <input type="email" placeholder="john@gmail.com"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="newUserItem">
          <label>Phone</label>
          <input type="text" placeholder="+1 123 456 78"
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className="newUserItem">
          <label>Address</label>
          <input type="text" placeholder="New York | USA"
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div className="newUserItem">
    
        </div>
        <div className="newUserItem">
          <label>Active</label>
          <input type="text" placeholder="Yes/No"
            onChange={(e) => setActive(e.target.value)}
          />
        </div>
        <button type="submit" className="newUserButton">Create</button>
      </form>



    </div>
  )
}

export default NewUser