import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { faCrosshairs, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import axios from 'axios';
import '../css/UserList.css';
import UserList from '../User/ListUsers';
function AdminDash() {
  const navigate = useNavigate();
  const [service, setService] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/services')
      .then(res => {
        console.log(res.data);
        setService(res.data.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);


  const handleDeleteServices = (id) => {
    axios.delete(`http://localhost:5000/services/delete/${id}`)
      .then(res => {
        console.log(res.data);
        const updatedServiceList = service.filter(service => service._id !== id);
        setService(updatedServiceList);
      })
      .catch(err => {
        console.log(err);
      });
  };



  return (
    <div className='user-list'>
      <Link to='/admin/services' className='add-user-btn'>Add services</Link>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Role</th>
            <th>Package</th>
            <th>Poc</th>
            <th>Branch</th>
            <th>CGPA</th>
          </tr>
        </thead>
        <tbody>
          {service.length > 0 &&
            service.map((serviceItem, serviceIndex) => {
              return (
                <tr key={serviceItem._id}>
                  <Link to={"/company"}>
                    <td>{serviceItem.title}</td>
                  </Link>
                  <td>{serviceItem.description}</td>
                  <td>{serviceItem.role}</td>
                  <td>{serviceItem.package}</td>
                  <td>{serviceItem.cgpa}</td>
                  <td>{serviceItem.branch}</td>
                  <td>
                    <button className='delete-btn' onClick={() => handleDeleteServices(serviceItem._id)}>
                      <FontAwesomeIcon icon={faTrash} />
                    </button>


                  </td>

                </tr>
              );
            })}
        </tbody>
      </table>

<UserList />


    </div>
  )
}

export default AdminDash
