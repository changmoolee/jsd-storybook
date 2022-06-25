/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";

const container = (
  width: number,
  height: number,
  bgColor: string,
  border: string,
  color: string
) => css`
  width: ${width}px;
  height: ${height}px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: ${border};
  border-radius: 10px;
  background-color: ${bgColor};
  color: ${color};
`;

type ButtonProps = {
  width: number;
  height: number;
  bgColor: string;
  border: string;
  color: string;
};

const Button = ({ width, height, bgColor, border, color }: ButtonProps) => {
  return (
    <button css={container(width, height, bgColor, border, color)}>
      Button
    </button>
  );
};

export default Button;
