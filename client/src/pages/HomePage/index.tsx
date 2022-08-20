import React from "react";
import { RouteComponentProps } from "react-router-dom";
import styled from "styled-components";
import Button from "../../components/Button";

export default function HomePage(props: RouteComponentProps) {
  return (
    <HomeContainer>
      <Welcome>Bienvenido</Welcome>
      <Button>INGRESAR</Button>
    </HomeContainer>
  );
}

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Welcome = styled.h1`
  font-size: 3rem;
`;
