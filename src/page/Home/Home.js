import React from 'react'
import { Outlet } from 'react-router-dom';
import "./Home.scss";
import Hero from '../../components/Hero';
import Footer from '../../components/Footer';
import Benefits from '../../components/Benefits';

const Home = () => {
    return (
        <>
            <div className='home'>
                <Outlet />
                <Hero/>
                <Benefits/>
                <Footer/>
            </div>
        </>
    )
}

export default Home;