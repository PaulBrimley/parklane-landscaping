import styled from 'styled-components';

const StyledModal = styled.div`
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 500px;
  max-width: 50%;
  max-height: calc(100vh - 20px);
  margin: 4px;
  background-color: #FFFFFF;
  overflow: hidden;
  @media (max-width: ${({ theme }): number => theme.mobileWidth}px) {
    max-width: 100vw;
    max-height: 100vw;
  }
`;
export default StyledModal;
