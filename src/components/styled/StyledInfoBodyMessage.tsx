import styled from 'styled-components';

const StyledInfoBodyMessage = styled.div<{ align: string; color: string; fontSize: string; fontStyle: string; fontWeight: string; lineHeight: string; margin: string }>`
  color: ${({ color }) => color ?? 'var(--secondary)'};
  font-size: ${({ fontSize }) => fontSize || '1.5em'};
  font-weight: ${({ fontWeight }) => fontWeight || '300'};
  line-height: ${({ lineHeight }) => lineHeight || '1.7em'};
  margin: ${({ margin }) => margin || '10px 30px'};
  text-align: ${({ align }) => align || 'justify'};
  text-justify: inter-character;
  font-style: ${({ fontStyle }) => fontStyle || 'normal'};
`;
export default StyledInfoBodyMessage;
