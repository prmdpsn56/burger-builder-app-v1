 import React,{Component} from 'react';
 import Aux from '../../hoc/Aux/Aux';
 import Burger from '../../components/Burger/Burger';
 import BuildControls from '../../components/Burger/BuildControls/BuildControls';
//  import BuildControl from '../../components/Burger/BuildControl'
// import { checkServerIdentity } from 'tls';
import Modal from '../../components/UI/Modal/Modal';
import Ordersummary from '../../components/Ordersummary/Ordersummary';


const INGREDIENTS_PRICES = {
salad:0.6,
cheese:0.4,
meat:1.3,
bacon:0.7

}

  class Burgerbuilder extends Component {

    state = {
      ingredients :{
        salad:0,
        bacon:0,
        cheese:0,
        meat:0,
      },  
      totalPrice: 4,
      purchasable:false,
      purchasing:false
    }


    updatePurchasestate = (ingredients)=>{
    
      const sum = Object.keys(ingredients)
      .map(igKey => {
        return (ingredients[igKey])
      })
      .reduce((sum,el)=>{
        return sum + el
      },0);
console.log(sum);
this.setState({purchasable: sum >0})
    }

    addIngredienthandler = (type) => {
const oldCount = this.state.ingredients[type];
const newCount = oldCount + 1;
const updatedIngredients = {...this.state.ingredients};
updatedIngredients[type]=newCount;
const priceAddition = INGREDIENTS_PRICES[type];
const oldPrice = this.state.totalPrice;
const newPrice = oldPrice+priceAddition;
this.setState({totalPrice:newPrice,ingredients:updatedIngredients});
this.updatePurchasestate(updatedIngredients);
    }

    removeIngredienthandler =(type) => {
      const oldCount = this.state.ingredients[type];
      if(oldCount<=0){
        console.log("nothing is here");
        return;
      }
const newCount = oldCount - 1;
const updatedIngredients = {...this.state.ingredients};
updatedIngredients[type]=newCount;
const priceAddition = INGREDIENTS_PRICES[type];
const oldPrice = this.state.totalPrice;
const newPrice = oldPrice+priceAddition;
this.setState({totalPrice:newPrice,ingredients:updatedIngredients});
this.updatePurchasestate(updatedIngredients);

    }


    purchaseHandler = () => {
      this.setState({purchasing:true});
    } 


    purchaseCancelHandler = () => {
      this.setState({purchasing:false})
    }

    purchaseContinueHandler = () => {
    alert('you continued') ; 
    }
      render(){
        // const burgerPrice = this.state.totalPrice;

      
        const disabledInfo = { 
          ...this.state.ingredients
        };
  for (let key in disabledInfo) {
     disabledInfo[key] = disabledInfo[key] <=0
  }
          return(
            <Aux>
            <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
            <Ordersummary ingredients={this.state.ingredients}
             purchaseCancelled={this.purchaseCancelHandler}
              purchaseContinued={this.purchaseContinueHandler}  
              price={this.state.totalPrice}
            />
            </Modal>

            <Burger ingredients={this.state.ingredients}/>

            <BuildControls
              ingredientsAdded={this.addIngredienthandler}
              ingredientsRemoved={this.removeIngredienthandler}
              disabled={disabledInfo}
              price={this.state.totalPrice}
              purchasable={this.state.purchasable}
              ordered={this.purchaseHandler}
            />

            </Aux>

          );
      }
  } 

  export default Burgerbuilder;