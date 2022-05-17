import { ComponentProps } from 'react';
import styled from 'styled-components';

interface IPageDivider2 extends ComponentProps<any> {
  color: string;
  margin: string;
  width: string;
}
function PageDivider2(props: IPageDivider2) {
  return (
    <StyledPageDivider2 {...props}>
      <div className="separator" />
    </StyledPageDivider2>
  );
}
const StyledPageDivider2 = styled.div<IPageDivider2>`
  display: flex;
  justify-content: center;
  .separator {
    width: ${({ width }) => width ?? '100%'};
    border-bottom: 4px solid ${({ color }) => color ?? 'var(--primary)'};
    margin: ${({margin}) => margin ?? '10px var(--side-margin)'};
  }
  @media screen and (max-width: 500px) {
    .separator {
      width: 70%;
    }
  }
`;
export default PageDivider2;
