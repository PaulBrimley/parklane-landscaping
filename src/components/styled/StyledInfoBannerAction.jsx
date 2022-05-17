import styled from 'styled-components';

const StyledInfoBannerAction = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 20px 120px;
  @media (max-width: ${({theme}) => theme.mobileWidth}px) {
    justify-content: flex-start;
  }
`;
export default StyledInfoBannerAction;
