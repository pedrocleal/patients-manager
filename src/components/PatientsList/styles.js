import styled from 'styled-components';

export const Container = styled.section`
  display: flex; 
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 80%;
  margin-top: 50px;

  table {
    width: 100%;
    border-collapse: collapse;
    border: 1px solid #ddd;
  }

  thead {
    color: #fff;
    background: var(--primary-color);
  }

  th, tr {
    padding: 10px;
    border: 1px solid #ddd;
    text-align: left;
  }
`