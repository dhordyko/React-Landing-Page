import AppBar from '@material-ui/core/AppBar';
import List from '@material-ui/core/List';

import ListItem from '@material-ui/core/ListItem';
import styles from '../header_footer/Footer.module.css';
import Icons from '../../assets/icons/icons';
import logo from '../../assets/img/webshopbouwmaterialen.eu-03@2x.png';
import CustomButton from '../../utils/CustomButton'
export default function Footer() {
 
    return(
<footer className={styles.footer}>
<div className={['container', styles.container].join(' ')}>
    <div className="row">
        <div className="col-md-3">
            <List>
                <ListItem > <img className={styles.logo} src={logo}/> </ListItem>
            </List>
        </div>
        <div className="col-md-3">
        <List >
                <ListItem className={styles.footer_item}><Icons icon="mapIcon" width='20' height='20'/></ListItem>
                <ListItem className={styles.footer_item}>RENO-HOUSE ZMIENNICA 163,</ListItem>
                <ListItem className={styles.footer_item}>36-200 BRZOZÓW, POLEN</ListItem>
            </List>
        </div>
        <div className="col-md-3">
        <List>
        <ListItem className={styles.footer_item}><Icons icon="phoneIcon" width='20' height='20'/></ListItem>
                <ListItem className={styles.footer_item}>+32-493-91 06 38</ListItem>
                <ListItem className={styles.footer_item}> JESTEŚMY DOSTĘPNI 24/7</ListItem>

            </List>
        </div>
        <div className="col-md-3">
        <List>
                <ListItem  className={styles.footer_item}><Icons icon="sendIcon" width='20' height='20'/></ListItem>
                <ListItem  className={styles.footer_item}>MASZ PYTANIA?</ListItem>
                <ListItem  className={styles.footer_item}>NAPISZ DO NAS MAILA</ListItem>
                <ListItem  className={styles.footer_item} ><CustomButton title={'Wyślij zapytanie'}/></ListItem>
            </List>
        </div>
    </div>
</div>


</footer>
    );

}