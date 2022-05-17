import { ComponentProps } from 'react';
import classNames from 'classnames';
import { Link } from '@reach/router';
import styled from 'styled-components';

interface IButton extends ComponentProps<any> {
  config: {
    fontSize: string;
    fontWeight: string;
    height: string;
    margin: string;
    padding: string;
    shadowColor: string;
    width: string;
  };
}
const StyledButton = styled.span<IButton>`
  display: flex;
  justify-content: center;
  align-items: center;
  background: inherit;
  box-shadow: 2px 2px 2px ${({ config: { shadowColor } }) => shadowColor ?? 'var(--grey-medium)'};
  cursor: pointer;
  font-size: ${({ config: { fontSize } }) => fontSize ?? 'inherit'};
  font-weight: ${({ config: { fontWeight } }) => fontWeight ?? 'inherit'};
  height: ${({ config: { height } }) => height ?? 'auto'};
  margin: ${({ config: { margin } }) => margin ?? '0 4px'};
  padding: ${({ config: { padding } }) => padding ?? '6px 14px'};
  transition: color 0.25s, background 0.25s, border 0.25s, box-shadow 0.25s;
  width: ${({ config: { width } }) => width ?? 'auto'};
  white-space: nowrap;
  &:active {
    box-shadow: 1px 1px 1px ${({ config: { shadowColor } }) => shadowColor ?? 'var(--grey-medium)'};
  }
  &.disabled {
    color: var(--grey-light);
    pointer-events: none;
    background-color: var(--grey) !important;
  }
  &.btn-xs {
    padding: 0 2px;
    font-size: 0.6em;
  }
  &.btn-sm {
    padding: 2px 6px;
    font-size: 0.8em;
  }
  &.btn-md {
    padding: 2px 6px;
    font-size: 1em;
  }
  &.btn-lg {
    font-size: 1.2em;
  }
`;
const StyledLinkButton = styled(StyledButton)`
  text-decoration: none;
`;

function Button(props: IButton) {
  const classes = classNames(props.className, props.classes, {
    disabled: !!props.disabled
  });
  return (
    <StyledButton className={classes} config={{ ...props }} onClick={props.onClick}>
      {props.children}
    </StyledButton>
  );
}

export function LinkButton(props: IButton) {
  const { children, classes, className, disabled, to } = props;
  const passedClasses = classNames(className, classes, {
    disabled: !!disabled
  });
  return (
    <StyledLinkButton as={Link} className={passedClasses} config={{ ...props }} to={to}>
      {children}
    </StyledLinkButton>
  );
}

export default Button;
