import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Cookies from 'universal-cookie';
import "./Jobs.scss";

import homeIcon from "../../assets/homeIcon.png";
import NoJobs from '../../components/NoJobs';
import JobsContainer from '../../components/JobsContainer';
import ApplicationsContainer from '../../components/ApplicationsContainer';


const Jobs = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const cookies = new Cookies();
        const token = cookies.get("tkn");

        //fetching api
        axios.get('https://jobs-api.squareboat.info/api/v1/recruiters/jobs', {
            headers: {
                Authorization: token
            }
        })
            .then(function (response) {
                const postData = response.data.data.data;
                setPosts(postData);
            })
            .catch(function (error) {
                console.log(error);
            });

    }, [])

    return (
        <>
            <div className='job'>
                <Link to="/"><div className='page'>
                    <img src={homeIcon} alt="home-icon" />
                    <span>Home</span>
                </div>
                </Link>
                {/* header */}
                <div className='header'>
                    <h1>Job posted by you</h1>
                </div>
                {/* posts */}
                {posts ? <JobsContainer posts={posts} /> : <NoJobs />}
                {/* {Modal} */}
                <ApplicationsContainer />
            </div>
        </>
    )
}

export default Jobs