import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import SignIn from '../../Components/Login/SignIn'
import SignUp from '../../Components/Login/SignUp'

function Login() {








  const [registrationStatus, setregistrationStatus] = useState(false);
  const loginClicked =()=> {
    setregistrationStatus(false)
  }
  const registerClicked =()=> {
    setregistrationStatus(true)
  }
  const loginProp = ({
    display: registrationStatus? 'none' : 'block'
  })
  const regiterProp = ({
    display: registrationStatus? 'block' : 'none'
  })

  return (



    <div className='container signInContainer  w-100' >
      <div className="signIn w-100">
        <div className="form-container">
          <div className="slide-controls">
            <input type="radio" name="slide" id="login"  />
            <input type="radio" name="slide" id="signup" />
            <label htmlFor='login' className="slide login" onClick={loginClicked}>Login</label>
            <label htmlFor='signup' className="slide signup" onClick={registerClicked}>SignUp</label>
            <div className="slider-tab"></div>
          </div>
        </div>
        <span style={loginProp}><SignIn /></span>
        <span style={regiterProp}><SignUp /></span>
        
      </div>

    </div>
  )
}

export default Login