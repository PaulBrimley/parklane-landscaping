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
    background-color: var(--quinary);
  }
  .middle {
    height: 20px;
    background-color: var(--quaternary);
  }
  .top {
    height: 45px;
    background-color: var(--secondary);
  }
`;
export default PageDivider1;
