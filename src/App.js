import Header from './components/header_footer/Header';
import Footer from './components/header_footer/Footer';
import i18n from 'i18next';
import {useTranslation, initReactI18next} from "react-i18next"; 
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';
import Carousel from './carousel/Carousel';
import TestemonialCarousel from './carousel/TestemonialCarousel ';
import SectionsContainer from './components/sections/index';
import ContactForm from  './components/contact_form/contact_form';
import './App.css';
import { Element } from 'react-scroll';
i18n
  // load translation using http -> see /public/locales (i.e. https://github.com/i18next/react-i18next/tree/master/example/react/public/locales)
  // learn more: https://github.com/i18next/i18next-http-backend
  // want your translations to be loaded from a professional CDN? => https://github.com/locize/react-tutorial#step-2---use-the-locize-cdn
  .use(Backend)
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    supportedLngs:['pl','en','fr','ua','ru'],
    fallbackLng: 'pl',
   detection:{
    order: [  'cookie', 'htmlTag', 'localStorage',  'path', 'subdomain'],
    caches:['cookie']
   },
   backend:{
     loadPath:'/assets/locales/{{lng}}/translation.json'
   },
   react: {useSuspense:false}
  });

function App() {
 
  return (
    <div className="App" >
    <Header/>
    <Element name="carousel">
    <Carousel/>
        </Element>
        <Element name="sectionsContainer">
        <SectionsContainer/>
        </Element>
        <Element name="testemonialCarousel">
        <TestemonialCarousel/>
        </Element>
        <Element name="contactForm">
        <ContactForm/>
        </Element>
    <Footer/>
    </div>
  );
}

export default App;
