import React, {Component} from 'react';
import Logo from '../../Logo/Logo';
import  NavigationItems from '../NavigationItems/NavigationItems';
import Styles from './SideDrawer.module.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Aux/Aux';

const sidedrawer = (props) => {

    let attachedClasses = [Styles.SideDrawer,Styles.Close];
    if(props.open){
        attachedClasses=[Styles.SideDrawer,Styles.Open]
    }
    return (

        <Aux>
        <Backdrop show={props.open} clicked={props.closed}/>
        <div className={attachedClasses.join(' ')}>
        <div className={Styles.Logo}>
        <Logo/>
         </div>
        <nav>
            <NavigationItems/>
        </nav>
        </div>
        </Aux>
 );
};
//...
   



export default sidedrawer;
