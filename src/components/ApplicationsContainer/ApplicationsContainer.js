import axios from 'axios';
import React, { useContext, useEffect } from 'react';
import Cookies from 'universal-cookie';
import { ApplicationContext } from '../../context/ApplicationContext';

import "./ApplicationsContainer.scss"
import NoApplicant from '../../NoApplicant/NoApplicant';
import Applicants from '../Applicants';
import Modal from '../common/Modal/Modal';


const ApplicationsContainer = () => {
    const { id, setApplicantData, applicantData } = useContext(ApplicationContext);

    const cookies = new Cookies();
    const token = cookies.get("tkn");

    useEffect(() => {
        axios.get(`https://jobs-api.squareboat.info/api/v1/recruiters/jobs/${id}/candidates`, {
            headers: {
                Authorization: token
            }
        }).then(response => {
            const data = response.data.data;
            setApplicantData(data);
        }).catch((error => console.log(error)))

    }, [id])

    return (

        <Modal>
            {applicantData && <p>Total {applicantData.length} applications</p>}
            <div className='applicant-container'>
                <div className="applicant">
                    {applicantData ? <Applicants applicantData={applicantData} /> : <NoApplicant />}
                </div>
            </div>
        </Modal>
    )
}

export default ApplicationsContainer;