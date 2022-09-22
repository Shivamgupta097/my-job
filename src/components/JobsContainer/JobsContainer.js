import React, { useContext, useEffect, useState } from 'react';
import "./JobsContainer.scss";
import { ReactComponent as LocationIcon } from "../../assets/locationIcon.svg"
import { ApplicationContext } from '../../context/ApplicationContext';


const JobsContainer = ({ posts }) => {
    const { setId } = useContext(ApplicationContext);

    return (
        <section className='jobs-container'>
            {posts.map((post) =>
            (<div className="card jobs-content" key={post.id} style={{ width: "270px" }}>
                <div className="card-body">
                    <h5 className="card-title">{post.title.slice(0, 10)}</h5>
                    <p className="card-text">{post.description.slice(0, 150)}</p>
                    <div className='footer'>
                        <div className='location'><LocationIcon /><span>{post.location.slice(0, 10)}</span></div>
                        <button data-toggle="modal" data-target="#staticBackdrop" onClick={() => {
                            setId((post.id))
                        }}>View application</button>
                    </div>
                </div>
            </div>)
            )}
        </section>
    )
}

export default JobsContainer