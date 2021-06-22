import React, { Component,useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import logo from '../../assets/img/webshopbouwmaterialen.eu-03@2x.png';
import styles from '../header_footer/Header.module.css'
import { makeStyles} from '@material-ui/core'
import { scroller } from 'react-scroll';
import Button from '@material-ui/core/Button';
import i18next from "i18next"; 
import SideDrawer from './SideDrawer';
import {useTranslation} from "react-i18next"; 

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

const useStyles =makeStyles (theme=>({
    toggle_btn:{
        marginLeft:'3%',
        backgroundColor:'var(--black-color)',
        position: 'absolute',
        transform:'translateX(-15px)',
        [theme.breakpoints.up('lg')]: {
                display: 'none'
          },
         
            
        }  
    }) 
  )

export default function Header() {
const classes = useStyles();
const {t} =useTranslation();
    // componentDidMount(){
    //     window.addEventListener('scroll',this.handleScroll);
    // }


    // handleScroll = () => {
    //    if(window.scrollY > 0){
    //         this.setState({
    //             headerShow: true
    //         })
    //    } else {
    //         this.setState({
    //             headerShow: false
    //         })
    //    }
    // }


    // toggleDrawer = (value) => {
    //     this.setState({
    //         drawerOpen: value
    //     })
    // }
    const [switchButton, setSwitchButton] = useState(
        {
          
            code: 'pl'
        }
    )
    const [sidebarButton, settoggleDrawer] = useState(
        {
          
            position: false
        }
    )
    function handleClick(c_code,code) {
        i18next.changeLanguage(code)
        setSwitchButton({code:c_code})
     }
     function toggleDrawer(value) {
        settoggleDrawer({position:value})
     }
    return (
        <AppBar
        position="fixed"
       
    >
        <Toolbar className={styles.header}>

            <div className={styles.header_logo}>
                <img src={logo}/>            </div>

            <IconButton
                aria-label="Menu"
                color="inherit"
                onClick={()=>toggleDrawer(true)}
                className={classes.toggle_btn}
             
            >
                <MenuIcon/>
            </IconButton> 
            <List component="nav" className={styles.navbar}>
                <ListItem button onClick={()=> scrollToElement('sectionsContainer')}>
                {t('about_us')}
                </ListItem>

                <ListItem button onClick={()=> scrollToElement('sectionsContainer')}>
                {t('our_offer')}
                </ListItem>

                <ListItem button onClick={()=> scrollToElement('testemonialCarousel')}>
                {t('our_order')}
                </ListItem>

                <ListItem button onClick={()=> scrollToElement('contactForm')}>
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
            <SideDrawer
                        open={sidebarButton.position}
                        onClose={(value)=> toggleDrawer(value)}
                    />
        </Toolbar>
    </AppBar>
    );
  }

