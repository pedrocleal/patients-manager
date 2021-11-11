import styled from "styled-components";

export const InputContainer = styled.div`
  label {
    margin-bottom: 24px;
  }

  input {
    accent-color: var(--primary-color);
    background: transparent;
    outline: none;
    border: 2px solid var(--primary-color);
    padding: 20px;
    font-size: 14px;
    font-weight: 700;
    color: #000;
    width: 350px;
  }
`