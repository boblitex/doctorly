import React, { useState } from "react";
import { AutoComplete } from "antd";
import "../App.css";

const mockVal = (str: string, repeat = 1) => ({
  value: str.repeat(repeat),
});
type inputProp = {
  onChange: () => void;
  value: string;
};

const InputHandler: React.FC<inputProp> = ({ onChange, value }: inputProp) => {
  //   const [value, setValue] = useState("");
  const [options, setOptions] = useState<{ value: string }[]>([]);

  const onSearch = (searchText: string) => {
    setOptions(
      !searchText
        ? []
        : [mockVal(searchText), mockVal(searchText, 2), mockVal(searchText, 3)]
    );
  };

  const onSelect = (data: string) => {
    console.log("onSelect", data);
  };

  //   const onChange = (data: string) => {
  //     setValue(data);
  //   };

  return (
    <div className="input">
      <AutoComplete
        value={value}
        options={options}
        style={{ width: "100%" }}
        onSelect={onSelect}
        onSearch={onSearch}
        onChange={onChange}
        placeholder="control mode"
      />
    </div>
  );
};

export default InputHandler;
