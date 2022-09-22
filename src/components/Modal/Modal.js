import axios from 'axios';
import React, { useContext, useEffect } from 'react';
import Cookies from 'universal-cookie';
import { ReactComponent as CrossIcon } from "../../assets/crossIcon.svg";
import { ApplicationContext } from '../../context/ApplicationContext';
import UserDp from '../common/UserDp';
import "./Modal.scss"


const Modal = () => {
    const { id , setApplicantData,applicantData} = useContext(ApplicationContext);

    const cookies =new Cookies();
    const token = cookies.get("tkn");

    useEffect(() => {
        axios.get(`https://jobs-api.squareboat.info/api/v1/recruiters/jobs/${id}/candidates`,{
            headers: {
                Authorization: token
            }
        }).then(response => {
            const data = response.data.data;
            setApplicantData(data);
        }).catch((error => console.log(error)))

    }, [id])

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
                        <p>Total {applicantData.length} applications</p>
                        <div className='applicant-container container'>
                            <div className="applicant">
                                {
                                applicantData.map((applicant) =>
                                (<div className='card main px-2' key={applicant.id}>
                                    <div className='top-bar'>
                                        <UserDp name={applicant.name}/>
                                        <div className="information">
                                            <p className="name">{applicant.name}</p>
                                            <p className="email">{applicant.email}</p>
                                        </div>
                                    </div>

                                    <div className="skills-container">
                                        <h5>Skills</h5>
                                        <p>{applicant.skills}</p>
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