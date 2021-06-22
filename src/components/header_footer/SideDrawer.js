import {React,useState} from 'react';
import { scroller } from 'react-scroll';
import i18next from "i18next";
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import styles from '../header_footer/Header.module.css';
import {useTranslation} from "react-i18next";
export default function SideDrawer(props){
    const {t} =useTranslation();
    const scrollToElement = (element) => {
        scroller.scrollTo(element,{
            duration: 1500,
            delay:100,
            smooth: true,
            offset: -150
        });
    }

    const languages =[
        {
            code:'en',
            lang_name:'English',
            country_code:'gb'
        },
        {
            code:'pl',
            lang_name:'Polish',
            country_code:'pl'
        },
        {
            code:'fr',
            lang_name:'Francais',
            country_code:'fr'
        },
        {
            code:'ru',
            lang_name:'Russain',
            country_code:'ru'
        },
        {
            code:'ua',
            lang_name:'Ukrainian',
            country_code:'ua'
        }
        ]
        const [switchButton, setSwitchButton] = useState(
            {
              
                code: 'pl'
            }
        );
        function handleClick(c_code,code) {
            i18next.changeLanguage(code)
            setSwitchButton({code:c_code})
         }
    return(
        <Drawer
        anchor="right"
        open={props.open}
        onClose={()=> props.onClose(false)}
    >
     <List component="nav" >
     <ListItem button onClick={()=> scrollToElement('featured')}>
                {t('about_us')}
                </ListItem>

                <ListItem button onClick={()=> scrollToElement('venuenfo')}>
                {t('our_offer')}
                </ListItem>

                <ListItem button onClick={()=> scrollToElement('highlights')}>
                {t('our_order')}
                </ListItem>

                <ListItem button onClick={()=> scrollToElement('pricing')}>
                {t('contact')}
                </ListItem>

                <ListItem >
                <div className="dropdown">
  <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
  <span className={`flag-icon  flag-icon-${switchButton.code} mx-2`}></span>{switchButton.l_n}
  </button>
  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
  {languages.map(({lang_name, code,country_code})=>(
          <li key={code}><a onClick={()=> handleClick(country_code, code)} className="dropdown-item " href="#"><span className={`flag-icon  flag-icon-${country_code} mx-2`}></span>{lang_name}</a></li>      
))}

  </ul>
</div>
        
                </ListItem>

            </List> 
    </Drawer>

    );
}