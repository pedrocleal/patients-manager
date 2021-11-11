import styled from "styled-components"

export const ModalOverlay = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(246, 245, 252, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ModalContainer = styled.div`
  position: relative;
  background-color: #fff;
  width: 700px;
  padding: 10px 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 3px solid var(--primary-color);
  border-radius: 10px;

  h1 {
    color: var(--primary-color);
  }

  .submitBtn {
    margin: 24px 0;

    width: 200px;
    height: 50px;

    font-size: 16px;
    font-weight: 600;

    color: #fff;
    background-color: var(--primary-color);
    border: 1px solid #ddd;
    border-radius: 5px;
    cursor: pointer;
    transition: 200ms ease;
  }

  .submitBtn:hover {
    background-color: #916df0;
  }

  .closeModal {
    position: absolute;
    top: 0;
    right: 0;
    margin: 25px;

    width: 30px;
    height: 30px;
    border: 1px solid #ddd;
    border-radius: 20px;
    outline: none;
    cursor: pointer;
  }

`