import React from 'react';
import styles from './ImgComp.module.css';

const ImgComp = ({ src }) => {
    let imgStyles = {
        width: 100 + "%",
        height: "auto"
    }
    return (
        <div className={styles.imgContainer}>
            <img src={src} alt="slide-img" className={styles.image}></img>
            {/* <img src={src} alt="slide-img" style={imgStyles}></img> */}
        </div>
    );
}

export default ImgComp;