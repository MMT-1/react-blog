import React from 'react'
import img from '../../Assets/img/cardhome.webp'
import Tags from '../Tags/Tags';

function CardHome() {
    return (
        <div className="card mt-5 p-0 container" >
            <div className="row">
                <div className="col-md-7">
                    <img src={img} image={img} className="img-fluid rounded-start" alt="home" />
                </div>
                <div className="col-md-5">
                    <div className="card-body">
                        <Tags/>
                        <h2 className="CardHome__title">Hygraph recognized in the Gartner® Market Guide for Web Content Management</h2>
                        <p className="CardHome__text1">Hygraph has been recognized as one of the 34 Representative Vendors in the 2022 Gartner Market Guide for Web Content Management.</p>
                        <p className="card-text text-end me-4"><small className="text-muted">JAN 26, 2023
                        </small></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardHome;