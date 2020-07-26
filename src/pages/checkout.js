import React from "react";
import Checkout from "../components/Checkout/Checkout"

import { setUserStorage, getUserStorage, clearUserStorage } from "../utils/loginStorage"
import { accountGetGrant } from "../utils/handlerAccountAPI"

class CheckoutPage extends React.Component {
  constructor(props) {
    super(props);
    this.classes = props.classes
  }

  render() {
    return (
      <>
        <Checkout />
      </>
    );
  }
}

export default CheckoutPage
