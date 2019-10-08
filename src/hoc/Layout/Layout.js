import React,{Component} from 'react';

import Aux from '../Aux/Aux';
import Styles from './Layout.module.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
// import sidedrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component {

state={
    showSideDrawer:false
}
    sideDrawerClosedHandler=()=>{
this.setState({showSideDrawer:false})
}


sideDrawerToggleHandler = () => {
    this.setState((prevState)=>{
        return {showSideDrawer:!prevState.showSideDrawer}
    })
}

    render() {
    
    return(
    <Aux>
            <Toolbar drawerToogleClicked={this.sideDrawerToggleHandler}/>
            <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler}/>
            {/* <div>layout.js:toolbar side bar backdrop</div> */}
            <main className={Styles.Content}>{this.props.children}</main>
            </Aux>)
    }
}
export default Layout;  