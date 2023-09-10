import styled from 'styled-components';

export const UserMenuBox = styled.div`
  width: ${({ theme }) => theme.spacing(60)};
  display: flex;
  gap: ${({ theme }) => theme.spacing(2)};
  align-items: center;
  justify-content: space-between;
`;

export const UserName = styled.p`
  color: var(--light-text);
`;

export const Button = styled.button`
  display: block;

  padding: 8px 16px;
  font: inherit;
  cursor: pointer;
  border-radius: 4px;
  border: 1px solid #212121;
  color: var(--light-text);
  background-color: var(--button-background);
  font-size: 18px;
  text-align: center;
  &:hover {
    background-color: ${({ theme }) => theme.colors.accent};
  }
`;
