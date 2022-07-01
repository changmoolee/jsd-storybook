/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const dim = css`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.3);
`;

const box = (width: number) => css`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: ${width}px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f4f4f4;
`;

const header = css`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  padding: 16px;
  padding-bottom: 0;
  margin-bottom: 8px;
  box-sizing: border-box;
`;

const label = css`
  margin-bottom: 4px;
  font-size: 12px;
  color: #525252;
  white-space: nowrap;
`;

const closeBox = css``;

const style = {
  title: css`
    display: flex;
    flex-direction: column;
    font-size: 20px;
    color: #161616;
    white-space: nowrap;
  `,
  description: css`
    padding: 0 16px;
    margin-top: 8px;
    margin-bottom: 16px;
  `,
};

const buttons = css`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

const button = css`
  width: 50%;
  height: 50px;
  display: flex;
  align-items: center;
  padding: 20px;
  margin: 0;
  margin-top: 16px;
  border: 0;
  color: white;
  box-sizing: border-box;
`;

const leftButton = css`
  background-color: #393939;
  :hover {
    opacity: 0.9;
  }
`;
const rightButton = css`
  background-color: #0f5aec;
  opacity: 0.9;
  :hover {
    opacity: 1;
  }
`;

type ModalProps = {
  width: number;
  title: string;
  description: string;
  firstbuttonDisabled: boolean;
  firstButtonText: string;
  firstButtonOnClick: () => void;
  secondarybuttonDisabled: boolean;
  secondaryButtonText: string;
  secondaryButtonOnClick: () => void;
  button: boolean;
  open: boolean;
  closeModal: () => void;
};

const ModalDemo = ({
  width,
  title,
  description,
  firstbuttonDisabled,
  firstButtonText,
  firstButtonOnClick,
  secondarybuttonDisabled,
  secondaryButtonText,
  secondaryButtonOnClick,
  open,
  closeModal,
}: ModalProps) => {
  return open ? (
    <>
      <div css={dim} onClick={closeModal} />
      <div css={box(width)}>
        <div css={header}>
          <div css={style.title}>
            <div css={label}>Account resources</div>
            {title}
          </div>
          <div css={closeBox} onClick={closeModal}>
            <FontAwesomeIcon icon={faXmark} />
          </div>
        </div>
        <article css={style.description}>{description}</article>
        <div css={buttons}>
          {secondarybuttonDisabled ? null : (
            <button css={[button, leftButton]} onClick={secondaryButtonOnClick}>
              {secondaryButtonText}
            </button>
          )}
          {firstbuttonDisabled ? null : (
            <button css={[button, rightButton]} onClick={firstButtonOnClick}>
              {firstButtonText}
            </button>
          )}
        </div>
      </div>
    </>
  ) : null;
};

export default ModalDemo;
