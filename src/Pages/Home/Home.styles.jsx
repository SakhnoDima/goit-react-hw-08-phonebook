import { styled } from 'styled-components';
import { Link } from 'react-router-dom';

export const Section = styled.section`
  margin: 40px auto;
  padding: 16px;
  max-width: 800px;
  min-height: ${({ theme }) => theme.spacing(90)};
  box-shadow: 0px 4px 10px 4px #9e9e9e;
  border-radius: 4px;
  background-color: var(--dark-background);
  color: var(--dark-text);
`;

export const Title = styled.h2`
  text-align: center;
  color: var(--light-text);
  margin-bottom: ${({ theme }) => theme.spacing(4)};
`;

export const Text = styled.p`
  color: var(--light-text);
  text-align: center;
  font-size: larger;
  margin-bottom: ${({ theme }) => theme.spacing(40)};
`;
export const StyledLink = styled(Link)`
  display: block;
  margin: 0 auto;
  width: 100px;
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
