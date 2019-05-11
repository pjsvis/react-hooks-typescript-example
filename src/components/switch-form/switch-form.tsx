import * as React from "react";
import { useState, useEffect } from "react";
import Switch from "react-switch";

interface Props {}

export const SwitchForm = (props: Props) => {
  const [checked, setChecked] = useState(false);
  const handleChange = () => {
    setChecked(!checked);
  };
  return (
    <>
      <div>switch-form</div>
      <Switch onChange={handleChange} checked={checked} />
    
    </>
  );
};
