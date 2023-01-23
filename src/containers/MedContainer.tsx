import React, { useState } from "react";
import Medications, { medsArray } from "../components/Medications";
import Meds from "../utils/data.json";
import Fuse from "fuse.js";
import InputHandler from "../components/InputHandler";

const MedConatainer = () => {
  const [query, setQuery] = useState("");
  const fuse = new Fuse(Meds, {
    keys: ["name"],
  });
  const searchResult = fuse.search(query as unknown as string);
  const medSearched = searchResult.map((result) => result.item);

  return (
    <>
      <InputHandler onChange={setQuery} value={query} />
      <Medications
        Meds={query ? (medSearched as unknown as medsArray) : Meds}
      />
      ;
    </>
  );
};

export default MedConatainer;
