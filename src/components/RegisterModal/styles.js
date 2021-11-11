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
  padding: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 5px solid var(--primary-color);

  .closeModal {
    position: absolute;
    top: 0;
    right: 0;
    margin: 10px;
  }

  h1 {
    color: var(--primary-color);
  }
`