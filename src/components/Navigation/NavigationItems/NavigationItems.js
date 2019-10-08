import React from 'react';
import Styles from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationitems = (props) => (

<ul className={Styles.NavigationItems}>
<NavigationItem link="/" active>Burger Builder</NavigationItem>
<NavigationItem link="/">Checkout Page</NavigationItem>

</ul>

);

export default navigationitems; 