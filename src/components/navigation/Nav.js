import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../images/nc-logo.png'
import styles from './Nav.module.css'

const Nav = () => {
    return (
        <div className={styles["nav-bar"]}>
            <div className={styles["logo"]}>
                <img src={Logo} alt='logo' width={100}/>
            </div>

            <div className={styles["links"]}>
                <Link to='/'>Home</Link>
                <Link to='/posts'>Posts</Link>
                <Link to='/gallery'>Gallery</Link>
                <Link to='/contacts'>Contacts</Link>
            </div>
        </div>

    );
};

export default Nav;