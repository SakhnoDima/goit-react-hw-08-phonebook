import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  height: 40px;
  padding: 8px 16px;
  display: flex;
  justify-content: space-between;
  box-shadow: 0px 4px 10px 4px #9e9e9e;
`;

export const Nav = styled.nav`
  display: flex;
  gap: ${({ theme }) => theme.spacing(2)};
`;

export const StyleLink = styled(NavLink)`
  color: var(--light-text);
  cursor: pointer;
  &.active {
    color: var(--light-text);
    border-bottom: 2px solid var(--button-border);
  }
`;
