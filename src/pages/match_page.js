import React from "react";

import Loading from "../components/loading"

import { setUserStorage, getUserStorage, clearUserStorage } from "../utils/loginStorage"
import { accountGetGrant } from "../utils/handlerAccountAPI"

class MatchPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }

  render() {
    return (
      <>
        <Loading loadingState={this.state.loading} />
      </>
    );
  }
}

export default MatchPage