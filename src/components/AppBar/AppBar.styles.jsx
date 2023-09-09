import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  height: 40px;
  padding: 8px 16px;
  display: flex;
  justify-content: space-between;
`;

export const StyleLink = styled(NavLink)`
  color: var(--light-text);
  cursor: pointer;
`;
