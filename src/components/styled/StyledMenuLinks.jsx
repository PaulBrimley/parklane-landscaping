import styled from 'styled-components';

const StyledMenuLinks = styled.div`
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  .link-inner {
    padding: 5px 10px;
    margin: 0 10px;
    text-indent: -10px;
    .link {
      color: inherit;
      text-transform: uppercase;
      text-decoration: none;
      border-bottom: 1px solid ${({theme}) => theme.colorTransparent};
      line-height: 1.4em;
      font-weight: 400;
      &.active {
        border-bottom: 1px solid ${({theme}) => theme.colorWhiteOpaque};
        font-weight: 700;
      }
    }
  }
`;
export default StyledMenuLinks;
