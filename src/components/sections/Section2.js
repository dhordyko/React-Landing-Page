import React from "react";
import styles from "./SectionsContainer.module.css";
import Icons from '../../assets/icons/icons';
import CustomButton from '../../utils/CustomButton';
import {useTranslation} from "react-i18next";
export default function Section2(){
  const {t} =useTranslation();
    const boxes = [`${t('text1')}`,`${t('text2')}`,
    `${t('text3')}`,`${t('text4')}`,`${t('text5')}`,
    `${t('text6')}`,`${t('text7')}`,`${t('text8')}`];
    const listItems = boxes.map((box) =>
    <ListItem value={box} />
  );
    return(
        <div class="container-fluid " style={{position:'relative', padding:'100px 0px', backgroundColor:'#D4D4D4',marginTop:'100px'}}>
            <div class="row  m-auto px-lg-5 row-container d-flex flex-md-row flex-column" >
            {listItems}
            <div class="col-md-4 pt-5 mt-3 m-auto"><CustomButton title={t('more_about_offer')}/></div>
            </div>

        </div>
    )
}
function ListItem(props) {
    const value = props.value;
    return (
      <div class="orange-cell col-xl-3 col-md-6 mt-5 px-5 d-flex justify-content-center">
          <div className={styles.orange_container}>
          <div key={value.toString()}>
        <h4 >{value}</h4>
        <p class="w-75 m-auto text-center">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed.</p>
      </div>
      <div class="icon-container w-100 d-flex justify-content-end ">
    <Icons icon="blacksquare" width='20' height='20'/>
      </div>
      <div className={styles.icon_box}>
      <Icons icon="square" width='20' height='20' />
      </div>
          </div>

      </div>
     
    );
  }