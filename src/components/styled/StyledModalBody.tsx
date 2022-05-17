import styled from 'styled-components';

const StyledModalBody = styled.div`
  padding: 10px;
  overflow: auto;
  ::-webkit-scrollbar {
    width: 2px;
  }
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey;
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb {
    background: var(--primary);
    border-radius: 10px;
  }
`;
export default StyledModalBody;
