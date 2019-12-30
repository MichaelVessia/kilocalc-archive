import React, { useState } from "react";
import { Collapse, Button } from "reactstrap";
import RoundingInput from "./RoundingInput";
import AvailablePlatesInput from "./AvailablePlatesInput";
import BarWeightInput from "./BarWeightInput";
import styled from "styled-components";

const Line = styled.hr`
  margin-bottom: 1rem;
`;

const AdvancedOptions = ({
  availablePlatesKg,
  availablePlatesLbs,
  setAvailablePlatesKg,
  setAvailablePlatesLbs
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <Button color="secondary" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "Hide Advanced Options" : "Show Advanced Options"}
      </Button>
      <Collapse isOpen={isOpen}>
        <Line />
        <BarWeightInput />
        <Line />
        <RoundingInput />
        <Line />
        <AvailablePlatesInput
          availablePlatesKg={availablePlatesKg}
          setAvailablePlatesKg={setAvailablePlatesKg}
          availablePlatesLbs={availablePlatesLbs}
          setAvailablePlatesLbs={setAvailablePlatesLbs}
        />
      </Collapse>
    </div>
  );
};

export default AdvancedOptions;
