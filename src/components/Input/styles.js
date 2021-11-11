import styled from "styled-components";

export const InputContainer = styled.div`
  label {
    margin: 10px 0;
    display: block;
    color: var(--primary-color);
    font-weight: 500;
  }

  input {
    font-family: 'Inter', sans-serif;
    outline: none;
    border: 1px solid #aaa;
    padding: 20px;
    font-size: 16px;
    font-weight: 500;
    color: #000;
    width: 90%;
    height: 10px;
  }

  input:focus {
    border: 1px solid var(--primary-color);
  }
`