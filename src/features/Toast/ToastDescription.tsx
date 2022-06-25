/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { layout, feature, description, lightColor } from "../../styled";
import { useState } from "react";
import SlideToastDemo from "./SlideToastDemo";
import PositionedToastDemo from "./PositionedToastDemo";

const button = css`
  width: 150px;
  height: 50px;
  margin: 10px;
  border: none;
  border-radius: 10px;
  background-color: ${lightColor};
  color: white;
`;

const affordance = css`
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const ToastDescription = () => {
  const [isSlideToastOn, setIsSlideToastOn] = useState(false);

  const slideToastOpen = () => {
    setIsSlideToastOn(true);
  };

  const slideToastClose = () => {
    setIsSlideToastOn(false);
  };

  const [isPositionedToastOn, setIsPositionedToastOn] = useState(false);

  const positionedToastOpen = () => {
    setIsPositionedToastOn(true);
  };

  const positionedToastClose = () => {
    setIsPositionedToastOn(false);
  };

  return (
    <section css={layout}>
      <div css={feature}>
        <div css={affordance}>
          <div>
            <button css={button} onClick={slideToastOpen}>
              slideToast
            </button>
            <button css={button} onClick={positionedToastOpen}>
              positionedToast
            </button>
            <SlideToastDemo
              width={200}
              description="slide Toast!"
              color="black"
              open={isSlideToastOn}
              onClose={slideToastClose}
            />
            {/* <PositionedToastDemo
              width={300}
              description="This Toast is positioned."
              color="blue"
              open={isPositionedToastOn}
              onClose={positionedToastClose}
            /> */}
          </div>
          <span>위 버튼들을 각각 클릭해 보세요!</span>
        </div>
      </div>
      <div css={description}>
        <h3>Toast</h3>
        <strong>
          Toast는 원하는 구현 방법에 따라 총 2가지 종류가 존재합니다.
        </strong>
        <br />
        <strong>
          Toast 기능을 사용하기 위해서는, 아래 내용을 충족해야 합니다.
        </strong>
        <p>
          1. boolean값을 가진 state를 만들어 줘야 합니다. <br />
          <br />
          2. Toast를 소거하는 상황을 위해 false값으로 바꿔주는 handler를
          작성해줘야 합니다. <br />
          <br />
          3. Toast을 생성하기 위해 true값으로 바꿔주는 handler를 작성해줘야
          합니다.
          <br />
          <br />
          4. ToastDemo에 props로 <code>open</code>, <code>onClose</code> 두
          가지를 내려줘야 합니다. <br />
          <br />
          5. <code>open</code>에는 Toast 구현 유무를 결정하는 boolean 상태값을,
          <code>onClose</code>에는 state를 false로 만들어주는 핸들러를 내려줘야
          합니다.
        </p>
      </div>
    </section>
  );
};

export default ToastDescription;
