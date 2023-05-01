import '../css/ListAdmins.css'
import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

function ListAdmins() {
  const navigate = useNavigate()
  const [admins, setAdmins] = useState([])

  useEffect(() => {
    if (localStorage.getItem('type') !== 'ADMIN') {
      navigate('/admin/dashboard')
    }
  }, [])

  useEffect(() => {
    axios
      .get('http://localhost:5000/admin/admins')
      .then((res) => {
        console.log(res.data)
        setAdmins(res.data.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, {})

  return (
    <div className='admin-card'>
      <Link to='/admin/add'>ADD ADMIN</Link>
      <table>
        <thead>
          <tr>
            <th>Username</th>
            <th>Password</th>
            <th>Type</th>
            <th>Status</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {admins.length > 0 &&
            admins.map((adminItem, adminIndex) => {
              return (
                <tr key={adminIndex}>
                  <td>{adminItem.userName}</td>
                  <td>{adminItem.password}</td>
                  <td>{adminItem.type}</td>
                  <td>{adminItem.status}</td>
                  <td>{adminItem.date}</td>
                </tr>
              )
            })}
        </tbody>
      </table>
    </div>
  )
}

export default ListAdmins
