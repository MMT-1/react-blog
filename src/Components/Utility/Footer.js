import React from 'react'

function Footer() {
  return (
    <div className='footer'>
    <div className="container border-bottom">
  <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5  " >
    <div className="col mb-3">
      <a href="/" className="d-flex align-items-center mb-3 link-dark text-decoration-none">
      </a>
      <p className="text-muted">© 2022</p>
    </div>

    <div className="col mb-3">

    </div>

    <div className="col mb-3">
      <h5 className='footer__title'>Section</h5>
      <ul className="nav flex-column list__footer">
        <li className="nav-item "><a href="#" className="nav-link  ">Home</a></li>
        <li className="nav-item "><a href="#" className="nav-link  ">Features</a></li>
        <li className="nav-item "><a href="#" className="nav-link  ">Pricing</a></li>
        <li className="nav-item "><a href="#" className="nav-link  ">FAQs</a></li>
        <li className="nav-item "><a href="#" className="nav-link  ">About</a></li>
      </ul>
    </div>

    <div className="col mb-3">
      <h5 className='footer__title'>Section</h5>
      <ul className="nav flex-column list__footer">
        <li className="nav-item "><a href="#" className="nav-link  ">Home</a></li>
        <li className="nav-item "><a href="#" className="nav-link  ">Features</a></li>
        <li className="nav-item "><a href="#" className="nav-link  ">Pricing</a></li>
        <li className="nav-item "><a href="#" className="nav-link  ">FAQs</a></li>
        <li className="nav-item "><a href="#" className="nav-link ">About</a></li>
      </ul>
    </div>

    <div className="col mb-3">
      <h5 className='footer__title'>Section</h5>
      <ul className="nav flex-column list__footer">
        <li className="nav-item "><a href="#" className="nav-link ">Home</a></li>
        <li className="nav-item "><a href="#" className="nav-link ">Features</a></li>
        <li className="nav-item "><a href="#" className="nav-link ">Pricing</a></li>
        <li className="nav-item "><a href="#" className="nav-link ">FAQs</a></li>
        <li className="nav-item "><a href="#" className="nav-link ">About</a></li>
      </ul>
    </div>



  


  </footer>
</div>
<div className="d-flex flex-column flex-sm-row justify-content-between py-3 my-3 container footer__socialMedia">
       <ul className="list-unstyled d-flex">
        <li className=""><a className="link-dark" href="#"> <i className="fa-brands fa-github"></i>  </a></li>
        <li className="ms-4"><a className="link-dark" href="#">  <i className="fa-brands fa-linkedin"></i> </a></li>
        <li className="ms-4"><a className="link-dark" href="#"> <i className="fa-brands fa-twitter"></i>  </a></li>
        <li className="ms-4"><a className="link-dark" href="#"> <i className="fa-brands fa-youtube"></i>  </a></li>
      </ul>
      <p>© 2022 Company, Inc. All rights reserved.</p>
     
    </div>
</div>
  )
}

export default Footer