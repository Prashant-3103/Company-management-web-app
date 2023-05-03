import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import '../css/UserList.css';


function DeleteAdmin(){

    const navigate = useNavigate();
  const [admin, setAdmin] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/admin/admins')
      .then(res => {
        console.log(res.data);
        setAdmin(res.data.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);


  const handleDeleteAdmin = (id) => {
    axios.delete(`http://localhost:5000/admin/delete/${id}`)
      .then(res => {
        console.log(res.data);
        const updatedAdminList = admin.filter(admin => admin._id !== id);
        setAdmin(updatedAdminList);
      })
      .catch(err => {
        console.log(err);
      });
  };

    return(
        <div className='user-list'>
        <Link to='/admin/add' className='add-user-btn'>Add ADMIN</Link>
        <table>
          <thead>
            <tr>
              <th>TYPE</th>

              <th>USER-NAME</th>
              <th>STATUS</th>
              <th>ACTION</th>

            </tr>
          </thead>
          <tbody>
            {admin.length > 0 &&
              admin.map((adminItem, adminIndex) => {
                return (
                  <tr key={adminItem._id}>
                    <td>{adminItem.type}</td>

                    <td>{adminItem.userName}</td>

                    <td>{adminItem.status}</td>
                    <td>
                      <button className='delete-btn' onClick={() => handleDeleteAdmin(adminItem._id)}>
                        <FontAwesomeIcon icon={faTrash} />
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    )
}


export default DeleteAdmin;
