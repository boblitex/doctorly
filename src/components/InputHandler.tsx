import React, { SetStateAction, useState } from "react";
import { AutoComplete } from "antd";
import "../App.css";
import Meds from "../utils/data.json";

const filterMeds = (str: string) => {
  const newMock = Meds.filter((search) =>
    search.name.toLocaleLowerCase().includes(str.toLocaleLowerCase())
  );
  const mapped = newMock.map((med) => med.name);
  return mapped.map((med) => {
    return { value: med };
  });
};
type inputProp = {
  onChange: SetStateAction<string>;
  value: string;
};

const InputHandler: React.FC<inputProp> = ({ onChange, value }: inputProp) => {
  //   const [value, setValue] = useState("");
  const [options, setOptions] = useState<{ value: string }[]>([]);

  const onSearch = (searchText: string) => {
    setOptions(!searchText ? [] : filterMeds(searchText));
  };

  const onSelect = (data: string) => {
    console.log("onSelect", data);
  };

  return (
    <div className="input">
      <AutoComplete
        // dataSource={Meds}
        allowClear
        value={value}
        options={options}
        style={{ width: "100%", marginBottom: "15px" }}
        onSelect={onSelect}
        onSearch={onSearch}
        onChange={onChange}
        placeholder="search meds"
      />
    </div>
  );
};

export default InputHandler;
