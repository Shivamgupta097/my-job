import React, { useContext } from 'react';
import Button from '../common/Button';
import image from "../../assets/hero.png"
import "./Hero.scss";
import { UserContext } from '../../context/userContext';
import { Link } from 'react-router-dom';

const Hero = () => {
   const {currentUser} =useContext(UserContext)
    return (
        <section className='hero container'>
            <div className='row d-flex justify-content-between'>
                <div className='content-container col-lg-4 col-12'>
                    <div className='text-container'>
                        <p>Welcome to <span>My</span><span className="jobs">Jobs</span></p>
                    </div>
                    {currentUser ?<Link to="/jobs"><Button primary>Get Started</Button></Link>:<Link to="/login"><Button primary>Get Started</Button></Link>}
                </div>
                <img src={image} className="col-lg-8 col-12" style={{ height: "495px", width: "600px" }} alt="stud-image" />
            </div>
        </section>
    )
}

export default Hero