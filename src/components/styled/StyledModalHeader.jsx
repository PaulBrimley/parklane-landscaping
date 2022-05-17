import styled from 'styled-components';

const StyledModalHeader = styled.div`
  text-align: center;
  font-size: 2em;
  font-weight: bold;
  color: ${({theme}) => theme.colorPrimary};
  padding: 10px;
  max-height: 50px;
  border-bottom: 1px solid ${({theme}) => theme.colorGreyLight};
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
`;
export default StyledModalHeader;
