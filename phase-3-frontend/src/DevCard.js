import React from 'react'
import "./DevCard.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'


function DevCard({name, about, image, linkedIn, github}) {
    return (
        <div className="dev-card">
            <section className="image">
            <img src={image}></img>
            </section>
            <section className="name">
            {name}
            </section>
            <p className='soft'>Software Engineer</p>
            <section className="about">
                <p>{about}</p>
            </section>
            <section className="contact">
                <FontAwesomeIcon icon={faLinkedin} /><a target='_blank' rel="noopener noreferrer" href={linkedIn}>LinkedIn</a> <br></br>
                <FontAwesomeIcon icon={faGithub} /><a target='_blank' rel="noopener noreferrer" href={github}>Github</a> <br></br>
            </section>
        </div>
    )
}

export default DevCard
