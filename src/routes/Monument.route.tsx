import { ComponentProps } from 'react';
import styled from 'styled-components';

import AnimatedRoute from '../components/atoms/AnimatedRoute';

interface IMonumentRoute extends ComponentProps<any> {}
function MonumentRoute({ ...otherProps }: IMonumentRoute) {
  return (
    <StyledMonumentRoute>

    </StyledMonumentRoute>
  );
}
const StyledMonumentRoute = styled(AnimatedRoute)`

`;
export default MonumentRoute;
