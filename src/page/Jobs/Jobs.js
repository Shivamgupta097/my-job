import React from 'react';
import "./Jobs.scss";
import homeIcon from "../../assets/homeIcon.png";

import NoJobs from '../../components/NoJobs';
import JobsContainer from '../../components/JobsContainer';
import Modal from '../../components/Modal';

const jobData = [
    {
        id: 1,
        designation: "UI UX Designer",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt…",
        location: "Gurugram"
    },
    {
        id: 2,
        designation: "UI UX Designer",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt…",
        location: "Gurugram"
    },
    {
        id: 3,
        designation: "UI UX Designer",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt…",
        location: "Gurugram"
    },
    {
        id: 4,
        designation: "UI UX Designer",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt…",
        location: "Gurugram"
    },
    {
        id: 10,
        designation: "UI UX Designer",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt…",
        location: "Gurugram"

    }, {
        id: 5,
        designation: "UI UX Designer",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt…",
        location: "Gurugram"
    }, {
        id: 6,
        designation: "UI UX Designer",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt…",
        location: "Gurugram"
    }, {
        id: 7,
        designation: "UI UX Designer",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt…",
        location: "Gurugram"
    }, {
        id: 8,
        designation: "UI UX Designer",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt…",
        location: "Gurugram"
    }, {
        id: 9,
        designation: "UI UX Designer",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt…",
        location: "Gurugram"
    },
]

const Jobs = () => {
    return (
        <>
            <div className='job'>
                <div className='page'>
                    <img src={homeIcon} alt="home-icon" />
                    <span>Home</span>
                </div>

                <div className='header'>
                    <h1>Job posted by you</h1>
                </div>

                {/* <NoJobs /> */}
                <JobsContainer jobData={jobData} />


                <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#staticBackdrop">
                    Launch static backdrop modal
                </button>

                <Modal/> 
            </div>
        </>
    )
}

export default Jobs