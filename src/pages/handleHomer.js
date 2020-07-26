import React from "react";
import {
  Link
} from "react-router-dom";

import Loading from "../components/loading"

import { setUserStorage, getUserStorage, clearUserStorage } from "../utils/loginStorage"
import { accountGetGrant } from "../utils/handlerAccountAPI"

class HandlerHome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  }
 
  render() {
    console.log(this.state.urlCode)
    return (
      <>
        {
        document.URL.match(/.*code=.*/) ?
        <Link to="/login/" > Hello </Link> : <Loading loadingState={this.state.loading} /> // Home com code e Home sem code
        }
      </>
    );
  }
}

export default HandlerHome