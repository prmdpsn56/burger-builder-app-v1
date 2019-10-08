import React from 'react';
import Styles from './BuildControl.module.css';

  
 const buildControl = (props) => (
     <div className={Styles.BuildControl}>
     <div className={Styles.label}>{props.label}</div>
        <button 
        className={Styles.Less} 
        onClick={props.reduced}
        disabled={props.disabled}>
        
        less
        </button>
        <button className={Styles.More} onClick={props.added}>more</button>

     </div>
 );


 export default buildControl;