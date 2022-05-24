import styled from "styled-components";

export const Container = styled.header`
  color: white;
  object-fit: contain;
  height: 448px;
`;

export const BannerContainer = styled.div`
  padding-top: 140px;
  height: 190px;
  margin-left: 30px;
  h1 {
    font-size: 3rem;
    font-weight: 800;
    padding-bottom: 0.3rem;
  }
`;
export const Buttons = styled.button`
  cursor: pointer;
  color: white;
  outline: none;
  border: none;
  font-weight: 700;
  border-radius: 0.2vw;
  padding-left: 2rem;
  padding-right: 2rem;
  margin-right: 1rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  background-color: rgba(60, 60, 60, 0.5);
  :hover {
    color: black;
    background-color: white;
    transition: all 0.3s;
  }
`;
export const Description = styled.p`
  width: 45rem;
  line-height: 1.3;
  padding-top: 2rem;
  font-size: 1.3rem;
  font-weight: 400;
  height: 80px;
`;
export const Fade = styled.div`
  height: 18rem;
  background-image: linear-gradient(transparent, rgba(37, 37, 37, 0.61), #111);
`;
