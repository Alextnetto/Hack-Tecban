import React from "react";

import Loading from "../components/loading"
import MatchPage from "./match_page"
import HomePage from "./home"

import { setUserStorage, getUserStorage, clearUserStorage } from "../utils/loginStorage"
import { accountGetGrant } from "../utils/handlerAccountAPI"

class HandlerHome extends React.Component {
  constructor(props) {
    super(props);
  }
 
  render() {
    return (
      <>
        {
        document.URL.match(/.*code=.*/) ?
        <MatchPage /> : <HomePage /> // Home com code e Home sem code
        }
      </>
    );
  }
}

export default HandlerHome