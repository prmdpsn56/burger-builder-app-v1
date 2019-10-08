import React  from 'react';

import Styles from './BuildControls.module.css';

import BuildControl from '../BuildControl/BuildControl';

// import { directive } from '@babel/types';
const controls = [
    {label:'Salad', type:'salad'},
    {label:'Bacon', type:'bacon'},
    {label:'Cheese', type:'cheese'},
    {label:'Meat', type:'meat'},
];

const buildControls = (props) => (

   <div className={Styles.buildcontrols}>
<p><strong>Current Price:{props.price.toFixed(2)}</strong></p>
{controls.map(ctrl => {
return <BuildControl 
            key={ctrl.label} 
            label={ctrl.label}
            added={()=>props.ingredientsAdded(ctrl.type)}
            reduced={()=>props.ingredientsRemoved(ctrl.type)}
            disabled={props.disabled[ctrl.type]}
            />
})}

<button className={Styles.OrderButton} disabled={!props.purchasable} onClick={props.ordered}>order now</button>

   </div>
);

export default buildControls;