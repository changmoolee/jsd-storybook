/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { debounce } from "lodash";

const container = css`
  position: relative;
`;

const inputContainer = css`
  width: 400px;
  height: 40px;
  display: flex;
  align-items: center;
  padding: 10px;
  border: 1px solid black;
  border-radius: 20px;
  box-sizing: border-box;
  z-index: 100;
  input {
    width: 100%;
    border: none;
    outline: none;
    z-index: 100;
  }
`;

const suggestions = css`
  position: absolute;
  width: 100%;
  padding: 50px 10px 10px 10px;
  margin-top: -40px;
  border: 1px solid black;
  border-top: none;
  border-radius: 20px;
  box-sizing: border-box;
  z-index: 99;
`;

const suggestion = css`
  :hover {
    background-color: rgba(0, 0, 0, 0.3);
  }
`;

const iconBox = css`
  font-size: 12px;
  cursor: pointer;
  z-index: 100;
`;

type AutoCompleteProps = {
  items: string[];
};

const AutoCompleteDemo = ({ items }: AutoCompleteProps) => {
  const [inputValue, setInputValue] = useState<string>("");
  const [filtered, setFilterd] = useState<Array<string>>([]);

  const filtering = debounce((value) => {
    setFilterd(
      items.filter((item) =>
        item.toLocaleLowerCase().includes(value.toLocaleLowerCase())
      )
    );
  }, 500);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    setInputValue(value);
    filtering(value);
  };

  const handleClose = () => {
    setInputValue("");
  };

  const handleValue = (text: string) => {
    setInputValue(text);
  };

  return (
    <div css={container}>
      <div css={inputContainer}>
        <input
          value={inputValue}
          onChange={handleChange}
          placeholder="Please search here."
        />
        <span css={iconBox} onClick={handleClose}>
          <FontAwesomeIcon icon={faX} />
        </span>
      </div>
      {inputValue && (
        <section css={suggestions}>
          {filtered.map((item, index) => (
            <div key={index} css={suggestion} onClick={() => handleValue(item)}>
              {item}
            </div>
          ))}
        </section>
      )}
    </div>
  );
};

export default AutoCompleteDemo;
