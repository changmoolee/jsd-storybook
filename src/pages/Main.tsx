/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import Header from "../components/Header";
import Body from "../components/Body";

const container = css`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Main = () => {
  return (
    <div css={container}>
      <Header />
      <Body />
    </div>
  );
};

export default Main;
