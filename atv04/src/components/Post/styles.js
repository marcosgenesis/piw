import styled from "styled-components";

export const Container = styled.div`
  background: #242627;
  width: 100%;
  max-width: 700px;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 10px;
  margin-top: 10px;
`;
export const Actions = styled.div`
  display: flex;
  justify-content: space-between;
  p {
    color: #eee;
  }
`;

export const LikeButton = styled.button`
  width: 100px;
  height: 30px;
  border-radius: 4px;
  border: none;
  background: #735bf2;
  color:white;
  cursor: pointer;
  &:hover {
    background: #735bd2;
  }
`;
export const Sender = styled.p`
  color: #999;
`;
export const Message = styled.p`
  padding: 30px;
`;
