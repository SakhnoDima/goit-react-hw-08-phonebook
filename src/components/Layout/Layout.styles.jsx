import styled from 'styled-components';

export const Footer = styled.footer`
  height: 100px;
  text-align: center;
  padding: 20px;
`;

export const Wrapper = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Main = styled.main`
  flex: 1 1 auto;
  padding: ${({ theme }) => theme.spacing(4)};
`;

export const Link = styled.a`
  color: var(--light-text);
  display: block;
  width: 19px;
  margin: 0 auto;
`;

export const Text = styled.p`
  color: var(--light-text);
`;
export const Loading = styled.p`
  text-align: center;
  color: var(--light-text);
`;
