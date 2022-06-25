/** @jsxImportSource @emotion/react */
import React from "react";
import { css, keyframes } from "@emotion/react";

const animation = keyframes`
  0% {
    background-color: rgba(165,165,165,0.1);
  }
  50% {
    background-color: rgba(165,165,165,0.3);
  }
  100% {
    background-color: rgba(165,165,165,0.1);
  }
`;

const container = css`
  > * {
    animation: ${animation};
    animation-duration: 1s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }
`;

interface SkeletonUIProps extends React.HTMLAttributes<any> {}

const SkeletonUIDemo: React.FC<SkeletonUIProps> = ({ children }) => {
  return <div css={container}>{children}</div>;
};

export default SkeletonUIDemo;
