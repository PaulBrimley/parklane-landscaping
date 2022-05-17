import { ComponentProps } from 'react';
import styled from 'styled-components';

import AnimatedRoute from '../components/atoms/AnimatedRoute';

interface IServicesRoute extends ComponentProps<any> {}
function ServicesRoute({ ...otherProps }: IServicesRoute) {
  return (
    <StyledServicesRoute>

    </StyledServicesRoute>
  );
}
const StyledServicesRoute = styled(AnimatedRoute)`

`;
export default ServicesRoute;
