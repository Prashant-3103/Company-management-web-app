import '../css/userLogin.css';
import { useState } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function UserLogin() {

    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')

    const handleClick = () => {
        console.log(name, password, email)
        axios.post('http://localhost:5000/user/login', {
            name: name,
            password: password,
            email: email,
        })
            .then((res) => {
                console.log(res.data)
                const { token } = res.data
                console.log(res.data)
                localStorage.setItem("token" , token)

                if (res.data.message === "Login success") {

                    navigate('/user/dashboard')
                }
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <div className='card-user'>
            <h1>LOGIN As User</h1>
            <input type="email" value={email} placeholder='email' className='input-user' onChange={(e) => setEmail(e.target.value)} />
            <input type="text" value={name} placeholder='username' className='input-user' onChange={(e) => setName(e.target.value)} />
            <input type="password" value={password} placeholder='password' className='input-user' onChange={(e) => setPassword(e.target.value)} />
            <button className='submit-btn' onClick={handleClick}>
                SUBMIT
            </button>
        </div>
    )
}

export default UserLogin;
