import styled from 'styled-components';
import { Form, Field } from 'formik';

export const Forma = styled(Form)`
  margin: 16px auto;
  display: flex;
  flex-direction: column;
  width: ${({ theme }) => theme.spacing(100)};
  padding: ${({ theme }) => theme.spacing(3)};
  background-color: var(--dark-background);
  color: var(--dark-text);
  box-shadow: ${({ theme }) => theme.shadows.regular};
  border-radius: ${({ theme }) => theme.spacing(1)};
`;
export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: ${({ theme }) => theme.spacing(8)};
  color: var(--light-text);
  font-size: 20px;
`;
export const Input = styled(Field)`
  outline: 0;
  border: 1px solid var(--button-border);
  padding: 8px 12px;
  font: inherit;
  cursor: pointer;
  background-color: var(--dark-background);
  color: var(--light-text);
  &:focus {
    border: 1px solid ${({ theme }) => theme.colors.accent};
  }
`;
export const Button = styled.button`
  margin: 0 auto;
  width: 150px;
  padding: 8px 16px;
  font: inherit;
  cursor: pointer;
  border-radius: ${({ theme }) => theme.spacing(1)};
  border: 1px solid ${({ theme }) => theme.colors.dark};
  color: var(--light-text);
  background-color: var(--button-background);
  font-size: ${({ theme }) => theme.fontSizes.medium};
  &:hover {
    background-color: ${({ theme }) => theme.colors.accent};
  }
`;
export const Error = styled.h3`
  color: red;
  text-align: center;
`;
