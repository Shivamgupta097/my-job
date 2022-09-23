import React from 'react'
import UserDp from '../common/UserDp'

const Applicants = ({ applicantData }) => {
    return (
        <>
            {
                applicantData.map((applicant) =>
                (<div className='card main px-2' key={applicant.id}>
                    <div className='top-bar'>
                        <UserDp name={applicant.name} />
                        <div className="information">
                            <p className="name">{applicant.name}</p>
                            <p className="email">{applicant.email}</p>
                        </div>
                    </div>

                    <div className="skills-container">
                        <h5>Skills</h5>
                        <p>{applicant.skills}</p>
                    </div>
                </div>))
            }
        </>

    )
}

export default Applicants