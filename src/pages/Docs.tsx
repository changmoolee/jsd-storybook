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
  padding: 100px;
  box-sizing: border-box;
`;

const title = css`
  font-size: 48px;
  font-weight: 800;
`;

const description = css`
  font-size: 20px;
  margin: 20px;
`;

const subTitle = css`
  font-size: 24px;
  font-weight: 800;
`;

const Docs = () => {
  return (
    <div css={container}>
      <Header />
      <div css={box}>
        <div css={title}>JDS의 UI는... </div>
        <div css={description}>
          React 환경 아래에서 작동합니다. React 라이브러리를 먼저 설치해 주세요!
        </div>
        <br />
        <br />
        <div css={subTitle}>npm install</div>
        <br />
        <div css={description}>
          JDS 라이브러리는 npm package로 이용 가능합니다. <br />
          <br />
          JDS의 UI들을 사용하기 위해서는, npm 설치 과정이 필요합니다.
          <br />
          <br />
          <code>npm install joseph-design-system-beta</code>
        </div>
        <div css={description}>
          위 명령어를 입력하여 설치 후, Joseph의 기능들을 사용할 수 있습니다.
        </div>
      </div>
    </div>
  );
};

export default Docs;
