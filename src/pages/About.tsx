/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Header from "../components/Header";

const container = css`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;
const box = css`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 50px;
  box-sizing: border-box;
`;

const About = () => {
  return (
    <div css={container}>
      <Header />
      <div css={box}>
        <h1>안녕하세요! Joseph입니다.</h1>
        <h3>개발을 시작하지 얼마 안된 초보 프론드엔드 개발자입니다.</h3>
        <h3></h3>
      </div>
    </div>
  );
};

export default About;
