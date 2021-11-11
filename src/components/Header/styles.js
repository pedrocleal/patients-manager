import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 24px;
  background: var(--primary-color);
  color: #fff;
  ul {
    display: flex;
    list-style: none;

    li {
      font-weight: 700;
      font-size: 16px;
      margin-right: 24px;

      a {
        text-decoration: none;
        color: #fff;
      }
    }
  }
`