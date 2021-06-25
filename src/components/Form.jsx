import React, { useState } from "react";
import styled from 'styled-components';

const StyledForm = styled.div`
  margin: 10px;
`
const StyledLabel = styled.label`
  margin: 10px;
`
const StyledButton = styled.button`
  margin: 10px;
  background: #306af2;
  color: white;
  font-size: 0.8em;
  padding: 8px;
  border-radius: 4px;
  border: none;
`

export const Form = () => {
  const initialInputState = { name: "", surname: "" };
  const [ values, setValues ] = useState(initialInputState);
  const [ submitted, setSubmitted ] = useState(false);
  const { name, surname } = values;

  const handleChange = (e) => {
    setSubmitted(false);
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };


  return (
    <StyledForm>
      <h2>1. Sign up form</h2>
      <form>
        <StyledLabel htmlFor="name">Name</StyledLabel>
        <input
          data-testid = "form.input.name"
          name="name"
          placeholder="Name"
          onChange={handleChange}
          value={name}
          type="text"
        />
        <StyledLabel htmlFor="surname">Surname</StyledLabel>
        <input
          data-testid="form.input.surname"
          name="surname"
          placeholder="surname"
          onChange={handleChange}
          value={surname}
          type="text"
        />
        <StyledButton onClick={handleSubmit}>Submit</StyledButton>
      </form>
      {submitted ? <p data-testid="form.result">Signin up with name: {name} and surname: {surname}</p> : null }
    </StyledForm>
  );
};
export default Form;
