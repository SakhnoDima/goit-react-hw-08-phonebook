import { styled } from 'styled-components';

export const RegisterPageSection = styled.section`
  margin: 40px auto;
  padding: 16px;
  width: 800px;
  box-shadow: 0px 4px 10px 4px #9e9e9e;
  border-radius: 4px;
  background-color: var(--dark-background);
  color: var(--dark-text);
`;

export const Title = styled.h2`
  color: var(--light-text);
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing(8)};
`;
