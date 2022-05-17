import styled from 'styled-components';

function PageDivider1() {
  return (
    <StyledPageDivider1>
      <div className="top"/>
      <div className="middle"/>
      <div className="bottom"/>
    </StyledPageDivider1>
  );
}
const StyledPageDivider1 = styled.div`
  .bottom {
    height: 15px;
    background-color: ${({theme}) => theme.colorQuinary};
  }
  .middle {
    height: 20px;
    background-color: ${({theme}) => theme.colorQuaternary};
  }
  .top {
    height: 45px;
    background-color: ${({theme}) => theme.colorSecondary};
  }
`;
export default PageDivider1;
