import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import SignIn from '../../Components/Login/SignIn'
import SignUp from '../../Components/Login/SignUp'

function Login() {









  return (



    <div className='container signInContainer  w-100' >
      <div className="signIn w-100">
        <div className="form-container">
         
        </div>
        <SignIn />
        <SignUp />
        
      </div>

    </div>
  )
}

export default Login