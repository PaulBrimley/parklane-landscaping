import React, { ComponentProps } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Location, Router } from '@reach/router';
import styled from 'styled-components';

interface IAnimatedRoutes extends ComponentProps<any> {
  exitBeforeEnter?: boolean;
  initial?: boolean;
}
function AnimatedRoutes({ children, exitBeforeEnter = true, initial = false }: IAnimatedRoutes) {
  return (
    <Location>
      {({ location }) => (
        <AnimatePresence exitBeforeEnter={exitBeforeEnter} initial={initial}>
          <StyledRoute primary={false} location={location}>{children}</StyledRoute>
        </AnimatePresence>
      )}
    </Location>
  );
}
const StyledRoute = styled(Router)`
  flex: 1 1 auto;
  display: flex;
  overflow: hidden;
`;
export default AnimatedRoutes;
