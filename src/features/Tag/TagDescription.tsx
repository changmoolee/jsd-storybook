/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";
import TagDemo from "./TagDemo";
import { layout, feature, description } from "../../styled";

const affordance = css`
  height: 20%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const TagDescription = () => {
  const [tags, setTags] = useState<Array<string>>([]);

  return (
    <section css={layout}>
      <div css={feature}>
        <div css={affordance}>
          <TagDemo tags={tags} setTags={setTags} />
          <span>위의 input에 아무 문자를 입력하고, 엔터키를 눌러보세요!</span>
        </div>
      </div>
      <div css={description}>
        <h3>Tag</h3>
        <strong>
          Tag 기능을 사용하기 위해서는, 아래 내용을 충족해야 합니다.
        </strong>
        <p>
          1. props로 tags에는 빈 배열 상태를, setTags에는 tags의 상태를 조정하는
          setState를 내려주어야 합니다.
          <br />
          <br />
          {"ex)"}
          <br />
          <code>{"const [tags, setTags] = useState<Array<string>>([]);"}</code>
          <br />
          <br />
          <code>{"<TagDemo tags={tags} setTags={setTags} />"}</code>
          <br />
          <br />
          <br />
          2. Tag input에 넣을 수 있는 최대 문자열 길이 한도는 10글자입니다.
          (10글자)
          <br />
          <br />
        </p>
      </div>
    </section>
  );
};

export default TagDescription;
