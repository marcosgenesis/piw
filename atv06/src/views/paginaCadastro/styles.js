import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  form {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    width: 500px;

    p {
      margin-bottom: 10px;
      text-align:center;
    }

    input {
      margin-bottom: 10px;
      height: 40px;
      border: none;
      border-radius: 4px;
      padding: 3px;
      background: #27282b;
      color: white;
    }
    button {
      width: 100%;
      height: 50px;
      background: #735bf2;
      border: none;
      color: white;
      cursor: pointer;
      transition: 0.5s;
      margin-top: 10px;
      &:hover {
        background: #714bf2;
      }
    }
  }
`;
