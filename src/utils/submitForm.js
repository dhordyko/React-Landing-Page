import React,{useState} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Container, Row, Col } from 'react-bootstrap';
import InputGroup from 'react-bootstrap/InputGroup'
import styles from "../components/contact_form/contact_form.module.css";
import Icons from '../assets/icons/icons';
import emailjs from 'emailjs-com';
import  apiKey from '../emailkey'
export default function FormExample() {
    const [validated, setValidated] = useState(false);
    const handleSubmit = (e) => {
      const form = e.currentTarget;
      if (form.checkValidity() === false) {
            e.preventDefault();
            e.stopPropagation();
          }else{
          
            emailjs.sendForm(`service_qb4fdzo`, apiKey.TEMPLATE_ID, e.target, apiKey.USER_ID).then((result) => {alert("Message Sent, We will get back to you shortly", result.text);},(error) => {alert("An error occurred, Please try again", console.log(error));});
          }
          e.preventDefault();
          setValidated(true);
        // Prevents default refresh by the browser
      
};
  
    // // const handleSubmit = (event) => {
    
    // //   const form = event.currentTarget;
    // //   if (form.checkValidity() === false) {
    // //     event.preventDefault();
    // //     event.stopPropagation();
    // //   }
  
    //   setValidated(true);
     
    // };
  
    return (
      <Form id="gmail" noValidate validated={validated} onSubmit={handleSubmit} className={styles.submitForm}>
           <h4 className={styles.Title}>Masz pytania?</h4>
           <p class="pt-3" style={{color:'var(--grey)',fontSize:"12px"}}>Napisz do nas, nasi fachowcy chętnie Ci pomogą</p>
        <Form.Row>
          <Form.Group as={Col} md="12" controlId="validationCustom01">
            
            <Form.Control
              required
              name="firstname"
              type="text"
              className={`form-control ${styles.formField}`}
              placeholder="Twoje imię"
             
            />
            <Form.Control.Feedback type="invalid" >
               Brak imienia
              </Form.Control.Feedback>
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="12" controlId="validationCustom02">
            <Form.Control
              required
              name="reply_to"
              type="email"
              placeholder="Last name"
              defaultValue="Twój e-mail"
              className={`form-control ${styles.formField} mt-4`}
            />
            <Form.Control.Feedback type="invalid" >
               Brak adresu email
              </Form.Control.Feedback>
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="12" controlId="validationCustomUsername">
            <InputGroup hasValidation>
           
              <Form.Control
                type="text"
                name="subject"
                placeholder="Temat wiadomości"
                aria-describedby="inputGroupPrepend"
                className={`form-control ${styles.formField} mt-4`}
                required
              />
              <Form.Control.Feedback type="invalid" >
               Brak tematu wiadomości
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} md="12" controlId="validationCustom03">
            <Form.Control
            name="message"
             type="text" 
             placeholder="Treść wiadomości"
              required
              className={`form-control ${styles.formField} mt-4`}
              as="textarea" rows={3}
               />
            <Form.Control.Feedback type="invalid" >
             Brak wiadomości
            </Form.Control.Feedback>
          </Form.Group>
        </Form.Row>
       
        <Button type="submit" className={`mt-4 ${styles.submitButton}`}>Wyślij<span className={styles.arrow}>
        <Icons icon="arrowRight" width='20' height='20' /></span></Button>
      </Form>
    );
  }
  
