import { ComponentProps } from 'react';
import styled from 'styled-components';

import AnimatedRoute from '../components/atoms/AnimatedRoute';

function AboutRoute({ ...otherProps }: ComponentProps<any>) {
  return (
    <StyledAboutRoute>

    </StyledAboutRoute>
  );
}
const StyledAboutRoute = styled(AnimatedRoute)`

`;
export default AboutRoute;
