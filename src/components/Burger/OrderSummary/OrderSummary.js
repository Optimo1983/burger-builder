import React, { Component } from 'react';
import Aux from '../../../hoc/Auxillary/Auxillary';
import Button from '../../UI/Button/Button';

// This could be a functional component, doesn't have to be a class
class OrderSummary extends Component {
   
   // Triggered when component will be updated
   componentWillUpdate() {
      console.log('[Order Summary] WillUpdate')
   }

   render() {
      const ingredientSummary = Object.keys(this.props.ingredients)
      .map(igKey => {
         return (
            <li key={igKey}>
               <span style={{textTransform: 'capitalize'}}>{igKey}</span>
               : {this.props.ingredients[igKey]}
            </li>

         )
      })
      
      return (
         <Aux>
            <h3>Your Order</h3>

            <p>A delicious burger with the following ingredients:</p>

            <ul>
               {ingredientSummary}
            </ul>

            <p><strong>Total Price: ${this.props.price.toFixed(2)}</strong></p>

            <p>Continue to checkout?</p>

            <Button clicked={this.props.purchaseCancelled} btnType='Danger'>CANCEL</Button>

            <Button clicked={this.props.purchaseContinued} btnType='Success'>CONTINUE</Button>
            
            
         </Aux>
      );
   };
}

export default OrderSummary;