import React from "react";
import { Card } from "antd";
import "../App.css";

export type meds = {
  amountUnit: string;
  amountValue: number;
  pzn: string;
  name: string;
  strengthUnit: string;
  strengthValue: number;
};
export type medsArray = {
  Meds: meds[];
};

const Medications = ({ Meds }: medsArray) => {
  return (
    <div className="med-container">
      {Meds?.map((med) => {
        return (
          <Card hoverable title={med.name} style={{ margin: 5, width: 400 }}>
            <p>Amount Unit: {med.amountUnit}</p>
            <p>Amount Value: {med.amountValue}</p>
            <p>Pzn: {med.pzn}</p>
            <p>Strength Unit: {med.strengthUnit}</p>
            <p>Strength Value: {med.strengthValue}</p>
          </Card>
        );
      })}
    </div>
  );
};

export default Medications;
