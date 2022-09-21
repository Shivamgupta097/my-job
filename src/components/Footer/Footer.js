import React from 'react';
import "./Footer.scss"
import ideaa from "../../assets/ideaa.png";
import kanba from "../../assets/kanba.png";
import lighting from "../../assets/lighting.png";
import liva from "../../assets/liva.png";
import solaytic from "../../assets/solaytic.png";
import velocity from "../../assets/velocity.png";
import ztos from "../../assets/ztos.png";
import goldline from "../../assets/goldline.png";

const clientData =
    [{
        id:1,
        clientName: "solaytic",
        imageUrl: solaytic
    },
    {
        id:2,
        clientName: "kanba",
        imageUrl: kanba
    },
    {
        id:3,
        clientName: "lighting",
        imageUrl: lighting
    },
        
    {
        id:4,
       clientName: "ztos",
        imageUrl: ztos
    },
    {
        id:5,
       clientName: "kanba",
        imageUrl: kanba
    },
    {
        id:6,
       clientName: "goldline",
        imageUrl: goldline
    },

    {
        id:7,
       clientName: "ideaa",
        imageUrl: ideaa
    },

    {
        id:8,
       clientName: "liva",
        imageUrl: liva
    },
    {
        id:9,
       clientName: "velocity",
        imageUrl: velocity
    },

    ]

const Footer = () => {
    return (
        <footer>
            <p className='header'>Company who trust us</p>

            <div className='client-container'>
                {clientData.map((client) => <img src={client.imageUrl} alt={client.clientName} key={client.id}/>)}

            </div>
        </footer>
    )
}

export default Footer