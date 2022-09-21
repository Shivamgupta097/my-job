import React from 'react';
import { ReactComponent as CrossIcon } from "../../assets/crossIcon.svg";


const applicantData = [
    {
        id: 1,
        name: "Eliza Lucas",
        email: "abc123@email.com"
    },
    {
        id: 2,
        name: "Eliza Lucas",
        email: "abc123@email.com"
    }, {
        id: 3,
        name: "Eliza Lucas",
        email: "abc123@email.com"
    }, {
        id: 4,
        name: "Eliza Lucas",
        email: "abc123@email.com"
    }, {
        id: 5,
        name: "Eliza Lucas",
        email: "abc123@email.com"
    }, {
        id: 6,
        name: "Eliza Lucas",
        email: "abc123@email.com"
    }, {
        id: 7,
        name: "Eliza Lucas",
        email: "abc123@email.com"
    },
    {
        id: 8,
        name: "Eliza Lucas",
        email: "abc123@email.com"
    }, {
        id: 9,
        name: "Eliza Lucas",
        email: "abc123@email.com"
    }, {
        id: 10,
        name: "Eliza Lucas",
        email: "abc123@email.com"
    },
]

const Modal = () => {
    return (
        <div className="modal fade" id="staticBackdrop" data-backdrop="static" data-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog" style={{ width: "100vw" }}>
                <div className="modal-content modal-container">
                    <div className="modal-header">
                        <h5 className="modal-title" id="staticBackdropLabel" style={{ color: "#303F60", fontSize: "20px", fontWeight: "600", letterSpacing: "0.5px" }}>Applicant for the job</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true"><CrossIcon /></span>
                        </button>
                    </div>
                    <div className="modal-body body">
                        <p>Total 35 applications</p>
                        <div className='applicant-container container'>
                            <div className="applicant">
                                {applicantData.map((applicant) =>
                                (<div className='card main px-2' key={applicant.id}>
                                    <div className='top-bar'>
                                        <h2 className='profile-image'>E</h2>
                                        <div className="information">
                                            <p className="name">{applicant.name}</p>
                                            <p className="email">{applicant.email}</p>
                                        </div>
                                    </div>

                                    <div className="skills-container">
                                        <h5>Skills</h5>
                                        <p>Coding, designing, graphics, website, app ui</p>
                                    </div>
                                </div>))}

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal