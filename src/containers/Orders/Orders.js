import React, { Component } from 'react';
import axios from '../../axios-orders';

import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import Order from '../../components/Order/Order';

class Orders extends Component {
   state = {
      orders: [],
      loading: true
   }
   
   componentDidMount() { 
      axios.get('/orders.json')
         .then(response => {
            const fetchedOrders = [];

            for (let key in response.data) {
               fetchedOrders.push({
                  ...response.data[key],
                  id: key
               });
            }
            this.setState({loading: false, orders: fetchedOrders});
            console.log(this.state.orders)
         })
         .catch(error => {
            this.setState({loading: false});
         })

   }


   render () {

      return (
         <div>
            {this.state.orders.map(order => (
               <Order 
                  key={order.id} 
                  ingredients={order.ingredients} 
                  price={+order.price} />
            ))}

         </div>
      );
   }
}

export default withErrorHandler(Orders, axios);