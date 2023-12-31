import React, { useState } from "react";

const InitialsInputField = (props) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    const inputValue = e.target.value;
    if (/^[a-zA-Z]*$/.test(inputValue)) {
      setInputValue(inputValue);
    }

    props.handleCallback(inputValue);
  };

  return (
    <input
      aria-required={true}
      aria-label={"Initials box to agree to the Limited Electronic Disclosure and Communications Consent Agreement and Credit Protection Program Disclosures and the Credit Protection Program Agreement, both provided above"}
      id="InitialsInputField"
      data-testid="input"
      className="h-12 w-16 text-lg text-center border-solid border-[0.125rem] border-[#D8D8D8] rounded-[3px]"
      maxLength={2}
      value={inputValue}
      onChange={handleChange}
    />
  );
};

export default InitialsInputField;
