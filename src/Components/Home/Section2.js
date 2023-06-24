import React from 'react'
import img from '../../Assets/img/sectio4.jpg'

function Section2() {
    return (
        <div className='container'>
        <div className='row mb-5 mt-5 ' >
            <div className='col-md-8'>
                <div className="img-fluid imgSectio__2" style={{ width: '100%', maxWidth: '850px', borderRadius: '20px', height: '450px', backgroundPosition: 'center', backgroundSize: 'cover' }}>

                    <div className='row getintouch'>
                        <div className='col-8'>
                            <small className='getintouch__text1'>Web Full Stack</small>
                            <h3 className='getintouch__text'>We are a website developement agency</h3>
                        </div>
                        <div className='col-4 text-end'>
                            <button className='getintouch__butt'>Get In Touch</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='col-md-4 section2__sideBarParent Social__container'>
                <div className='section2__sideBar'>
                    <h4 className='mb-3'>NEWSLETTER</h4>
                    <form action="" className='Form__Section2'>
                        <input type="email" name="email" id="email" placeholder="Enter your mail" />
                        <input type="submit" name="submit" value="Subscribe" />
                    </form>

                    <h4 className='mt-5 mb-3'>FOLLOW US</h4>
                    <div className='section2__sidebar__social '>
                        <div className=''><i className="fa-brands social fa-twitter"></i><span className='social__text'>Twitter</span></div>
                        <div><i className="fa-brands fa-instagram social"></i><span className='social__text'>instagram</span></div>
                        <div><i className="fa-brands fa-linkedin-in social"></i><span className='social__text'>LinkedIn</span></div>

                    </div>
                </div>


            </div>
        </div>
        </div>
    )
}

export default Section2