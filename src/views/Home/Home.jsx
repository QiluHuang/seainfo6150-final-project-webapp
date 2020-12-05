import React, { useState } from 'react';
import styles from './Home.module.css';

import Slider from '../../components/Slider/Slider.jsx';


const Home = () => {
    const [isTextShowing, setIsTextShowing] = useState(false);
  
    function onClick() {
      setIsTextShowing(!isTextShowing);
    }
      return (
        <div className={styles.home_container}><Slider /></div>
      
      );
  }
  
  export default Home