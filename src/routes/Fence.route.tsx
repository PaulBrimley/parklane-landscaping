import { ComponentProps } from 'react';
import styled from 'styled-components';

import AnimatedRoute from '../components/atoms/AnimatedRoute';

interface IFenceRoute extends ComponentProps<any> {}
function FenceRoute({ ...otherProps }: IFenceRoute) {
  return (
    <StyledFenceRoute>

    </StyledFenceRoute>
  );
}
const StyledFenceRoute = styled(AnimatedRoute)`

`;
export default FenceRoute;
