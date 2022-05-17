import styled from 'styled-components';

const StyledField = styled.div`
  grid-column-start: auto;
  grid-column-end: auto;
  display: grid;
  grid-template-columns: 1fr;
  column-gap: 5px;
  align-items: start;
  padding: 2px;

  .label {
    //border: 1px solid red;
  }
  .field {
    //border: 1px solid yellow;
  }
`;
export default StyledField;
