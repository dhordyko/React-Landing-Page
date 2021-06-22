import React from 'react';
import Slider from 'react-bootstrap/Carousel';
import slide1 from "../assets/img/crane.png";
import slide2 from "../assets/img/tools.jpg";
import slide3 from "../assets/img/male-builder.jpg";
import styles from './slide.module.css';
import Icons from '../assets/icons/icons';
import CustomButton from '../utils/CustomButton';
import {useTranslation} from "react-i18next"; 
import $ from 'jquery';
export default function Carousel(){
  const {t} =useTranslation();

    const settings = {
        dots: false,
        infinite:true,
        autoplay: true,
        speed: 500
    }
    return(
     
<div class="container-fluid mt-5 slide" >
    <div class="row h-100">
      <div class="col-md-6 h-100 inner-container">
          <div class="holder-chontainer d-flex flex-start flex-column h-75">
              <div class="holder-box">
              <div className={styles.square_element}>
              <Icons icon="square" class="square" width='20' height='20'/>
              </div>
              <h1 class="w-25 my-3">Webshop <span class="d-block">Bouwmaterialen</span></h1>
              <h4 class="d-flex mb-5 text-left">{t('we_build')}</h4>
              <CustomButton  title={t('order_material')}/>
              </div>
              
          </div>
          <div class="bottom-title ">
              
          </div>
      </div>
      <div className="col-md-6">
      <Slider fade interval={null} className="header-carousel">
  <Slider.Item className={styles.slide_item}>
  <div class="image-container h-100" style={{backgroundImage: `url(${slide1})`}}></div>
    <Slider.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Slider.Caption>
  </Slider.Item>
  <Slider.Item className={styles.slide_item}>
  <div class="image-container h-100" style={{backgroundImage: `url(${slide2})`, backgroundSize: `cover`}}></div>

    <Slider.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Slider.Caption>
  </Slider.Item >
  <Slider.Item className={styles.slide_item}>
  <div class="image-container h-100" style={{backgroundImage: `url(${slide3})`, backgroundSize: `cover`}}></div>

    <Slider.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Slider.Caption>
  </Slider.Item>
</Slider>

          
      </div>
    </div>
</div>

    );
}