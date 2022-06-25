/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { layout, feature, description } from "../../styled";
import SkeletonUIDemo from "./SkeletonUIDemo";

const skeletons = css`
  width: 500px;
  height: 500px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
  justify-items: center;
  align-items: center;
  font-size: 24px;
  box-sizing: border-box;
`;

const rectangleExample = css`
  width: 200px;
  height: 50px;
`;

const squareExample = css`
  width: 100px;
  height: 100px;
`;

const circleExample = css`
  width: 100px;
  height: 100px;
  border-radius: 50%;
`;

const SkeletonUIDescription = () => {
  return (
    <section css={layout}>
      <div css={feature}>
        <section css={skeletons}>
          Rectangle :
          <SkeletonUIDemo>
            <div css={rectangleExample}></div>
          </SkeletonUIDemo>
          Square :
          <SkeletonUIDemo>
            <div css={squareExample}></div>
          </SkeletonUIDemo>
          Circle :
          <SkeletonUIDemo>
            <div css={circleExample}></div>
          </SkeletonUIDemo>
        </section>
      </div>
      <div css={description}>
        <h3>SkeletonUI</h3>
        <strong>
          SkeletonUI 는 마크업을 자식컴포넌트로 넣어 원하는 디자인을 구현할 수
          있습니다.
        </strong>
        <p>
          SkeletonUI 에 마크업을 자식컴포넌트로 넣어 원하는 디자인을 구현할 수
          있습니다. <br />
          미리 제작된 마크업을 SkeletonUI 의 자식 컴포넌트로 넣어 주면, 해당
          마크업 모양의 SkeletonUI 가 구현됩니다.
          <br />
          <br />
          {"ex)"}
          <br />
          <code>{`import {children} from "./ChildrenExample";`}</code>
          <br />
          <br />
          <code>{`<SkeletonUIDemo>`}</code>
          <br />
          <code> {`{children}`}</code>
          <br />
          <code>{`</SkeletonUIDemo>`}</code>
          <br />
          <br />
        </p>
      </div>
    </section>
  );
};

export default SkeletonUIDescription;
