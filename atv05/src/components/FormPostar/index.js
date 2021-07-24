import React from "react";
import { useHistory } from "react-router-dom";
import { FormContainer } from "./styles";

function FormPostar() {
  const history = useHistory();

  return (
    <FormContainer>
      <input placeholder='Messagem' />
      <button onClick={() => history.push("/")}>Submeter</button>
    </FormContainer>
  );
}

export default FormPostar;
