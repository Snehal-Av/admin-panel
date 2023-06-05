import React, { useEffect, useState } from 'react'
import './UserList.css'
import { DeleteOutline } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import axios from 'axios'


const UserList = () => {
  const [user, SetUser] = useState([])

  const GetData = () => {
    axios.get('http://localhost:3000/users')
      .then((resp) => {
        SetUser(resp.data)
      })
  }

  useEffect(() => {
    GetData()
  }, [])

  const handleDelete = (id) => {
    if (window.confirm("Do you want to Delete")) {
      axios.delete(`http://localhost:3000/users/${id}`)
        .then(() => {
          GetData()
          console.log(id)
        })
    }

  }


  return (
    <div className='UserList'>
      <div className='userTitleContainer'>
        <Link to="/newUser">
          <button className="userAddButton">Add New User</button>
        </Link>
      </div>
      <table class="table table-bordered">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">User Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Address</th>
            <th scope="col">Active</th>
            <th colspan="2" style={{
              alignItems: 'centre'
            }}>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            user.map((item) =>
              <>
                <tr key={item.id}>
                  <td scope="row" >{item.id}</td>
                  <td className='UserListUser'>
                    <div className='UserListUser'>
                      <img className='UserListImg' src="https://tse2.mm.bing.net/th?id=OIP.VKW5tIBmcHggykXICfaAnwAAAA&pid=Api&P=0&h=180" alt='' />
                      {item.fullName}
                    </div>
                  </td>
                  <td>{item.email}</td>
                  <td>{item.address}</td>
                  <td>{item.phone}</td>
                  <td>{item.active}</td>
                  <td >
                    <Link to={`/user/${item.id}`}>
                      <button className='UserListEdit'>Edit</button>
                    </Link>
                    <DeleteOutline className='UserListDelete'
                      onClick={() => handleDelete(item.id)}
                    />
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

export default UserList