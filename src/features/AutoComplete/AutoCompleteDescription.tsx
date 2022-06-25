/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { layout, feature, description } from "../../styled";
import AutoCompleteDemo from "./AutoCompleteDemo";

const affordance = css`
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const AutoCompleteDescription = () => {
  const items = ["apple", "butter", "banana", "orange"];

  return (
    <section css={layout}>
      <div css={feature}>
        <div css={affordance}>
          <AutoCompleteDemo items={items} />
          <span>위의 input에 아무 문자나 입력해 보세요!</span>
        </div>
      </div>
      <div css={description}>
        <h3>AutoComplete</h3>
        <strong>
          AutoComplete 기능을 사용하기 위해서는, 아래 내용을 충족해야 합니다.
        </strong>
        <p>
          1. AutoComplete에서 검색 시 나올 데이터들은 <br />
          props로 items에 문자열 배열 형태로 내려주어야 합니다.
          <br />
          <br />
          {"ex)"}
          <br />
          <code>{`const items = ["apple", "butter", "banana", "orange"];`}</code>
          <br />
          <br />
          <code>{" <AutoCompleteDemo items={items} />"}</code>
          <br />
          <br />
        </p>
      </div>
    </section>
  );
};

export default AutoCompleteDescription;
