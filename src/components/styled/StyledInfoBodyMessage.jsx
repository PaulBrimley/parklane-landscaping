import styled from 'styled-components';

const StyledInfoBodyMessage = styled.div`
  color: ${({color, theme}) => theme[color] || theme.colorSecondary};
  font-size: ${({fontSize}) => fontSize || '1.5em'};
  font-weight: ${({fontWeight}) => fontWeight || '300'};
  line-height: ${({lineHeight}) => lineHeight || '1.7em'};
  margin: ${({margin}) => margin || '10px 30px'};
  text-align: ${({align}) => align || 'justify'};
  text-justify: inter-character;
  font-style: ${({fontStyle}) => fontStyle || 'normal'};
`;
export default StyledInfoBodyMessage;
