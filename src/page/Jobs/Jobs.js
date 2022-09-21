import React from 'react';
import "./Jobs.scss";
import homeIcon from "../../assets/homeIcon.png";
import { ReactComponent as NotePad } from "../../assets/writing.svg"
import { ReactComponent as LocationIcon } from "../../assets/locationIcon.svg"

import Button from '../../components/common/Button';

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

const ApplicationButton = ({children})=>{


}



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
                {/* 
                <section className="no-jobs-container">
                    <div className='no-jobs'>
                        <NotePad/>
                        <p className='text'>Your posted jobs will show here!</p>
                        <Button primary>Post a job</Button>
                    </div>
                </section> */}


                <section className='jobs-container'>
                    {jobData.map((job) =>
                        (<div className="card jobs-content" key={job.id} style={{width:"260px"}}>
                            <div className="card-body">
                                <h5 className="card-title">{job.designation}</h5>
                                <p className="card-text">{job.description}</p>
                                <div className='footer'>
                                    <div><LocationIcon/><span>{job.location}</span></div>
                                    <button>View application</button>
                                </div>
                            </div>
                        </div>)
                        )}

    

                </section>
            </div>
        </>
    )
}

export default Jobs