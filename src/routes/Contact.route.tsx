import { ComponentProps } from 'react';
import styled from 'styled-components';

import AnimatedRoute from '../components/atoms/AnimatedRoute';

interface IContactRoute extends ComponentProps<any> {}
function ContactRoute({ ...otherProps }: IContactRoute) {
  return (
    <StyledContactRoute>

    </StyledContactRoute>
  );
}
const StyledContactRoute = styled(AnimatedRoute)`

`;
export default ContactRoute;
