import styled from 'styled-components';

const StyledInfoBannerMessage = styled.div`
  color: ${({theme}) => theme.colorWhite};
  text-align: right;
  .hr {
    border-bottom: 1px solid rgb(187, 169, 117);
  }
  .isBold {
    font-weight: 800;
  }
  .message {
    font-size: 2em;
    margin-top: 22px;
    padding-left: 20px;
    white-space: nowrap;
  }
  .title {
    margin-bottom: 15px;
    padding-left: 20px;
    white-space: nowrap;
    font-size: 2.8em;
  }
  @media (max-width: ${({theme}) => theme.mobileWidth}px) {
    text-align: left;
  }
`;
export default StyledInfoBannerMessage;
