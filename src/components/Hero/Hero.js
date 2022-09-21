import React from 'react';
import Button from '../common/Button';
import image from "../../assets/hero.png"

import "./Hero.scss";

const Hero = () => {
    return (
        <section className='container hero'>
            <div className='row d-flex justify-content-between'>
                <div className='content-container col-lg-4 col-12'>
                    <div className='text-container'>
                        <p>Welcome to <span>My</span><span className="jobs">Jobs</span></p>
                    </div>
                    <Button>Get Started</Button>
                </div>
                <img src={image} className="col-lg-8 col-12" style={{ height: "495px", width: "600px" }} alt="stud-image" />
            </div>
        </section>
    )
}

export default Hero