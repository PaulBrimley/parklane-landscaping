import { ComponentProps } from 'react';
import styled from 'styled-components';

import AnimatedRoute from '../components/atoms/AnimatedRoute';

interface IMonumentRepairRoute extends ComponentProps<any> {}
function MonumentRepairRoute({ ...otherProps }: IMonumentRepairRoute) {
  return (
    <StyledMonumentRepairRoute>

    </StyledMonumentRepairRoute>
  );
}
const StyledMonumentRepairRoute = styled(AnimatedRoute)`

`;
export default MonumentRepairRoute;
