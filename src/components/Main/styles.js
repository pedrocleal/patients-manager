import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin: 0 auto;
  margin-top: 50px;

  h1 {
    margin-top: 50px;
    color: var(--primary-color);
  }

  .addButton {
    position: fixed;
    top: 80%;
    left: 95%;

    width: 70px;
    height: 70px;
    border-radius: 50px;
    border: 2px solid #fff;
    color: #fff;
    font-size: 50px;
    background: var(--primary-color);
    cursor: pointer;
    transition: 100ms ease-in;
    
    :hover {
      background: #0e8692
    }
  }
`