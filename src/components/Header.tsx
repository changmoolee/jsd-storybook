/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { lightColor } from "../styled";
import { useNavigate } from "react-router-dom";

const container = css`
  width: 100%;
  max-height: 100px;
  border-bottom: 1px solid ${lightColor};
`;

const layout = css`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  padding: 10px 100px;
  box-sizing: border-box;
`;

const leftBox = css`
  display: flex;
`;

const logo = css`
  width: 100px;
  height: 100%;
  margin: 0 20px;
  object-fit: cover;
`;

const menuBox = css`
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0;
  margin: 0;
  margin-left: 100px;
`;

const menu = css`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  margin: 5px;
  border-radius: 10px;
  box-sizing: border-box;
  list-style: none;
  cursor: pointer;
  :hover {
    background-color: ${lightColor};
  }
`;

const rightBox = css`
  display: flex;
`;

const Header = () => {
  const navigate = useNavigate();

  const goToDocs = () => {
    navigate("/docs");
  };
  const goToFeatures = () => {
    navigate("/feature/intro");
  };
  const goToAboutJoseph = () => {
    navigate("/about");
  };

  return (
    <div css={container}>
      <section css={layout}>
        <div css={leftBox}>
          <a href="/">
            <img alt="logo" src="/assets/logo.png" css={logo} />
          </a>
          <ul css={menuBox}>
            <li css={menu} onClick={goToDocs}>
              Docs
            </li>
            <li css={menu} onClick={goToFeatures}>
              Features
            </li>
            <li css={menu} onClick={goToAboutJoseph}>
              About
            </li>
          </ul>
        </div>
        <div css={rightBox}></div>
      </section>
    </div>
  );
};

export default Header;
