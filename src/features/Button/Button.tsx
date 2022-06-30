/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";

const container = (
  bgColor: string,
  hover: { border: string; bgColor: string; color: string },
  active: { border: string; bgColor: string; color: string },
  border: string,
  color: string,
  size: string
) => css`
  height: ${size === "small"
    ? "32px"
    : size === "middle"
    ? "40px"
    : size === "large"
    ? "48px"
    : size === "xlarge"
    ? "64px"
    : size === "2xlarge"
    ? "80px"
    : "32px"};
  display: flex;
  align-items: center;
  padding: 3px 60px 3px 12px;
  border: ${border};
  background-color: ${bgColor};
  font-size: 14px;
  color: ${color};
  :hover {
    border: ${hover.border};
    background-color: ${hover.bgColor};
    color: ${hover.color};
  }
  :focus {
    border-width: 4px;
    border-style: double;
  }
  :active {
    border: ${active.border};
    background-color: ${active.bgColor};
    color: ${active.color};
  }
`;

type ButtonProps = {
  name: string;
  bgColor: string;
  hover: { border: string; bgColor: string; color: string };
  active: { border: string; bgColor: string; color: string };
  border: string;
  color: string;
  size: string;
  tabIndex: number;
  onClick: () => void;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
};

const Button = ({
  name,
  bgColor,
  hover,
  active,
  border,
  color,
  size,
  tabIndex,
  onClick,
  onMouseEnter,
  onMouseLeave,
}: ButtonProps) => {
  return (
    <button
      css={container(bgColor, hover, active, border, color, size)}
      tabIndex={tabIndex}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {name}
    </button>
  );
};

export default Button;
