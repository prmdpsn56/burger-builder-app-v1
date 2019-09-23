import React from 'react';
import Styles from './Burger.module.css';
import BurgerIngredient from './Burgeringredients/Burgeringredients';

const burger = (props) =>{
return(
    <div className={Styles.Burger}>
    <div>helo</div>
        <BurgerIngredient type='bread-top' />
        <BurgerIngredient type='cheese' />
        <BurgerIngredient type='meat' />

        <BurgerIngredient type='bread-bottom' />

    </div>
)

};

export default burger;