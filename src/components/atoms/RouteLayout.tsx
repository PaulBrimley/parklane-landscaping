import React, { ComponentProps, forwardRef, Ref } from "react";
import styled from "styled-components";

export const RouteLayoutWithRef = forwardRef<
  HTMLDivElement,
  ComponentProps<any>
>((props, ref) => {
  return <RouteLayout forwardedRef={ref} {...props} />;
});
interface IRouteLayout extends ComponentProps<any> {
  className: string;
  forwardedRef: Ref<any>;
}
function RouteLayout({
  children,
  className,
  forwardedRef,
}: IRouteLayout) {
  return (
    <StyledRouteLayout ref={forwardedRef} className={className}>
      {children}
    </StyledRouteLayout>
  );
}
const StyledRouteLayout = styled.div`
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
`;
export default RouteLayout;
