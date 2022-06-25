/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { darkColor, lightColor } from "../../styled";

const container = (height: number, toggleOn: boolean) => {
  return css`
    width: ${height * 2}px;
    height: ${height}px;
    display: flex;
    align-items: center;
    padding: ${height / 10}px;
    border-radius: ${height / 1.5}px;
    background-color: ${toggleOn ? darkColor : lightColor};
    div {
      width: ${height}px;
      height: ${height}px;
      border-radius: 50%;
      transform: ${toggleOn ? `translate(100%, 0)` : "translate(0 , 0)"};
      transition: 0.3s;
      background-color: white;
    }
  `;
};

type ToggleProps = {
  height: number;
  toggled: boolean;
  handleToggle: () => void;
};

const ToggleDemo = ({ height, toggled, handleToggle }: ToggleProps) => {
  return (
    <div css={container(height, toggled)} onClick={handleToggle}>
      <div />
    </div>
  );
};

export default ToggleDemo;
