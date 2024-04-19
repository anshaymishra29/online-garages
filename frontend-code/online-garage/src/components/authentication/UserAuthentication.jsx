import React, { useState } from 'react'
import {useDispatch} from 'react-redux';
import { isLoggedIn } from '../../redux/slice/authenticationSlice';
import { useNavigate } from 'react-router-dom';

const UserAuthentication = () => {

    const [inputData, setInputData] = useState({
        email:'',
        password:''
    })

    
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleChange = (event)=>{
        const {name,value} = event.target;
        console.log(event.target.value);
        setInputData({...inputData, [name]:value});
    }

    const handleSubmit = async (event)=>{
        event.preventDefault();

        try{
            const queryParams = new URLSearchParams({
                email: inputData.email,
                password: inputData.password
            });
            const response = await fetch(`http://localhost:8090/api/userAuthenticationForm?${queryParams.toString()}`, {
                method : 'post',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(inputData)
            }) ;
            if(response.ok){
                dispatch(isLoggedIn())
                navigate("/");
            }
        }catch(error){
            console.log(error);
        }
    }

  return (
    <div className='container'>
      <form onSubmit={handleSubmit}>
      <div className="mb-3">
            <label className="form-label">Email address</label>
            <input type="email" className="form-control" name="email" onChange={handleChange} id="inputEmail" aria-describedby="email"/>
        </div>
        <div className="mb-3">
            <label className="form-label">Password</label>
            <input type="password" className="form-control" name="password" onChange={handleChange} id="inputPassword" aria-describedby="password"/>
        </div>
        <button type="submit" className="btn btn-primary">Log in</button>
      </form>
    </div>
  )
}

export default UserAuthentication;
