import React from "react";
import {
  Link
} from "react-router-dom";

import { setUserStorage, getUserStorage, clearUserStorage } from "../utils/loginStorage"
import { accountGetGrant } from "../utils/handlerAccountAPI"

import Index from "../onepirate/Home"

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }
 
  render() {
    return (
      <>
        <Index />
      </>
    );
  }
}

export default HomePage