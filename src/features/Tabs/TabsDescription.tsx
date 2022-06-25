/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import TabsDemo from "./TabsDemo";
import { layout, feature, description } from "../../styled";

const affordance = css`
  width: 400px;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const TabsDescription = () => {
  const tabs = ["tab1", "tab2", "tab3"];

  return (
    <section css={layout}>
      <div css={feature}>
        <div css={affordance}>
          {/* <TabsDemo tabs={tabs} /> */}
          <span>
            위의 tap들을 클릭하거나, 마우스 포인터를 가져다 대 보세요!
          </span>
        </div>
      </div>
      <div css={description}>
        <h3>Tabs</h3>
        <strong>
          Tabs 기능을 사용하기 위해서는, 아래 내용을 충족해야 합니다.
        </strong>
        <p>
          1. 각 Tab들에 이름을 부여하기 위해서는 props로 tabs에 문자열 배열로
          내려주어야 합니다.
          <br />
          <br />
          {"ex)"} {<code>const tabs = ["tab1", "tab2", "tab3"]</code>}
          <br />
          <br />
          2. props로 내려주는 tabs 문자열 배열안의 요소 개수에 따라, tab의
          개수도 같이 변동됩니다.
          <br />
          <br />
        </p>
      </div>
    </section>
  );
};

export default TabsDescription;
