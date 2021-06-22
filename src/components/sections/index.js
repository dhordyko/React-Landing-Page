import React from 'react';
import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';
import styles from './SectionsContainer.module.css'
export default function SectionsContainer(){
    return (
        <div style={{position:'relative', height:'100%',paddingBottom: '100px'}} className={styles.slidersContainer} >
         <Section1/>
         <Section2/>
         <Section3/>

        </div>
    );
};

