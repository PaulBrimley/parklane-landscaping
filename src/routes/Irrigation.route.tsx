import { ComponentProps } from 'react';
import styled from 'styled-components';

import AnimatedRoute from '../components/atoms/AnimatedRoute';

interface IIrrigationRoute extends ComponentProps<any> {}
function IrrigationRoute({ ...otherProps }: IIrrigationRoute) {
  return (
    <StyledIrrigationRoute>

    </StyledIrrigationRoute>
  );
}
const StyledIrrigationRoute = styled(AnimatedRoute)`

`;
export default IrrigationRoute;
