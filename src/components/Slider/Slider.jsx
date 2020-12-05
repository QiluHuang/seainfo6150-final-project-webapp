import React, { useState } from 'react';
import styles from './Slider.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/fontawesome-free-solid';

import ImgComp from './ImgComp.jsx';
import img1 from '../../img/homepage_images/barbecue-pork-fried-rice.jpg';
import img2 from '../../img/homepage_images/chicken_with _sweet_cream_corn_soup.jpg';
import img3 from '../../img/homepage_images/pot-stickers.jpg';
import img4 from '../../img/homepage_images/seafood-with-tofu-soup.jpg';
import img5 from '../../img/homepage_images/wonton-soup.jpg';


const Slider = () => {
    let sliderArr = [
        <ImgComp src={img1}/>,
        <ImgComp src={img2}/>,
        <ImgComp src={img3}/>,
        <ImgComp src={img4}/>,
        <ImgComp src={img5}/>];

    const [x, setX] = useState(0);

    const goLeft = () => {
        console.log(x);
        // setX(x + 100);
        x === 0 ? setX( -100 * (sliderArr.length - 1)) : setX(x + 100);

    };

    const goRight = () => {
        console.log(x);
        // setX(x - 100);
        x === -100 * (sliderArr.length - 1) ? setX(0) : setX(x - 100);
    };


    return (
        <div className={styles.slider}>
            {sliderArr.map((item, index) => {
                return (
                    <div key={index} className={styles.slide} style={{transform:`translateX(${x}%)`}}>{item}</div>
                )
            })}
            
            {/* <button className={styles.goLeft} onClick={goLeft}><FontAwesomeIcon icon={faChevronLeft} /></button>
            <button className={styles.goRight} onClick={goRight}><FontAwesomeIcon icon={faChevronRight}/></button> */}

            <button className={styles.goLeft} onClick={goLeft}><i class="fas fa-chevron-left fa-5x" ></i></button>
            <button className={styles.goRight} onClick={goRight}><i class="fas fa-chevron-right fa-5x" ></i></button>

        </div>
    );
}

export default Slider;