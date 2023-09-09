import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavBox = styled.div`
  width: ${({ theme }) => theme.spacing(40)};
  display: flex;
  justify-content: space-between;
`;

export const StyledLink = styled(NavLink)`
  /* padding: 8px 16px;
  border: none;
  border-radius: 4px;
  text-decoration: none;
  font-size: 16px;
  background-color: ${({ theme }) => theme.colors.white}; */
  color: var(--light-text);
  /* border: 1px solid black; */
  cursor: pointer;

  &.active {
    /* background-color: ${({ theme }) => theme.colors.accent}; */
    color: var(--light-text);
    border-bottom: 2px solid var(--button-border);
  }
`;
