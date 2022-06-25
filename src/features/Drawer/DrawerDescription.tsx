/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { layout, feature, description } from "../../styled";
import TopDrawerDemo from "./TopDrawerDemo";
import RightDrawerDemo from "./RightDrawerDemo";
import BottomDrawerDemo from "./BottomDrawerDemo";
import LeftDrawerDemo from "./LeftDrawerDemo";
import { children } from "./ChildrenExample";

const ButtonsLayout = css`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
`;

const affordance = css`
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export interface DrawerProps extends React.HTMLAttributes<any> {
  title: string;
  width?: number;
  height?: number;
}

const DrawerDescription = () => {
  return (
    <section css={layout}>
      <div css={feature}>
        <div css={affordance}>
          <div css={ButtonsLayout}>
            <span />
            {/* <TopDrawerDemo title="TopDrawer" height={300}>
              {children}
            </TopDrawerDemo> */}
            <span />
            <LeftDrawerDemo title="LefttDrawer" width={300}>
              {children}
            </LeftDrawerDemo>
            <span />
            <RightDrawerDemo title="RightDrawer" width={100}>
              {children}
            </RightDrawerDemo>
            <span />
            <BottomDrawerDemo title="BottomDrawer" height={200}>
              {children}
            </BottomDrawerDemo>
          </div>
          <span>상하좌우 방향의 버튼들을 각각 클릭해 보세요!</span>
        </div>
      </div>
      <div css={description}>
        <h3>Drawer</h3>
        <strong>Drawer는 방향에 따라 총 4가지 종류가 존재합니다.</strong>
        <br />
        <strong>
          Drawer가 나오는 방향에 따라, 너비 혹은 높이를 지정할 수 있습니다.
        </strong>
        <p>
          1. 위쪽과 아래쪽에서 각각 구현되는 TopDrawerDemo와 BottomDrawerDemo는
          높이를 지정해 줘야 합니다. <br />
          props로 height number 값을 내려주면, 해당 높이를 가진 Drawer가
          생성됩니다.
          <br />
          <br />
          {"ex)"}
          <br />
          <code>{"const height = 300;"}</code>
          <br />
          <br />
          <code>{"<TopDrawerDemo height={height} />"}</code>
          <br />
          <code>{"<BottomDrawerDemo height={height} />"}</code>
          <br />
          <br />
          2. 왼쪽과 오른쪽에서 각각 구현되는 LeftDrawerDemo와 RightDrawerDemo는
          너비를 지정해 줘야 합니다. <br />
          props로 width number 값을 내려주면, 해당 너비를 가진 Drawer가
          생성됩니다.
          <br />
          <br />
          {"ex)"}
          <br />
          <code>{"const width = 300;"}</code>
          <br />
          <br />
          <code>{"<LeftDrawerDemo width={width} />"}</code>
          <br />
          <code>{"<RightDrawerDemo width={width} />"}</code>
          <br />
          <br />
          3. title을 지정해 줘야 합니다. <br />
          props로 title을 문자열을 내려주면, 해당 title을 이름으로 가지고
          Drawer를 on/off할 수 있는 버튼이 생성됩니다.
          <br />
          <br />
          {"ex)"}
          <br />
          <code>{`const title = "TopDrawer";`}</code>
          <br />
          <br />
          <code>{`<TopDrawerDemo title={title} />`}</code>
          <br />
          <br />
          4. Drawer에 마크업을 자식컴포넌트로 넣어 원하는 디자인을 구현할 수
          있습니다. <br />
          미리 제작된 마크업을 Drawer의 자식 컴포넌트로 넣어 주면, 해당 코드가
          Drawer 내부에 구현됩니다.
          <br />
          <br />
          {"ex)"}
          <br />
          <code>{`import { children } from "./ChildrenExample";`}</code>
          <br />
          <br />
          <code>{`<TopDrawerDemo title="TopDrawer" height={300}>`}</code>
          <br />
          <code> {`{children}`}</code>
          <br />
          <code>{`</TopDrawerDemo>`}</code>
          <br />
          <br />
        </p>
      </div>
    </section>
  );
};

export default DrawerDescription;
