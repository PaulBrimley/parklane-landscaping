import { ComponentProps } from 'react';
import styled from 'styled-components';

import AnimatedRoute from '../components/atoms/AnimatedRoute';

interface ILightingRoute extends ComponentProps<any> {}
function LightingRoute({ ...otherProps }: ILightingRoute) {
  return (
    <StyledLightingRoute>

    </StyledLightingRoute>
  );
}
const StyledLightingRoute = styled(AnimatedRoute)`

`;
export default LightingRoute;
