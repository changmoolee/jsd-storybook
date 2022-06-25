/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useState } from "react";
import { lightColor } from "../../styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesLeft } from "@fortawesome/free-solid-svg-icons";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";

const layout = css`
  display: flex;
  align-items: center;
`;

const card = css`
  width: 200px;
  max-height: 1000px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
`;

const cardHeader = css`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  border-bottom: 0;
  font-size: 24px;
  font-weight: 600;
`;

const itemlist = css`
  width: 100%;
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid black;
  overflow: auto;
`;

const itemContainer = css`
  width: 100%;
  min-height: 80px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  box-sizing: border-box;
  :hover {
    background-color: ${lightColor};
  }
`;

const checkbox = css`
  width: 20px;
  height: 20px;
`;

const itemText = css`
  width: 100%;
  margin-left: 20px;
  font-size: 24px;
`;

const buttonlist = css`
  width: 100px;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const button = () => {
  return css`
    width: 50px;
    height: 50px;
    padding: none;
    border: none;
    border-radius: 5px;
    background-color: ${lightColor};
    cursor: pointer;
    opacity: 0.5;
    :hover {
      opacity: 1;
    }
    :active {
      opacity: 1;
    }
  `;
};

type TransferListProps = {
  leftTitle: string | null;
  rightTitle: string | null;
  leftItemlist: string[];
  rightItemlist: string[];
};

const TransferListDemo = ({
  leftTitle,
  rightTitle,
  leftItemlist,
  rightItemlist,
}: TransferListProps) => {
  const [left, setLeft] = useState<string[]>(leftItemlist);
  const [right, setRight] = useState<string[]>(rightItemlist);

  const [leftChecked, setLeftChecked] = useState<boolean[]>(
    Array(left.length).fill(false)
  );

  const [rightChecked, setRightChecked] = useState<boolean[]>(
    Array(right.length).fill(false)
  );

  const moveCheckedLeft = () => {
    let itemToMove: string[] = [];

    for (let index = 0; index < rightChecked.length; index++) {
      if (rightChecked[index]) {
        itemToMove.push(right[index]);
        setLeftChecked((leftChecked) => {
          leftChecked.fill(false).push(false);
          return leftChecked;
        });
      }
    }

    setRightChecked((rightChecked) =>
      rightChecked.filter((checked) => !checked).fill(false)
    );

    setLeft((left) => left.concat(itemToMove));
    setRight((right) => right.filter((_, i) => !rightChecked[i]));
  };

  const moveCheckedRight = () => {
    let itemToMove: string[] = [];

    for (let index = 0; index < leftChecked.length; index++) {
      if (leftChecked[index]) {
        itemToMove.push(left[index]);
        setRightChecked((rightChecked) => {
          rightChecked.fill(false).push(false);
          return rightChecked;
        });
      }
    }

    setLeftChecked((leftChecked) =>
      leftChecked.filter((checked) => !checked).fill(false)
    );

    setRight((right) => right.concat(itemToMove));
    setLeft((left) => left.filter((_, i) => !leftChecked[i]));
  };

  const moveAllLeft = () => {
    setLeft((left) => left.concat(right));
    setRight([]);
  };

  const moveAllRight = () => {
    setRight((right) => right.concat(left));
    setLeft([]);
  };

  type ItemProps = {
    item: string;
    index: number;
    setCheckedArr: React.Dispatch<React.SetStateAction<boolean[]>>;
  };

  const Item = ({ item, index, setCheckedArr }: ItemProps) => {
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const { checked } = event.target;

      if (checked) {
        setCheckedArr((checkedArr) => {
          checkedArr[index] = true;
          return checkedArr;
        });
      } else {
        setCheckedArr((checkedArr) => {
          checkedArr[index] = false;
          return checkedArr;
        });
      }
    };

    return (
      <label css={itemContainer} htmlFor={`${item}`}>
        <input
          css={checkbox}
          id={`${item}`}
          type="checkbox"
          onChange={onChange}
        />
        <span css={itemText}>{item}</span>
      </label>
    );
  };

  return (
    <div css={layout}>
      <div css={card}>
        <div css={cardHeader}>{leftTitle}</div>
        <div css={itemlist}>
          {left.map((item, index) => (
            <Item
              key={item}
              item={item}
              index={index}
              setCheckedArr={setLeftChecked}
            />
          ))}
        </div>
      </div>
      <div css={buttonlist}>
        <button css={button} onClick={moveAllLeft}>
          <FontAwesomeIcon icon={faAnglesLeft} />
        </button>
        <button css={button} onClick={moveCheckedLeft}>
          <FontAwesomeIcon icon={faAngleLeft} />
        </button>
        <button css={button} onClick={moveCheckedRight}>
          <FontAwesomeIcon icon={faAngleRight} />
        </button>
        <button css={button} onClick={moveAllRight}>
          <FontAwesomeIcon icon={faAnglesRight} />
        </button>
      </div>
      <div css={card}>
        <div css={cardHeader}>{rightTitle}</div>
        <div css={itemlist}>
          {right.map((item, index) => (
            <Item
              key={item}
              item={item}
              index={index}
              setCheckedArr={setRightChecked}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TransferListDemo;
