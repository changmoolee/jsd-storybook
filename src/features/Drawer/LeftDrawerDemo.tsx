/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useState } from "react";
import { darkColor, lightColor } from "../../styled";
import { DrawerProps } from "./DrawerDescription";

const button = css`
  width: 100px;
  height: 50px;
  border: none;
  color: white;
  background-color: ${lightColor};
  :hover {
    background-color: ${darkColor};
  }
`;

const drawer = (isDrawerOn: boolean, width?: number) => css`
  position: fixed;
  top: 0;
  left: 0;
  width: ${width}px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: white;
  transform: ${isDrawerOn ? "translate(0,0)" : "translate(-100%,0)"};
  transition: 0.3s;
  z-index: 100;
`;

const dim = css`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 50;
`;

const RightDrawerDemo: React.FC<DrawerProps> = ({ title, width, children }) => {
  const [isDrawerOn, setIsDrawerOn] = useState(false);

  const handleDrawerOpen = () => {
    setIsDrawerOn(true);
  };
  const handleDrawerClose = () => {
    setIsDrawerOn(false);
  };

  return (
    <>
      <button css={button} onClick={handleDrawerOpen}>
        {title}
      </button>
      <section css={drawer(isDrawerOn, width)}>{children}</section>
      {isDrawerOn ? <div css={dim} onClick={handleDrawerClose} /> : null}
    </>
  );
};
export default RightDrawerDemo;
