import React from 'react';
import "./JobsContainer.scss";
import { ReactComponent as LocationIcon } from "../../assets/locationIcon.svg"


const JobsContainer = ({jobData}) => {
  return (
    <section className='jobs-container'>
                    {jobData.map((job) =>
                    (<div className="card jobs-content" key={job.id} style={{ width: "260px" }}>
                        <div className="card-body">
                            <h5 className="card-title">{job.designation}</h5>
                            <p className="card-text">{job.description}</p>
                            <div className='footer'>
                                <div><LocationIcon /><span>{job.location}</span></div>
                                <button>View application</button>
                            </div>
                        </div>
                    </div>)
                    )}
                </section>
  )
}

export default JobsContainer