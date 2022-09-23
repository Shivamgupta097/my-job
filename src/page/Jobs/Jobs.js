import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link,useNavigate } from 'react-router-dom';
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
    const [posts, setPosts] = useState(null);
    const [page, setPage] = useState(1);
    const [maxPage, setMaxPage] = useState();

     const navigate = useNavigate();


    useEffect(() => {
        const cookies = new Cookies();
        const token = cookies.get("tkn");

        //fetching api
        axios.get(`https://jobs-api.squareboat.info/api/v1/recruiters/jobs?page=${page}`, {
            headers: {
                Authorization: token
            }
        })
            .then(function (response) {
                const postData = response.data.data;
                return postData
            }).then(function (data) {
                const { metadata } = data
                const { count, limit } = metadata;
                const max = Math.ceil(eval(count + "/" + limit));
                setMaxPage(max);

                const getData = data.data;
                setPosts(getData);
            })
            .catch(function (error) {
                console.log(error);
                alert(error.message);
                navigate("/");
            });
    }, [page]);

    const prevPage = () => {
        setPage((prev) => (prev > 1) ? prev - 1 : prev);
    }

    const nextPage = () => {
        setPage((prev) => (prev < maxPage) ? prev + 1 : prev)
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
                {posts ?
                    <div>

                        <JobsContainer posts={posts} />
                        {/* page change start here */}
                        <div className="page-btn-container" >
                            <div onClick={prevPage} className="icon" style={{ cursor: "pointer" }}><Prev /></div>
                            <div className="page-container"><span className="page">{page}</span></div>
                            <div onClick={nextPage} className="icon" style={{ cursor: "pointer" }}><Next /></div>
                        </div>
                    </div>

                    : <NoJobs />}

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

            </div>
        </>
    )
}

export default Jobs