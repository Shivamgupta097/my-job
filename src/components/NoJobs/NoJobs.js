import React from 'react'
import "./NoJobs.scss";
import { ReactComponent as NotePad } from "../../assets/writing.svg";
import Button from '../../components/common/Button';

const NoJobs = () => {
    return (
        <section className="no-jobs-container">
            <div className='no-jobs'>
                <NotePad />
                <p className='text'>Your posted jobs will show here!</p>
                <Button primary>Post a job</Button>
            </div>
        </section>

    )
}

export default NoJobs