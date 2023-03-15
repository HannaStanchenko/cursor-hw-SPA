import React from 'react';

import velaris from '../../images/velaris.jpg'
import styles from './Home.module.css'


const HomePage = () => {
    return (
        <div className={styles["main"]} >
            <img src={velaris} alt="Velaris" width={350} />
            <h1>The INNER CIRCLE's blog</h1>
            
        </div>
    );
};

export default HomePage;