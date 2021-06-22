import React,{useState,useEffect} from 'react';
import Slider from 'react-bootstrap/Carousel';

import styles from './TestemonialCarousel.module.css';
import Icons from '../assets/icons/icons';
import axios from 'axios';
export default function TestemonialCarousel(){
  const [data,setData]=useState([]);

  const getData=()=>{

    fetch('testimonials.json'

    ,{

      headers : { 

        'Content-Type': 'application/json',

        'Accept': 'application/json'

       }

    }

    )

      .then(function(response){
        return response.json();

      }).then(function(myJson) {
        setData(myJson)

      });

  }

  useEffect(()=>{

    getData()

  },[]) 

  const rows = data.reduce(function (rows, key, index) { 
    return (index % 2 == 0 ? rows.push([key]) 
      : rows[rows.length-1].push(key)) && rows;
  }, []);
  

  const Sliders = rows.map((item , i) =>

   <Slider.Item className={styles.slide_item}>
    
    <div class="container">
      <div class="row">
      <div class="col-md-6" style={{display:'flex', justifyContent:'center'}}>
        <div class="testimonial-container bg-white">
        <p>{item[0].text}</p>
        <div class="testimonial-inner-box">
          <div class="icon-container">
          <Icons icon="orangeBox" width='20' height='20'/>
            <p class="mt-4">{item[0].author}</p>
          </div>
          <Icons icon="square" width='20' height='20'/>
          </div>
         
        </div>
      </div>
      <div class="col-md-6" style={{display:'flex', justifyContent:'center'}}>
      <div class="testimonial-container bg-white">
     <p>{item[i]?item[1].text:''}</p> 
     <div class="testimonial-inner-box">
     <div class="icon-container">
     <Icons icon="orangeBox" width='20' height='20'/>
     <p class="mt-4">{item[i]?item[1].author:''}</p>
     </div>
     <Icons icon="square" width='20' height='20'/>
          </div>
        
        </div>
      </div>
      </div>
 
      </div>
     
       
      </Slider.Item >
);

 

    return(
     
      <Slider fade interval={null} className="sliderTestimonials">
  {Sliders}
 
</Slider>


    );
}