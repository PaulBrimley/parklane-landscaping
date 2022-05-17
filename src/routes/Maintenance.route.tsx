import { ComponentProps } from 'react';
import styled from 'styled-components';

import AnimatedRoute from '../components/atoms/AnimatedRoute';

interface IMaintenanceRoute extends ComponentProps<any> {}
function MaintenanceRoute({ ...otherProps }: IMaintenanceRoute) {
  return (
    <StyledMaintenanceRoute>

    </StyledMaintenanceRoute>
  );
}
const StyledMaintenanceRoute = styled(AnimatedRoute)`

`;
export default MaintenanceRoute;
