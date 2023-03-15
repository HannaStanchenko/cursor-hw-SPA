import React from 'react';
import { useParams } from 'react-router-dom';

import styles from './ContactSingle.module.css'


const ContactSingle = ({ data }) => {
    const {contactId} = useParams()
    
    return (
        <div className={styles["contact-wrapper"]}>
            {

                Object.values(data).map((el, i) => {
                    if(el.firstName === contactId){
                        return (
                            <div key={i} className={styles["contact-wrapper-card"]}>
                                <div className={styles["info"]}>
                                    <h4>{el.firstName} {el.lastName}</h4>
                                    <p>{el.phone}</p>
                                    <p>{el.gender}</p>
                                    <p>{el.description}</p>
                                    
                                </div>

                                <div className={styles["photo"]}>
                                    <img src={el.photo} />
                                </div>
                            </div>
                        )
                    }
                
                })
            }

        </div>
    );
};

export default ContactSingle;