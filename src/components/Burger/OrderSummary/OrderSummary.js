import React, { Component } from 'react';
import Auxy from '../../../containers/hoc/Auxy';
import Button from '../../UI/Button/Button';
class OrderSummary extends Component {
  //This could be a functional Component, doesn't have to be a class
  componentDidUpdate() {
    console.log('[OrderSummary] WillUpdate');
  }

  render() {
    const ingredientSummary = Object.keys(this.props.ingredients).map(
      (igKey) => {
        return (
          <li key={igKey}>
            <span style={{ textTransform: 'capitalize' }}>{igKey}</span>:{' '}
            {this.props.ingredients[igKey]}
          </li>
        );
      }
    );

    return (
      <Auxy>
        <h3>Your Order</h3>
        <p> A delicious burger with folowing ingredients:</p>
        <ul>{ingredientSummary}</ul>
        <p>
          <strong>Total Price: {this.props.price.toFixed(2)} </strong>{' '}
        </p>
        <p>Continue to Checkout?</p>
        <Button btnType="Danger" clicked={this.props.purchaseCancelled}>
          CANCEL
        </Button>
        <Button btnType="Success" clicked={this.props.purchaseContinued}>
          CONTINUE
        </Button>
      </Auxy>
    );
  }
}

export default OrderSummary;
