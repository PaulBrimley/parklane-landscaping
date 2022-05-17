import { ComponentProps } from 'react';
import styled from 'styled-components';

import AnimatedRoute from '../components/atoms/AnimatedRoute';

interface ISubscribeRoute extends ComponentProps<any> {}
function SubscribeRoute({ ...otherProps }: ISubscribeRoute) {
  return (
    <StyledSubscribeRoute>

    </StyledSubscribeRoute>
  );
}
const StyledSubscribeRoute = styled(AnimatedRoute)`

`;
export default SubscribeRoute;
