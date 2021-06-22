import React from "react";
import img1 from "../../assets/img/img1.png";
import img2 from "../../assets/img/img2.png";
import styles from "./SectionsContainer.module.css";
import {useTranslation} from "react-i18next"; 
export default function Section1(){
    const {t} =useTranslation();
    return(
        <div class="container" style={{position:'relative', paddingBottom:'100px'}}>
     <div class="row">
        <div className={`col-md-6 ${styles.text_container}`}>
        <h4 class="mb-5">{t('quality_garantee1')}<span class="d-block py-2">{t('quality_garantee2')}</span> </h4>
        <p className={styles.custom_text}>{t('long_text')}</p>
        </div>
        <div class="col-md-6">
        <div className={styles.images_holder}>
        <img src={img2} className={styles.img2}/> 
        <img src={img1} className={styles.img1}/>
        <div class="orange-box">
        <p>{t('48h_text1')}</p>
        <div>{t('48h')}</div>
        <p>{t('48h_text2')}</p>
        </div>  
             
        </div>

        </div>
    </div>
        </div>
    )
}