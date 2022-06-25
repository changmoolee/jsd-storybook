/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { darkColor, lightColor } from "../styled";

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
  justify-content: center;
  padding: 100px;
  box-sizing: border-box;
`;

const title = css`
  font-size: 80px;
  font-weight: 800;
`;

const description = css`
  font-size: 24px;
  margin: 20px;
`;

const button = css`
  width: 100px;
  height: 50px;
  padding: 10px;
  margin: 20px;
  border: none;
  border-radius: 10px;
  background-color: ${lightColor};
  box-sizing: border-box;
  :hover {
    background-color: ${darkColor};
  }
`;

const Intro = () => {
  const navigate = useNavigate();

  const goToDocs = () => {
    navigate("/docs");
  };

  return (
    <div css={container}>
      <Header />
      <div css={box}>
        <div css={title}>Joseph의</div>
        <div css={title}>design-system</div>
        <br />
        <br />
        <div css={description}>
          JDS는 React 컴포넌트 라이브러리로서,
          <br />
          <br />
          각종 UI 기능들을 빠르고 편리하게 사용하실 수 있습니다.
        </div>
        <button css={button} onClick={goToDocs}>
          시작하기
        </button>
      </div>
    </div>
  );
};

export default Intro;
