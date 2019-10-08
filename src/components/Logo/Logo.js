import React from 'react';
import Burgerlogo from '../../assets/Images/burger-logo.png';
import Styles from './Logo.module.css'
const logo = (props) => (

<div className={Styles.Logo}>
<img src={Burgerlogo} alt="myburger" />
</div>


);

export default logo;