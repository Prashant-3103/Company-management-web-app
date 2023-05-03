import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import '../css/UserList.css';

function UserList() {
  const navigate = useNavigate();
  const [user, setUser] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/user/get')
      .then(res => {
        console.log(res.data);
        setUser(res.data.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  const handleDeleteUser = (id) => {
    axios.delete(`http://localhost:5000/user/delete/${id}`)
      .then(res => {
        console.log(res.data);
        const updatedUserList = user.filter(user => user._id !== id);
        setUser(updatedUserList);
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div className='user-list'>
      <Link to='/user/add' className='add-user-btn'>ADD USER</Link>
      <table>
        <thead>
          <tr>
            <th>Name</th>

            <th>Email</th>
            <th>Branch</th>
            <th>CGPA</th>
            <th>ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {user.length > 0 &&
            user.map((userItem, userIndex) => {
              return (
                <tr key={userItem._id}>
                  <td>{userItem.name}</td>

                  <td>{userItem.email}</td>
                  <td>{userItem.branch}</td>
                  <td>{userItem.cgpa}</td>
                  <td>
                    <button className='delete-btn' onClick={() => handleDeleteUser(userItem._id)}>
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}

export default UserList;
