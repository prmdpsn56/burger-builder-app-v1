import React, {Component} from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
// import BurgerIngredient from './Burgeringredients/Burgeringredients';


class BurgerBuilder extends Component{
    render(){
        return (
            <Aux>
            <Burger />
            <div>build controls</div> 
            <div>controls</div> 
            </Aux>

        );
    }
} 

export default BurgerBuilder;