import React from 'react'
import xs from '../../assets/xs.jpg'
import mood from '../../assets/mood.png'
import './Project.css'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
const Project = () => {
  return (
    <section id='projects'>
      <h5>My works</h5>
      <h2>Projects</h2>
      <Swiper navigation={true} modules={[Navigation]} className="container pro_container">
        <SwiperSlide>
          <article className='pro_items'>
            <div className="pro_item-img">
              <img src={mood} alt="mo"/>
            </div>
            <h3>Mood based Music recommendation</h3>
            <a href='https://github.com/Aditi-Prashar/EmotionBased_MusicPlayer-1' className='btn' target='_blank' rel="noreferrer">GitHub</a>
          </article>
        </SwiperSlide>
        <SwiperSlide>
          <article className='pro_items'>
            <div className="pro_item-img">
              <img src={xs} alt="xs"/>
            </div>
            <h3>XSS Prevention Extension</h3>
            <a href='https://github.com/rishu0087/XSS_Vulnerability_Extension' className='btn' target='_blank' rel="noreferrer">GitHub</a>
          </article>
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default Project