import { ComponentProps } from 'react';
import styled from 'styled-components';

import AnimatedRoute from '../components/atoms/AnimatedRoute';

interface ITrimmingRoute extends ComponentProps<any> {}
function TrimmingRoute({ ...otherProps }: ITrimmingRoute) {
  return (
    <StyledTrimmingRoute>

    </StyledTrimmingRoute>
  );
}
const StyledTrimmingRoute = styled(AnimatedRoute)`

`;
export default TrimmingRoute;
