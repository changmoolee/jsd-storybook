/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { layout, feature, description } from "../../styled";
import TransferListDemo from "./TransferListDemo";

const affordance = css`
  height: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TransferListDescription = () => {
  const leftTitle = "Card1";
  const rightTitle = "Card2";
  const leftItemlist = ["item1", "item2", "item3", "item4", "item5"];
  // You have to make unique, inon-overlapping name.
  const rightItemlist = ["item6", "item7", "item8", "item9", "item10"];
  // You have to make unique, inon-overlapping name.

  return (
    <section css={layout}>
      <div css={feature}>
        <div css={affordance}>
          <TransferListDemo
            leftTitle={leftTitle}
            rightTitle={rightTitle}
            leftItemlist={leftItemlist}
            rightItemlist={rightItemlist}
          />
          <p>
            <br />
            <span>
              1. 아이템들을 클릭하면, 아이템 옆의 체크박스가 체크 됩니다.
            </span>
            <br />
            <span>
              2. 중간에 정렬된 화살표 버튼을 클릭하여 아이템들을 옮겨 보세요!
            </span>
          </p>
        </div>
      </div>
      <div css={description}>
        <h3>TransferList</h3>
        <strong>
          TransferList 기능을 사용하기 위해서는, 아래 내용을 충족해야 합니다.
        </strong>
        <p>
          1. TransferList 내부의 좌우 Card들의 title을 지정해 줘야 합니다.{" "}
          <br />
          props로 문자열을 내려주면, 각 Card의 header에 제목이 생성됩니다.
          <br />
          <br />
          왼쪽 Card는 leftTitle, 오른쪽 Card는 rightTitle을 props로 내려줍니다.
          <br />
          <br />
          {"ex)"}
          <br />
          <code>{`const leftTitle = "Card1";`}</code>
          <br />
          <code>{`const rightTitle = "Card2";`}</code>
          <br />
          <br />
          <code>{`<TransferListDemo leftTitle={leftTitle} rightTitle={rightTitle}/>`}</code>
          <br />
          <br />
          2. TransferList의 양쪽 Card에 나열될 아이템 이름들을 지정해 줘야
          합니다. <br />
          왼쪽 Card는 leftItemlist, 오른쪽 Card는 rightItemlist에 props로 문자열
          배열을 내려줍니다.
          <br />
          <br />
          {"ex)"}
          <br />
          <code>{`const leftItemlist = ["item1", "item2", "item3", "item4", "item5"];`}</code>
          <br />
          <code>{`const rightItemlist = ["item6", "item7", "item8", "item9", "item10"];`}</code>
          <br />
          <br />
          <code>{`<TransferListDemo leftItemlist={leftItemlist} rightItemlist={rightItemlist} />`}</code>
          <br />
          <br />
        </p>
      </div>
    </section>
  );
};

export default TransferListDescription;
