import styled from 'styled-components';

const StyledField = styled.div`
  grid-column-start: ${({ theme }) => theme.cols > 1 && theme.colStart ? theme.colStart : 'auto'};
  grid-column-end: ${({ theme }) => theme.cols > 1 && theme.colEnd ? theme.colEnd : 'auto'};
  display: grid;
  grid-template-columns: ${({ theme }) => theme.labelsInline ? 'minmax(100px, 10%) 1fr' : '1fr'};
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
