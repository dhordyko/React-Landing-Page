import React from "react";
import styles from "./SectionsContainer.module.css";
import Icons from '../../assets/icons/icons';
import CustomButton from '../../utils/CustomButton'
import {useTranslation} from "react-i18next";


export default function Section3(){
  const {t} =useTranslation();
    const boxes = [`${t('number_box_text')}`,`${t('number_box_text')}`,`${t('number_box_text')}`,`${t('number_box_text')}`,`${t('number_box_text')}`]
    const listItems = boxes.map((box, index) =>
   
    <ListItem value={box} number={index+1} styleName={index=1? '':''}/>
  );

    return(
        <div class="container" style={{position:'relative',  marginTop:'100px'}}>
            <div class="row d-flex justify-content-around" >
            {listItems}
            <div class="col-md-4 pt-5 mt-3 m-auto"><CustomButton title={t('more_about_offer')}/></div>
            </div>

        </div>
    )
}
function ListItem(props) {
    return (
      <>
      
      <div  className={`col-md-2  ${ props.number==1?'col-md-offset-1':'' }  ${ props.number%2==0?'odd-cell':'even-cell' }`} >
          <div class="grey-box">
          <h1>#{props.number}</h1>
            <p class="mt-3">{props.value}</p>
            <Icons icon="square" width='20' height='20' />
          </div>
    </div>
     </>
    );
  }