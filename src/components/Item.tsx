/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Link } from "react-router-dom";
import { lightColor } from "../styled";

const container = css`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid ${lightColor};
  :hover {
    span {
      background-color: ${lightColor};
    }
  }
`;
const text = css`
  padding: 5px;
  border-radius: 10px;
`;

const linkStyle = css`
  text-decoration: none;
  :link {
    color: black;
  }
  :visited {
    color: black;
  }
`;
interface ItemProps {
  feature: string;
}

const Item = ({ feature }: ItemProps) => {
  return (
    <Link to={`${feature}`} css={linkStyle}>
      <div css={container}>
        <span css={text}>{feature.toUpperCase()}</span>
      </div>
    </Link>
  );
};

export default Item;
