import React from "react";
import { css } from "@emotion/core";
import PacmanLoader from "react-spinners/PacmanLoader";
 
const one = css`
  display: block;
  margin-left: 40px;
  margin-top: 20px;
`;

const second = css`
  display: block;
  margin: 0 auto;
  border-color: red;
  margin-top: 110px;
`;

const third = css`
  display: block;
  margin: 0 auto;
  border-color: red;
  margin-top: 100px;
  margin-left: 200px;
`;

function Loading({loadingState}) {
  console.log(loadingState)

  return (
    <div className="sweet-loading">
      <PacmanLoader
        css={one}
        size={120}
        color={"#CFCCCC"}
        loading={loadingState}
      />
      <PacmanLoader
        css={second}
        size={140}
        color={"#E72051"}
        loading={loadingState}
      />
      <PacmanLoader
        css={third}
        size={100}
        color={"#000000"}
        loading={loadingState}
      />
    </div>
  )
}

export default Loading