import { ComponentProps, MouseEvent } from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

/** routes **/
import { Paths as ReactPaths } from '../../routes/Routes';

interface IButton extends ComponentProps<any> {
  classes?: string;
  className?: string;
  fontSize?: string;
  fontWeight?: string;
  height?: string;
  margin?: string;
  onClick?: (e: MouseEvent) => any;
  padding?: string;
  shadow?: string;
  width?: string;
}
interface ILinkButton extends IButton {
  to?: ReactPaths;
}
function Button(props: IButton) {
  const classes = classNames(props.className, props.classes, {
    disabled: !!props.disabled
  });
  return (
    <StyledButton className={classes} {...props} onClick={props.onClick}>
      {props.children}
    </StyledButton>
  );
}

export function LinkButton(props: ILinkButton) {
  const { children, classes, className, disabled, to } = props;
  const passedClasses = classNames(className, classes, {
    disabled: !!disabled
  });
  return (
    <StyledLinkButton as={Link} className={passedClasses} {...props} to={to}>
      {children}
    </StyledLinkButton>
  );
}
const StyledButton = styled.span<IButton>`
  display: flex;
  justify-content: center;
  align-items: center;
  background: inherit;
  box-shadow: 2px 2px 2px ${({ shadow }) => shadow ?? 'var(--grey-medium)'};
  cursor: pointer;
  font-size: ${({ fontSize }) => fontSize ?? 'inherit'};
  font-weight: ${({ fontWeight }) => fontWeight ?? 'inherit'};
  height: ${({ height }) => height ?? 'auto'};
  margin: ${({ margin }) => margin ?? '0 4px'};
  padding: ${({ padding }) => padding ?? '6px 14px'};
  transition: color 0.25s, background 0.25s, border 0.25s, box-shadow 0.25s;
  width: ${({ width }) => width ?? 'auto'};
  white-space: nowrap;
  &:active {
    box-shadow: 1px 1px 1px ${({ shadow }) => shadow ?? 'var(--grey-medium)'};
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
export default Button;
