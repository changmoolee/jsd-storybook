/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { darkColor, lightColor } from "../../styled";

const container = css`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  div {
    flex-grow: 1;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
    font-size: 24px;
    color: white;
    background-color: ${lightColor};
    :hover {
      background-color: ${darkColor};
      cursor: pointer;
    }
  }
`;

const items = ["item1", "item2", "item3", "item4", "item5"];

export const children = (
  <div css={container}>
    {items.map((item, index) => (
      <div key={index}>{item}</div>
    ))}
  </div>
);
