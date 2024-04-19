import React, { useState } from 'react'
import UserAuthentication from '../authentication/UserAuthentication';
import { Link } from 'react-router-dom';

function UserRegistration() {

  const [inputData, setInputData] = useState({
    customerName : '',
    email : '',
    contact : '',
    password : ''
  });
  const handleChange = (e)=>{
    const {name, value} = e.target;
    setInputData({...inputData, [name] : value});

  }

  const handleSubmit = async (event)=>{
    event.preventDefault();
    try{

      const response = await fetch('http://localhost:8090/api/userRegistrationForm', {
        method : 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(inputData)
      });
      console.log(response);

    }catch(error){
      console.log(error);
    }
    console.log(inputData);
  }
  return (
    <div className='container'>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
            <label  className="form-label">Name</label>
            <input type="text" className="form-control" name="customerName" onChange={handleChange} id="inputName" required/>
        </div>
        <div className="mb-3">
            <label className="form-label">Email address</label>
            <input type="email" className="form-control" name="email" onChange={handleChange} id="inputEmail" aria-describedby="email" required/>
        </div>
        <div className="mb-3">
            <label className="form-label">Contact</label>
            <input type="number" name="contact" onChange={handleChange} className="form-control" id="inputContact" required/>
        </div>
        <div className="mb-3">
            <label  className="form-label">Password</label>
            <input type="password"  name="password" onChange={handleChange} className="form-control" id="inputPassword" required/>
        </div>
        <div className="container" style={{position:'relative'}}>
        <Link className='nav-link' to="/userAuthentication" style={{position:'absolute', right:0}} >Already have an account?</Link>
        <button type="submit" className="btn btn-primary">Submit</button>
        </div>
      </form>
      

    </div>
  )
}

export default UserRegistration
