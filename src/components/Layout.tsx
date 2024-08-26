import React from 'react';
import styled from '@emotion/styled';
import { Outlet, Link } from 'react-router-dom';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  font-size: 1.5rem;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;

const Header = styled.div`
  background-color: #0077b6;
  powerpuff girls font
  color: white;
  padding: 20px;
  text-align: center;
     text-align: left;
  font-size: 1.5rem;
   font-family: 'PowerPuffGirlsFont'
`;

const Main = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: #f1f1f1;
`;

const Layout: React.FC = () => {
  return (
    <Wrapper>
      <Header>
        <StyledLink to="/">Powerpuff Girls</StyledLink>
      </Header>
      <Main>
        <Outlet />
      </Main>
    </Wrapper>
  );
};

export default Layout;
