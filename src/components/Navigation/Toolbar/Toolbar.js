import React from 'react';
import Styles from './Toolbar.module.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

const toolbar = (props) => (
    <header className={Styles.Toolbar}>
    <DrawerToggle clicked={props.drawerToogleClicked}/>
    <div className={Styles.Logo}>
    <Logo />

    </div>

    <nav className={Styles.Desktoponly}>
    <NavigationItems/>
    {/* <ul></ul> */}
    </nav>
    </header>

);


export default toolbar;