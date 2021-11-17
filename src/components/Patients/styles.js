import styled from "styled-components";

export const TableRowData = styled.tr`
  width: 100%;
  border-collapse: collapse;

  td {
    border: 1px solid #ddd;
    padding: 10px;
  }

  td:nth-child(7) {
    width: 190px;
  }

  :nth-child(even) {
    background-color: #f2f2f2;
  }
`

export const EditButton = styled.button`
  border: 1px solid #ddd;
  margin-right: 15px;
  background: #22a6b3;
  color: #fff;
  font: 'Inter', sans-serif;
  font-weight: 600;
  outline: none;
  cursor: pointer;
  padding: 10px;
  width: 80px;
  transition: 200ms ease-in;

  :hover {
    background: #0e8692;
  }
`

export const RemoveButton = styled.button`
  border: 1px solid #ddd;
  background: #eb4d4b;
  color: #fff;
  font: 'Inter', sans-serif;
  font-weight: 600;
  outline: none;
  cursor: pointer;
  transition: 200ms ease-in;
  padding: 10px;

  :hover {
    background: red;
  }
`
