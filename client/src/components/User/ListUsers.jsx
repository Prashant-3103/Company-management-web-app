import '../css/AddAdmin.css'
import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import axios from 'axios'


function UserList() {
  const navigate = useNavigate()
  const [user, setUser] = useState([])

  useEffect(() => {
    axios.get('http://localhost:5000/user/get')
      .then(res => {
        console.log(res.data)
        setUser(res.data.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])







  return (
    <div className='user-card'>
      <Link to='/user/add'>ADD User</Link>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Password</th>
            <th>Email</th>
            <th>Branch</th>
            <th>CGPA</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {user.length > 0 &&
            user.map((userItem, userIndex) => {
              return (
                <tr key={userItem._id}>
                  <td>{userItem.name}</td>
                  <td>{userItem.password}</td>
                  <td>{userItem.email}</td>
                  <td>{userItem.branch}</td>
                  <td>{userItem.cgpa}</td>
<td><FontAwesomeIcon icon={faTrash}/></td>
                </tr>
              )
            })}
        </tbody>
      </table>
    </div>
  )
}

export default UserList
