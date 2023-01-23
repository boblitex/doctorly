import React from "react";
import Medications, { medsArray } from "../components/Medications";
import Meds from "../utils/data.json";
const MedConatainer = () => {
  return <Medications Meds={Meds as unknown as medsArray} />;
};

export default MedConatainer;
