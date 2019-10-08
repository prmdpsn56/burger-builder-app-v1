import React from 'react';
import Styles from './Burger.module.css';
import BurgerIngredient from './Burgeringredients/Burgeringredients';

const burger = (props) =>{

    let transformedIngredients = Object.keys(props.ingredients).map(igKey => {
        return [...Array(props.ingredients[igKey])]
        .map((_,i)=>{
            return <BurgerIngredient key={igKey+i} type={igKey} />
        })
    }).reduce((arr,el)=>{
        return arr.concat(el);
    },[]);

    console.log(transformedIngredients);

    if (transformedIngredients.length === 0){
    transformedIngredients = <p>please add some ingredients</p>
}
return(
    <div className={Styles.Burger}>
    {/* <div>helo</div> */}
        <BurgerIngredient type='bread-top' />
     {transformedIngredients}

        <BurgerIngredient type='bread-bottom' />

    </div>
)

};

export default burger;