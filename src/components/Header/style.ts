import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  position: fixed;
  z-index: 1;
  height: 60px;
  display: flex;
  justify-content: space-between;
  background-color: red;

  @media (top: 60px) {
    background-color: #111;
  }
`;

export const Brand = styled.img`
  padding-top: 20px;
  position: fixed;
  left: 20px;
  width: 80px;
  object-fit: contain;
`;

export const Avatar = styled.img`
  padding-top: 20px;
  position: fixed;
  right: 20px;
  width: 30px;
  object-fit: contain;
`;
