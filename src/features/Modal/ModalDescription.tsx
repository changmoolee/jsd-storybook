/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";
import {
  layout,
  feature,
  description,
  mainColor,
  darkColor,
} from "../../styled";
import ModalDemo from "./ModalDemo";

const style = {
  button: css`
    width: 200px;
    height: 50px;
    border: none;
    border-radius: 10px;
    background-color: ${mainColor};
    font-size: 24px;
    color: white;
    box-shadow: 1px 1px 1px 2px ${darkColor};
    :active {
      left: 1px;
      box-shadow: 0 0 1px 2px ${darkColor};
    }
  `,
};

const affordance = css`
  margin: 30px;
`;

const ModalDescription = () => {
  /* 모달 기능을 사용하기 위해서는, 아래 내용을 충족해야 합니다. */
  const [isOpen, setIsOpen] = useState(false);
  /* 1. boolean값을 가진 state를 만들어 줘야 합니다. */
  const handleClose = () => {
    setIsOpen(false);
  };
  /* 2. Modal을 소거하는 상황을 위해 false값으로 바꿔주는 handler를 작성해줘야 합니다. */

  const handleOpen = () => {
    setIsOpen(true);
  };
  /* 3. Modal을 생성하기 위해 true값으로 바꿔주는 handler를 작성해줘야 합니다. */

  return (
    <section css={layout}>
      <div css={feature}>
        {/* <ModalDemo open={isOpen} onClose={handleClose} /> */}
        {/*ModalDemo에 props로 open, onClose 두 가지를 내려줘야 합니다. 
        open에는 Modal 구현 유무를 결정하는 boolean 상태값을, onClose에는 state를 false로 만들어주는 핸들러를 내려줘 합니다.*/}
        <button css={style.button} onClick={handleOpen}>
          modal
        </button>
        <span css={affordance}>왼쪽의 버튼을 클릭해보세요!</span>
      </div>
      <div css={description}>
        <h3>Modal</h3>
        <strong>
          Modal 기능을 사용하기 위해서는, 아래 내용을 충족해야 합니다.
        </strong>
        <p>
          1. boolean값을 가진 state를 만들어 줘야 합니다. <br />
          <br />
          2. Modal을 소거하는 상황을 위해 false값으로 바꿔주는 handler를
          작성해줘야 합니다. <br />
          <br />
          3. Modal을 생성하기 위해 true값으로 바꿔주는 handler를 작성해줘야
          합니다.
          <br />
          <br />
          4. ModalDemo에 props로 <code>open</code>, <code>onClose</code> 두
          가지를 내려줘야 합니다. <br />
          <br />
          5. <code>open</code>에는 Modal 구현 유무를 결정하는 boolean 상태값을,
          <code>onClose</code>에는 state를 false로 만들어주는 핸들러를 내려줘야
          합니다.
        </p>
      </div>
    </section>
  );
};

export default ModalDescription;
