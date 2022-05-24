import styled from "styled-components";

export const Container = styled.div`
  margin-left: 20px;
  h2 {
    color: white;
    font-family: "Roboto", sans-serif;
  }
`;
export const PostsContainer = styled.div`
  display: flex;
  overflow-y: hidden;
  overflow-x: scroll;
  padding: 20px;
  position: relative;
  bottom: 20px;
  ::-webkit-scrollbar {
    display: none;
  }
`;
export const PostImg = styled.img`
  object-fit: contain;
  height: 200px;
  display: flex;
  transition: transform 450ms;
  margin-right: 10px;

  :hover {
    cursor: pointer;
    transform: scale(1.2);
  }
  .teste {
    height: 300px;
  }
`;
