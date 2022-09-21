import React from 'react'
import "./Home.scss";
import Hero from '../../components/Hero';
import Footer from '../../components/Footer';
import Benefits from '../../components/Benefits';
import { Outlet, Link } from "react-router-dom";
const Home = () => {
    return (
            <div className='home'>
                <Hero/>
                <Benefits/>
                <Footer/>
            </div>
    )
}

export default Home;