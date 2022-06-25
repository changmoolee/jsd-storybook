/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

const dim = css`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.3);
`;

const box = (width: number, height: number) => css`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: ${width}px;
  height: ${height}px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  border-radius: 20px;
  background-color: white;
  box-sizing: border-box;
`;
const closeBox = css`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;
const style = {
  title: css`
    font-size: 25px;
  `,
  description: css`
    padding-top: 30px;
  `,
};

type ModalProps = {
  width: number;
  height: number;
  title: string;
  description: string;
  open: boolean;
  closeModal: () => void;
};

const ModalDemo = ({
  width,
  height,
  title,
  description,
  open = true,
  closeModal,
}: ModalProps) => {
  return open ? (
    <>
      <div css={dim} onClick={closeModal} />
      <section css={box(width, height)}>
        <div css={closeBox} onClick={closeModal}>
          <FontAwesomeIcon icon={faCircleXmark} />
        </div>
        <div css={style.title}>
          <strong>{title}</strong>
        </div>
        <article css={style.description}>{description}</article>
      </section>
    </>
  ) : null;
};

export default ModalDemo;
