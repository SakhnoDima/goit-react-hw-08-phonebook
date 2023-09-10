import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavBox = styled.div`
  width: ${({ theme }) => theme.spacing(40)};
  display: flex;
  justify-content: space-between;
`;

export const StyledLink = styled(NavLink)`
  color: var(--light-text);
  cursor: pointer;

  &.active {
    color: var(--light-text);
    border-bottom: 2px solid var(--button-border);
  }
`;
