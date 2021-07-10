import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 80px;
  background: #242627;

  display: flex;
  justify-content: center;
`;
export const Content = styled.div`
  width: 100%;
  max-width: 700px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    width: 40px;
  }
`;
export const Actions = styled.div`
  display: flex;
  align-items: center;
  width: 70%;
  justify-content: flex-end;
  margin-right: 20px;
  a {
    color: white;
    text-decoration: none;
    margin-right: 30px;
    color: #735bf2;
  }
`;

export const PostButton = styled.button`
  height: 30px;
  background: #735bf2;
  border: none;
  padding: 20px;
  border-radius: 8px;
  line-height: 0;
  cursor: pointer;
  color: white;

  &:hover {
    background: #735be1;
  }
`;
export const LoggedUser = styled.p``;
