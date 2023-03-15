import React from 'react';

import rightIcon from '../../images/copyright.png'
import styles from './Footer.module.css'

const Footer = () => {
    return (
        <div className={styles["footer"]}>
           <img src={rightIcon} alt="rights" width={15}/>
            <p>designed to practice programming skills</p>
        </div>
    );
};

export default Footer;