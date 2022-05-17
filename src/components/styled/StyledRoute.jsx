import styled from 'styled-components';

const StyledRoute = styled.div`
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  /*::-webkit-scrollbar {
    width: 3px;
  }
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey;
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb {
    background: ${({theme}) => theme.colorPrimary};
    border-radius: 10px;
  }*/
  .body {
    flex: 1 1 auto;
  }
`;
export default StyledRoute;
