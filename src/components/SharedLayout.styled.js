import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 0 10px;
`;

export const Header = styled.header`
  padding: 22px 0;
  margin-bottom: 16px;
  border-bottom: 1px solid grey;

  > nav {
    display: flex;
  }
`;

export const StyledLink = styled(NavLink)`
  padding: 8px 16px;
  color: black;
  text-decoration: none;
  font-weight: 500;

  &.active {
    color: red;
  }
`;
