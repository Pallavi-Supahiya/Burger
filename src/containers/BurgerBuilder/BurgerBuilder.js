import React, { Component } from 'react';
import Auxy from '../../containers/hoc/Auxy';
class BurgerBuilder extends Component {
  render() {
    return (
      <Auxy>
        <div>Burger</div>
        <div>Build Controls</div>
      </Auxy>
    );
  }
}
export default BurgerBuilder;
