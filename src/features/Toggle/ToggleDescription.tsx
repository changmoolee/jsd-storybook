/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { layout, feature, description } from "../../styled";

const affordance = css`
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const ToggleDescription = () => {
  return (
    <section css={layout}>
      <div css={feature}>
        <div css={affordance}>
          <span>위의 Toggle을 클릭해 보세요!</span>
        </div>
      </div>
      <div css={description}>
        <h3>Toggle</h3>
        <strong>
          Toggle 기능을 사용하기 위해서는, 아래 내용을 충족해야 합니다.
        </strong>
        <p>
          1. Toggle의 높이를 지정해 줘야 합니다. <br />
          props로 height에 number 값을 내려주면, 해당 높이를 가진 Toggle이
          생성됩니다.
          <br />
          <br />
          {"ex)"}
          <br />
          <code>{"const height = 50;"}</code>
          <br />
          <br />
          <code>{"<ToggleDemo height={height} />"}</code>
          <br />
          <br />
        </p>
      </div>
    </section>
  );
};

export default ToggleDescription;
