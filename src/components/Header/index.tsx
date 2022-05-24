import { Container, Brand, Avatar } from "./style";
import brand from "../../images/netflix-logo-2-1.png";
import avatar from "../../images/Netflix-avatar.png";
import { useEffect, useState } from "react";

interface ILenght {
  offset: number;
}

export const Header = ({ offset }: ILenght) => {
  return (
    <>
      {offset > 300 ? (
        <Container style={{ backgroundColor: "#111" }}>
          <Brand src={brand} alt="brand" />
          <Avatar src={avatar} alt="brand" />
        </Container>
      ) : (
        <Container style={{ backgroundColor: "transparent" }}>
          <Brand src={brand} alt="brand" />
          <Avatar src={avatar} alt="brand" />
        </Container>
      )}
    </>
  );
};
