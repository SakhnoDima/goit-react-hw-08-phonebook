import styled from 'styled-components';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: var(--dark-background);
  color: var(--dark-text);
  overflow: hidden;
`;

export const ModalBody = styled.div`
  max-height: 660px;
  overflow: auto;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-height: ${({ theme }) => theme.spacing(100)};
  max-width: ${({ theme }) => theme.spacing(200)};
  width: 100%;
  padding: ${({ theme }) => theme.spacing(4)};
  background-color: var(--dark-background);
  color: var(--dark-text);
  border-radius: ${({ theme }) => theme.spacing(1)};
  box-shadow: ${({ theme }) => theme.shadows.regular};
`;
