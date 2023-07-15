import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import img from "../../Assets/img/icons8-google-48.png"
import { signInUser } from '../../features/Auth/AuthSlice';

function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setpassword] = useState('');

    const dispatch = useDispatch()
    const formData = (e) => {
        e.preventDefault()
        dispatch(signInUser(email, password))
    }


    return (
        <div className="">

            <div className='container signInContainer  w-100' >
                <div className="signIn w-100">

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
                                <img src={img} className="googleSignInIcon" alt="" /> </div>
                            <div className="title">
                                Login with google
                            </div>
                        </button>
                    </div>
                    <p className='orSignIn'>OR</p>
                    <form action="" className=''>
                        <p><input type="email" name="email" className="mt-1 auth0-lock-input" placeholder="Email" value={email} onChange={(e) => { setEmail(e.target.value) }} /></p>
                        <p><input type="password" name="email" className="mt-1 auth0-lock-input" placeholder="Password" value={password} onChange={(e) => { setpassword(e.target.value) }} /></p>
                        <div className="flex-sb-m w-full p-t-3 p-b-24">
                            <div className="form-group">
                                    <div className="checkbox">
                                        <label><input type="checkbox" /><span className='txt12'>Remember me</span></label>
                                    </div>
                            </div>
                            <div className='my-3'>
                                <a href="#" className="txt1">
                                    Forgot Password?
                                </a>
                            </div>
                        </div>
                        <button type='submit' className='signInButtonSubmit' onClick={formData}>Continue<i className="fa-solid fa-angle-right"></i></button>
                    </form>
                    <p className="register-link w-100">Don't have an account? <Link to="/register">Register</Link></p>

                </div>
            </div></div>
    )
}

export default SignIn