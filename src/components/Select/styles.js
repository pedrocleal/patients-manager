import styled from 'styled-components'

export const SelectContainer = styled.div`
  label {
    margin: 10px 0;
    display: block;
    color: var(--primary-color);
    font-weight: 500;
  }

  select {
    display: block;
    font-size: 1.2rem;
    font-weight: 500;
    padding: 0.6rem;
    margin: 0.8rem 0;
    width: 96%;
    height: 50px;

    border: 1px solid #aaa;
    outline: none;
    background: #fff;

    font-size: 16px;
    font-weight: 500;
  }

  select:focus {
    border: 1px solid var(--primary-color);
  }

  option {
    font-size: 16px;
  }
`