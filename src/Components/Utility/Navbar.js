
import { Link } from 'react-router-dom';
import '../../App.css'
import Banner from './Banner';
const Navbar = () => {
    return (
        <>
        <Banner/>
        <nav className="navbar navbar-expand-lg sticky-top border-bottom">
            <div className="container">
                <Link className="navbar-brand" to={'/'}>Navbar</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link dropdown-toggle" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Features</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Pricing</a>
                        </li>



                        {/* <li className="nav-item ">
                            <button className="nav-link" href="#">Pricing</button>
                        </li> */}


                    </ul>
                    <div className="d-flex  ms-auto">
                        <button id="menu-item-878" >START MONITORING FOR FREE</button>
                        <Link className="nav-link" id='menu-item-877' to={"/login"}>SIGN IN</Link>
                    </div>
                </div>
            </div>
        </nav>
        </>
    )
}

export default Navbar;