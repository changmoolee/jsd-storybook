/** @jsxImportSource @emotion/react */
import React from "react";
import { css, keyframes } from "@emotion/react";

const animation = keyframes`
  0% {
      background-position: 0 0%;
  }
  50% {
      background-position: 100% 0%;
  }
  100% {
      background-position: 0 0%;
  }
`;

const container = (width: string) => css`
  > * {
    animation: ${animation};
    animation-duration: 3s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    background: linear-gradient(
      -90deg,
      #e8e8e8 0% 40%,
      #c9c9c9 40% 60%,
      #e8e8e8 60% 100%
    );
    background-size: 400% 400%;
  }
  width: ${width};
`;

interface SkeletonUIProps extends React.HTMLAttributes<any> {
  width: string;
}

const SkeletonUI: React.FC<SkeletonUIProps> = ({ width, children }) => {
  return <div css={container(width)}>{children}</div>;
};

export default SkeletonUI;
