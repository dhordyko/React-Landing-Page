
export default function Icons(props){
 
 
      const icons ={
          mapIcon:<svg key="mapIcon" xmlns="http://www.w3.org/2000/svg" width={props.width} height={props.height} fill="currentColor" className="bi bi-map" viewBox="0 0 16 16">
          <path  d="M15.817.113A.5.5 0 0 1 16 .5v14a.5.5 0 0 1-.402.49l-5 1a.502.502 0 0 1-.196 0L5.5 15.01l-4.902.98A.5.5 0 0 1 0 15.5v-14a.5.5 0 0 1 .402-.49l5-1a.5.5 0 0 1 .196 0L10.5.99l4.902-.98a.5.5 0 0 1 .415.103zM10 1.91l-4-.8v12.98l4 .8V1.91zm1 12.98 4-.8V1.11l-4 .8v12.98zm-6-.8V1.11l-4 .8v12.98l4-.8z"/>
        </svg>,
        phoneIcon:<svg key=" phoneIcon" xmlns="http://www.w3.org/2000/svg" width={props.width} height={props.height} fill="currentColor" className="bi bi-telephone-fill" viewBox="0 0 16 16">
        <path  d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
      </svg>,
      sendIcon:<svg key="sendIcon" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" width={props.width} height={props.height} data-prefix="fas" data-icon="paper-plane"  role="img" viewBox="0 0 512 512"><path fill="currentColor" d="M476 3.2L12.5 270.6c-18.1 10.4-15.8 35.6 2.2 43.2L121 358.4l287.3-253.2c5.5-4.9 13.3 2.6 8.6 8.3L176 407v80.5c0 23.6 28.5 32.9 42.5 15.8L282 426l124.6 52.2c14.2 6 30.4-2.9 33-18.2l72-432C515 7.8 493.3-6.8 476 3.2z"/></svg>,
      arrowRight:<svg key="arrowRight" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="long-arrow-alt-right" width={props.width} height={props.height} role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M313.941 216H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12h301.941v46.059c0 21.382 25.851 32.09 40.971 16.971l86.059-86.059c9.373-9.373 9.373-24.569 0-33.941l-86.059-86.059c-15.119-15.119-40.971-4.411-40.971 16.971V216z"/></svg>,
      square:<svg key="square" xmlns="http://www.w3.org/2000/svg" width="73" height="44" viewBox="0 0 73 44"><defs><style></style></defs><g transform="translate(73 44) rotate(180)"><rect class="a" width="8" height="8" transform="translate(65)"/><rect class="a" width="8" height="8" transform="translate(49)"/><rect class="a" width="8" height="8" transform="translate(33)"/><rect class="a" width="8" height="8" transform="translate(16)"/><rect class="a" width="8" height="8"/><rect class="a" width="8" height="8" transform="translate(0 18)"/><rect class="a" width="8" height="8" transform="translate(16 18)"/><rect class="a" width="8" height="8" transform="translate(33 18)"/><rect class="a" width="8" height="8" transform="translate(49 18)"/><rect class="a" width="8" height="8" transform="translate(65 18)"/><rect class="a" width="8" height="8" transform="translate(65 36)"/><rect class="a" width="8" height="8" transform="translate(49 36)"/><rect class="a" width="8" height="8" transform="translate(33 36)"/><rect class="a" width="8" height="8" transform="translate(16 36)"/><rect class="a" width="8" height="8" transform="translate(0 36)"/></g></svg>,
      blacksquare:<svg key="blacksquare" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><defs><style></style></defs><path class="a" d="M40,40H0V0H40V40ZM12.986,18V22.04H18v4.974H22.04V22.04h4.974V18H22.04V12.986H18V18Z"/></svg>,
      orangeBox:<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60"><defs><style>.a{`{fill:#ef7d00;}`} .b{`{fill:#2e2d2c;}`}</style></defs><g transform="translate(-418 -4477)"><rect class="a" width="60" height="60" transform="translate(418 4477)"/><path class="b" d="M0,0V13.5H9a8.969,8.969,0,0,1-9,9V27A13.54,13.54,0,0,0,13.5,13.5V0ZM22.5,0V13.5h9a8.969,8.969,0,0,1-9,9V27A13.54,13.54,0,0,0,36,13.5V0Z" transform="translate(430 4494)"/></g></svg>
    
    }
      
      
return(

<>{Object.keys(icons).map(function(key,i) {
     if(key == props.icon){
      return icons[key];
     }
           })}</>

)

}

