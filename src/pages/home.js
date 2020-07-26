import React from "react";
import {
  Link
} from "react-router-dom";

import { setUserStorage, getUserStorage, clearUserStorage } from "../utils/loginStorage"
import { accountGetGrant } from "../utils/handlerAccountAPI"

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
        <Link to="/login/" > Hello </Link>
      </>
    );
  }
}

export default HomePage