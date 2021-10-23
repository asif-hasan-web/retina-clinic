import React from 'react'
import { Link } from 'react-router-dom'
import "./Footer.css"

const Footer = () => {
    return (
       
            // footer area ...///////
            <div className="footer-area">
            <div className="container">
                <div className="row">
                <div className="col-md-8">
                    <div className="row">
                        <div className="col-md-4">
                            <h4>Service</h4>
                            <ul>
                                <li><Link to="/404PageNotFound">Features</Link></li>
                                <li><Link to="/404 Not Found">Pricing</Link></li>
                                <li><Link to="/contact">Eye care</Link></li>
                                <li><Link to="/contact">Doctor's</Link></li>
                            </ul>
                        </div>
                        <div className="col-md-4">
                            <h4>Institute</h4>
                            <ul>
                                <li><Link to="/about">About us</Link></li>
                                <li><Link to="">Terms of Doctors</Link></li>
                                <li><Link to="/service">service</Link></li>
                                <li><Link to="/sign-in">Privacy policy</Link></li>
                            </ul>
                        </div>
                        <div className="col-md-4">
                            <h4>Help Center</h4>
                            <ul>
                                <li><Link to="">Help centre</Link></li>
                                <li><Link to="">Email Us</Link></li>
                                <li><Link to="">Message Us</Link></li>
                                <li><Link to="">Blog</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
                    <div className="col-md-4">
                        <h4>Sign Up to Our Weekly Newslater</h4>
                        <div className="eamil-subscribe-item">
                                <form action="404">
                                <input type="email" placeholder="Email Address"/>
                                <input type="submit" value="sign up"/>
                                </form>
                        </div>
                    </div>
                </div>
            </div>
          </div>
    )
}

export default Footer

