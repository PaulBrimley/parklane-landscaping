import styled from 'styled-components';

const StyledModalFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 10px;
  border-top: 1px solid ${({theme}) => theme.colorGreyLight};
`;
export default StyledModalFooter;
