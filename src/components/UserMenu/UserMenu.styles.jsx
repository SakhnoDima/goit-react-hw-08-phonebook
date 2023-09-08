import styled from 'styled-components';

export const UserMenuBox = styled.div`
  width: ${({ theme }) => theme.spacing(40)};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const UserName = styled.p`
  color: var(--light-text);
`;
