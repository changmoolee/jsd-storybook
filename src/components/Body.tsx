/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Article from "./Article";
import Nav from "./Nav";

const container = css`
  width: 100%;
  height: 100%;
  display: flex;
  box-sizing: border-box;
`;

const Body = () => {
  return (
    <div css={container}>
      <Nav />
      <Article />
    </div>
  );
};

export default Body;
