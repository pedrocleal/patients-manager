import styled from "styled-components";

export const InputContainer = styled.div`
  label {
    margin: 10px 0;
    display: block;
  }

  input {
    accent-color: var(--primary-color);
    outline: none;
    border: 1px solid var(--primary-color);
    padding: 20px;
    font-size: 16px;
    font-weight: 700;
    color: #000;
    width: 350px;
    height: 10px;
  }
`