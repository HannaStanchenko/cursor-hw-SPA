import React from 'react';
import { Link } from 'react-router-dom';

import "./contact.css"


const Contact = (props) => {
    const {firstName, lastName, phone, gender} = props.data;

    const setGenderIcon = () => {
        if(gender === "male") return (<i className="fi fi-rr-mars"></i>)
        else if (gender === "female") return (<i className="fi fi-rr-venus"></i>)
    }

    return (
        <Link to={firstName} className='contacts_card' >
            <p>{setGenderIcon()} {firstName} {lastName}</p>
            <p>{phone}</p>
        </Link>
    );
};

export default Contact;