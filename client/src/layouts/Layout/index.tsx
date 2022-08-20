import React, { ReactNode } from "react";
import styled from "styled-components";
import NavBar from "../../components/NavBar";

export interface LayoutProps {
  children?: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <LayoutContainer>
      <NavBar />
      <LayoutContentContainer>
        <LayoutContent>{children}</LayoutContent>
      </LayoutContentContainer>
    </LayoutContainer>
  );
}

const LayoutContainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
`;

const LayoutContentContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const LayoutContent = styled.div`
  width: 100%;
  max-width: 1536px;
  padding: 16px 0;
  /* viewportHeight - NavBarHeight */
  min-height: calc(100vh - 56px);
`;
