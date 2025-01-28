import React from 'react'
import './card.css'

export default function Createcard({name , description , interest_section}){

    return <div className="card">
         <h2 className="name">
            {name}
            </h2>
         <h3 className="description">
            {description}
         </h3>
         <label htmlFor="" className="interests">Interests</label>
         <ul className="unordered">
            {interest_section.map((interest , index) =>  <li key={index} className="interest_list">
                {interest}
            </li>)}
         </ul>
         <div>
            <a href="https://x.com/home" className="social_links" target="_blank">Twitter</a>
            <a href="https://www.linkedin.com/" className="social_links" target="_blank">LinkedIn</a>
         </div>
         
    </div>
}
