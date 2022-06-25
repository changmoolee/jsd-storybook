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

const drawer = (isDrawerOn: boolean, height?: number) => css`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: ${height}px;
  display: flex;
  flex-direction: column;
  background-color: white;
  transform: ${isDrawerOn ? "translate(0,0)" : "translate(0,-100%)"};
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

const TopDrawerDemo: React.FC<DrawerProps> = ({ title, height, children }) => {
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
      <section css={drawer(isDrawerOn, height)}>{children}</section>
      {isDrawerOn ? <div css={dim} onClick={handleDrawerClose} /> : null}
    </>
  );
};

export default TopDrawerDemo;
