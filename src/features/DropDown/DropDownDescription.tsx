/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { layout, feature, description } from "../../styled";
import DropDown from "./DropDown";

const container = css`
  width: 200px;
  height: 50px;
  display: flex;
  justify-content: center;
`;

const affordance = css`
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const dropDownWidth = 200;

const title = "DropDown1";

const dropDownItems = ["Item1", "Item2", "Item3", "Item4", "Item5"];

const DropDownDescription = () => {
  return (
    <section css={layout}>
      <div css={feature}>
        <div css={affordance}>
          <span>아래의 DropDown에 마우스 포인터를 가져다 대 보세요!</span>
          <section css={container}>
            {/* <DropDownDemo
              title={title}
              dropDownItems={dropDownItems}
              dropDownWidth={dropDownWidth}
            />
            <DropDownDemo
              title="DropDown2"
              dropDownItems={["Item1", "Item2", "Item3"]}
              dropDownWidth={300}
            /> */}
          </section>
        </div>
      </div>
      <div css={description}>
        <h3>DropDown</h3>
        <strong>
          DropDown 기능을 사용하기 위해서는, 아래 내용을 충족해야 합니다.
        </strong>
        <p>
          1. DropDown의 너비를 지정해 줘야 합니다. <br />
          props로 dropDownWidth에 number 값을 내려주면, 해당 너비를 가진
          DropDown이 생성됩니다.
          <br />
          <br />
          {"ex)"}
          <br />
          <code>{"const dropDownWidth = 400;"}</code>
          <br />
          <br />
          <code>{"<DropDownDemo width={dropDownWidth} />"}</code>
          <br />
          <br />
          2. title을 지정해 줘야 합니다. <br />
          props로 title을 문자열을 내려주면, 해당 제목을 가진 DropDown이
          생성됩니다.
          <br />
          <br />
          {"ex)"}
          <br />
          <code>{`const title = "DropDown1";`}</code>
          <br />
          <br />
          <code>{`<DropDownDemo title={title} />`}</code>
          <br />
          <br />
          3. DropDown에 나열될 아이템 이름들을 지정해 줘야 합니다. <br />
          props로 dropDownItems 문자열 배열을 내려주면, 해당 아이템들이 나열된
          DropDown이 생성됩니다.
          <br />
          <br />
          {"ex)"}
          <br />
          <code>{`const dropDownItems = ["Item1", "Item2", "Item3", "Item4", "Item5"];`}</code>
          <br />
          <br />
          <code>{`<DropDownDemo dropDownItems={dropDownItems} />`}</code>
          <br />
          <br />
        </p>
      </div>
    </section>
  );
};

export default DropDownDescription;
