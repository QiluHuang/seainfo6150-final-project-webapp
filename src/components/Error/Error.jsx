import React from 'react'
import { Switch, Route, Redirect, NavLink, Link, useRouteMatch, useHistory } from "react-router-dom";
import styles from './Error.module.css';

import Button from '../Buttons/Button/Button.jsx';
import Home from '../../views/Home/Home.jsx';


const Error = () => {
    let history = useHistory();
    const text = "GO TO HOMEPAGE";

    function onClick() {
        history.push("/");
    }

    return (
        <div className={styles.notfound}>
            <div className={styles.notfound_404}>
                <img src="https://www.clintar.com/images/error-404.png"></img>
            </div>
            <div className={styles.pageNotfound}>PAGE NOT FOUND</div>
            <div className={styles.explanation}>The page you are looking for might have been removed or is temporaily unavailable</div>
            <div className={styles.button}><Button buttonText={text} onClick={onClick}/></div>
        </div>
    )
}

export default Error
