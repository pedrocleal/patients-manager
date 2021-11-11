import styled from "styled-components";

export const TableRowData = styled.tr`
  width: 100%;
  border-collapse: collapse;

  td {
    border: 1px solid #ddd;
    padding: 10px;
  }

  :nth-child(even) {
    background-color: #f2f2f2;
  }
`