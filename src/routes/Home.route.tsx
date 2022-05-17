import { ComponentProps } from 'react';
import styled from 'styled-components';

import AnimatedRoute from '../components/atoms/AnimatedRoute';

interface IHomeRoute extends ComponentProps<any> {}
function HomeRoute({ ...otherProps }: IHomeRoute) {
  return (
    <StyledHomeRoute>

    </StyledHomeRoute>
  );
}
const StyledHomeRoute = styled(AnimatedRoute)`

`;
export default HomeRoute;
