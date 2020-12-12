import React from 'react';
import styles from './About.module.css';
import DishImageLarge from '../../components/Images/DishImageLarge/DishImageLarge.jsx';

const About = () => {
  const imgUrl = [
    "https://d.newsweek.com/en/full/1552244/variety-chinese-food.jpg",
    "https://nitrocdn.com/QJsLnWfsWAiuukSIMowyVEHtotvSQZoR/assets/static/source/rev-d5d1d02/sites/default/files/styles/body_images_sm_1x/public/media/healthy-kung-pao-chicken-1.jpg",
    "https://purewows3.imgix.net/images/articles/2020_02/healthy-chinese-food-beef-and-broccoli.jpg?auto=format,compress&cs=strip"
  ];

    return (
        <div className={styles.container}>
          <div clasName={styles.info}>
            <div className={styles.wrapper}>
              <div className={styles.title}>Address</div>
              <div className={styles.text}>11760 San Pablo Ave CEl Cerrito, CA 94530</div>
            </div>
            <div className={styles.wrapper}>
              <div className={styles.title}>Phone</div>
              <div className={styles.text}>(510) 236-9999</div>
            </div>
            <div className={styles.wrapper}>
              <div className={styles.title}>Store Hours</div>
              <div className={styles.text}>
                <ul>
                  <li>Mon:	11:30 AM - 09:00 PM</li>
                  <li>Tue:	Closed</li>
                  <li>Wed - Thurs:	11:30 AM - 09:00 PM</li>
                  <li>Fri - Sat:	11:30 AM - 09:30 PM</li>
                  <li>Sun:	11:30 AM - 09:00 PM</li>
                </ul>
              </div>
            </div>
          </div>

          <div clasName={styles.image_wrapper}>
            <div><DishImageLarge url={imgUrl[0]} title={"chineseFood1"}/></div>
            <div><DishImageLarge url={imgUrl[1]} title={"chineseFood2"}/></div>
            {/* <div><DishImageLarge url={imgUrl[2]} title={"chineseFood3"}/></div> */}
          </div>
        </div>


        );
}

export default About;