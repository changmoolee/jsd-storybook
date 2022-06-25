/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { layout } from "../styled";

const box = css`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 50px;
  box-sizing: border-box;
`;

const FeatureIntro = () => {
  return (
    <section css={layout}>
      <div css={box}>
        <h2>Joseph의 기능에 오신걸 확인합니다.</h2>
        왼쪽 nav바에서 원하는 기능들을 선택해서, 각 기능들의 예시와 사용법을
        확인하실 수 있습니다.
      </div>
    </section>
  );
};

export default FeatureIntro;
