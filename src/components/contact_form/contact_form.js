import React from "react";
import img1 from "../../assets/img/construction.png";
import styles from "./contact_form.module.css";
import CustomButton from '../../utils/CustomButton';
import FormExample from '../../utils/submitForm'
export default function ContactForm(){
    return(
        <div class="container-fluid contact-form" style={{position:'relative', height:'800px', paddingTop:'130px',paddingBottom:'230px', marginBottom:'100px'}}>
     <div class="row h-100">
        <div class="col-md-6 h-100" style={{}}>
       <div className="image-container " style={{backgroundImage: `url(${img1})`}}></div>
        </div>
        <div class="col-md-6 d-flex justify-content-start pt-5" >
        <FormExample />
        {/* <form  className={styles.submitForm}> 
        <h4 className={styles.Title}>Masz pytania?</h4>
        <p class="pt-3" style={{color:'var(--grey)',fontSize:"12px"}}>Napisz do nas, nasi fachowcy chętnie Ci pomogą</p>
  <div class="form-row ">
    <div class="form-group col-md-12">
      <input id="validationTooltip01" type="text" className={`form-control ${styles.formField}`} id="inputEmail4" placeholder="Twoje imię"/>
      <div class="invalid-tooltip">
        Please provide a valid city.
      </div>
    </div>
    <div class="form-group col-md-12">
      <input id="validationTooltip02" type="email" className={`form-control ${styles.formField}`} id="inputPassword4" placeholder="Twój e-mail"/>
      <div class="invalid-tooltip">
        Please provide a valid city.
      </div>
    </div>
  </div>
    <input id="validationTooltip03" type="text" className={`form-control ${styles.formField}`} id="inputAddress2" placeholder="Temat wiadomości"/>
    <div class="invalid-tooltip">
        Please provide a valid city.
      </div>
  <div class="form-row">
    <div class="form-group col-md-12">
      <textarea  id="validationTooltip04" type="text" style={{height:'150px'}} className={`form-control ${styles.formField}`} id="inputCity" placeholder="Treść wiadomości"/>
      <div class="invalid-tooltip">
        Please provide a valid city.
      </div>
    </div>
     
    </div>
    <button type="submit" title={'Wyślij'} style={{color:'white'}}></button>
</form> */}

        </div>
    </div>
        </div>
    )
}