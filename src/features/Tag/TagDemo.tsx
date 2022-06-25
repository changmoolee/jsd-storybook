/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { lightColor } from "../../styled";

const box = css`
  width: 500px;
  height: 80px;
  display: flex;
  align-items: center;
  padding: 20px;
  border: 1px solid black;
  border-radius: 20px;
  box-sizing: border-box;
  overflow-x: overlay;
  overflow-y: hidden;
`;

const input = css`
  width: 100%;
  min-width: 150px;
  height: 100%;
  border: none;
  ::placeholder {
    opacity: 0.5;
  }
`;

const item = css`
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 5px;
  margin: 0 5px;
  background-color: ${lightColor};
  border-radius: 10px;
  color: white;
  box-sizing: border-box;
  white-space: nowrap;
`;
type TagProps = {
  tags: string[];
  setTags: React.Dispatch<React.SetStateAction<string[]>>;
};

const TagDemo = ({ tags, setTags }: TagProps) => {
  const [inputValue, setInputValue] = useState<string>("");

  const makeInputBlank = () => {
    setInputValue("");
  };

  const addTag = (text: string) => {
    setTags([...tags, text]);
    makeInputBlank();
  };

  const deleteTag = (toBeDeleted: number) => {
    setTags((tags) => tags.filter((_, index) => index !== toBeDeleted));
  };

  const handleChange = (event: any) => {
    setInputValue(event.target.value);
  };

  const handleKeyPress = (event: any) => {
    if (event.key === "Enter") {
      addTag(inputValue);
    }
  };

  return (
    <section css={box}>
      {tags.map((tag, index) => (
        <div css={item} key={index}>
          {tag}&nbsp;
          <FontAwesomeIcon
            icon={faCircleXmark}
            style={{ cursor: "pointer" }}
            onClick={() => deleteTag(index)}
          />
        </div>
      ))}
      <input
        css={input}
        value={inputValue}
        onChange={(e) => handleChange(e)}
        onKeyPress={handleKeyPress}
        maxLength={10}
        placeholder="Please enter a tag name."
      />
    </section>
  );
};

export default TagDemo;
