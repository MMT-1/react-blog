import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux';
import img from "../../Assets/img/icons8-google-48.png"
import { signUpUser } from '../../features/Auth/AuthSlice';

function SignUp() {


  const [fullName, setfullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setpassword] = useState('');

  const dispatch = useDispatch()
  const formData = (e) =>{
    e.preventDefault()
    dispatch(signUpUser(fullName,email,password))
  }


  return (
    <div className="">


      <div className="signInLogo text-center">
        <img src="" alt="" />
        <p className='signInLogoText'>
          jhsdkdj
        </p>
      </div>
      <div className="social-button-wrapper mb-1">
        <button className="social-button github">
          <div className="icon">
            <i className="fa-brands fa-github"></i>
          </div>
          <div className="title">
            Login with github
          </div>
        </button>
      </div>
      <div className="social-button-wrapper mb-1">
        <button className="social-button google">
          <div className="icon">
            <img src={img} className="googleSignInIcon" alt="" />                       </div>
          <div className="title">
            Login with google
          </div>
        </button>
      </div>
      <p className='orSignIn'>OR</p>
      <form action="" className=''>
        <p><input type="text" name="fullname" className="mt-1 auth0-lock-input" value={fullName} placeholder="Full Name" onChange={(e)=>{setfullName(e.target.value)}}/></p>
        <p><input type="email" name="email" className="mt-1 auth0-lock-input" placeholder="Email" value={email} onChange={(e)=>{setEmail(e.target.value)}} /></p>

        <p><input type="password" name="email" className="mt-1 auth0-lock-input" placeholder="Password" value={password} onChange={(e)=>{setpassword(e.target.value)}} /></p>
        <p><input type="password" name="email" className="mt-1 auth0-lock-input" placeholder="Comnfirm Password" /></p>
        <p>Forgot your password?</p>
        <button type='submit' className='signInButtonSubmit' onClick={formData}>Continue<i className="fa-solid fa-angle-right"></i></button>
      </form>
    </div>
  )
}

export default SignUp