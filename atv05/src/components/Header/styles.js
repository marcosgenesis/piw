import styled from "styled-components";
import { Link } from "react-router-dom";

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
`;
export const ActionItem = styled(Link)`
  text-decoration: none;
  margin-right: 30px;
  color: ${(props) => (props.active ? "#735bf2" : "#fff")};
`;
export const LoggedUser = styled.p``;
