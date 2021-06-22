import React from 'react';
import Button from '@material-ui/core/Button';
import Icons from '../assets/icons/icons';
import styles from './customButton.module.css';
export default function CustomButton(props){
    return(

<Button className={styles.footer_btn}>
    <span>{props.title}</span><span className={styles.arrow}>
        <Icons icon="arrowRight" width='20' height='20' /></span>
        </Button>

    );
}