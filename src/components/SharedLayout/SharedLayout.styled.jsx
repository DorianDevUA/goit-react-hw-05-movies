import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const LinkList = styled.ul`
  display: flex;
  column-gap: 10px;
  list-style: none;
`;

export const StyledNavLink = styled(NavLink)`
  font-weight: bold;
  text-decoration: none;
  color: black;

  &.active {
    color: chocolate;
  }
`;
