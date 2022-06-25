/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { darkColor, lightColor } from "../../styled";

const container = css`
  position: relative;
`;

const tab = (btnWidth: number, btnHeight: number, isHover: boolean) => css`
  width: ${btnWidth}px;
  height: ${btnHeight}px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: ${darkColor};
  cursor: pointer;
  span {
    opacity: ${isHover ? 1 : 0.5};
    :hover {
      opacity: 1;
    }
  }
`;

const dropDown = (width: number) =>
  css`
    position: absolute;
    width: ${width}px;
    background-color: ${lightColor};
    z-index: 100;
    div {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 10px;
      border: 1px solid black;
      color: white;
      box-sizing: border-box;
      opacity: 0.5;
      cursor: pointer;
      :hover {
        opacity: 1;
      }
    }
  `;
type DropDownProps = {
  btnWidth: number;
  btnHeight: number;
  width: number;
  title: string;
  dropDownItems: string[];
  isHover: any;
  mouseOver: () => void;
  mouseLeave: () => void;
};

const DropDownDemo = ({
  btnWidth,
  btnHeight,
  width,
  title,
  dropDownItems,
  isHover,
  mouseOver,
  mouseLeave,
}: DropDownProps) => {
  return (
    <section css={container}>
      <button
        css={tab(btnWidth, btnHeight, isHover)}
        onMouseEnter={mouseOver}
        onMouseLeave={mouseLeave}
      >
        <span>{title}</span>
      </button>
      {isHover ? (
        <div
          css={dropDown(width)}
          onMouseEnter={mouseOver}
          onMouseLeave={mouseLeave}
        >
          {dropDownItems.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
        </div>
      ) : null}
    </section>
  );
};

export default DropDownDemo;
