import { ComponentProps } from 'react';
import styled from 'styled-components';

import AnimatedRoute from '../components/atoms/AnimatedRoute';

interface ILandscapeRoute extends ComponentProps<any> {}
function LandscapeRoute({ ...otherProps }: ILandscapeRoute) {
  return (
    <StyledLandscapeRoute>

    </StyledLandscapeRoute>
  );
}
const StyledLandscapeRoute = styled(AnimatedRoute)`

`;
export default LandscapeRoute;
