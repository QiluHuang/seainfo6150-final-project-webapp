import React, { useState } from 'react'
import Slider from '../Slider/Slider.jsx';

const Home = () => {
  const [isTextShowing, setIsTextShowing] = useState(false);

  function onClick() {
    setIsTextShowing(!isTextShowing);
  }
    return <Slider />
}

export default Home
