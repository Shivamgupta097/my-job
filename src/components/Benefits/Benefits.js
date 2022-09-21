import React from 'react'
import "./Benefits.scss";

const data = [
    {
        id: 1,
        title: "Get More Visibility",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
    },
    {
        id: 2,
        title: "Organize Your Candidates",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",

    },
    {
        id: 3,
        title: "Verify Their Abilities",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    }
]

const Benefits = () => {
    return (
        <section className='mid'>
            <p className='header'>Why us</p>

            <div className="group-content">
                {data.map((cur) =>
                (<div className="card" key={cur.id}>
                    <div className="card-body">
                        <h5 className="card-title">{cur.title}</h5>
                        <p className="card-text">{cur.text}</p>
                    </div>
                </div>)
                )}

            </div>

        </section>
    )
}

export default Benefits