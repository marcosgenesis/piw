import styled from 'styled-components';

export const FormContainer = styled.form`
  width: 700px;
  margin:0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  input{
    width:100%;
    height:40px;
    border-radius: 8px;
    border: none;
    margin-top: 40px;
    padding: 4px;
  }
  button{ 
    width: 100%;
    height:50px;
    margin-top: 40px;
    background: #735bf2;
    border:none;
    color: white;
    cursor: pointer
  }
`;
