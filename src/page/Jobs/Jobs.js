import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Cookies from 'universal-cookie';
import "./Jobs.scss";
import { ToastContainer, toast } from 'react-toastify';


import homeIcon from "../../assets/homeIcon.png";
import NoJobs from '../../components/NoJobs';
import JobsContainer from '../../components/JobsContainer';
import ApplicationsContainer from '../../components/ApplicationsContainer';
import { ReactComponent as Prev } from "../../assets/Prev.svg";
import { ReactComponent as Next } from "../../assets/Nex.svg";



const Jobs = () => {
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1);

    useEffect(() => {
        const cookies = new Cookies();
        const token = cookies.get("tkn");

        console.log(page)

        //fetching api
        axios.get(`https://jobs-api.squareboat.info/api/v1/recruiters/jobs?${page}`, {
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

    }, [page])

    console.log(page)

    const prevPage = () => {
        setPage((prev) => {
            if (prev > 0 && prev < 3) {

                const next = prev - 1
                return (next > 0 && next < 3) ? next : prev;
            }

        })
    }

    const nextPage = () => {
        setPage((prev) => {
            if (prev > 0 && prev < 3) {
                const next = prev + 1
                return (next > 0 && next < 3) ? next : prev;
            }

        })
    }



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
                <ToastContainer
                    position="top-right"
                    autoClose={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                />

                {/* page change start here */}
                <div className="page-btn-container" >
                    <Prev onClick={prevPage} />
                    <div className="page-container"><span className="page">{page}</span></div>
                    <Next onClick={nextPage} />

                </div>
            </div>
        </>
    )
}

export default Jobs