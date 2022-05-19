import { useState } from 'react';
import { Link, useLocation } from '@reach/router';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import classNames from 'classnames';

import { routeArr } from '../../routes/Routes';

/** stores **/
import { setMenuCollapsed } from '../../stores/App.store';

/** hooks **/
import { useAppDispatch, useAppSelector } from '../../hooks/useStore.hook';
import useTransition, { EaseTypes } from '../../hooks/useTransition.hook';

/** components **/
import StyledMenuLinks from '../styled/StyledMenuLinks';
import { Close } from 'styled-icons/evil';

function Menu() {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const { menuCollapsed } = useAppSelector(store => store.app);
  const [hideMenu, setHideMenu] = useState(true);
  const menuContainerTransition = useTransition({
    duration: 0.25,
    ease: EaseTypes.EASE_IN_OUT,
    opacityEnd: menuCollapsed ? 0 : 1,
    opacityStart: menuCollapsed ? 0 : 0
  });
  const menuTransition = useTransition({
    duration: 0.25,
    ease: EaseTypes.EASE_IN_OUT,
    xEnd: menuCollapsed ? '200px' : '0',
    xStart: menuCollapsed ? '200px' : '200px',
    onComplete: () => setHideMenu(menuCollapsed)
  });

  function handleClose() {
    dispatch(setMenuCollapsed(true));
  }

  return (
    <StyledMenu className={classNames({ hidden: hideMenu })}>
      <motion.div className="overlay" {...menuContainerTransition} onClick={handleClose} />
      <motion.div className="menu" {...menuTransition}>
        <div className="header">
          <Close className="close-button" onClick={handleClose} />
        </div>
        <StyledMenuLinks>
          {routeArr.map(({ children, name, path }) => (
            <div key={path} className="link-inner">
              <Link className={`link ${location.pathname === path ? 'active' : ''}`} to={path} onClick={handleClose}>
                {name}
              </Link>
              {children?.map(({ name: childName, path: childPath }) => (
                <div key={childPath} className="link-inner">
                  <Link className={`link ${location.pathname === childPath ? 'active' : ''}`} to={childPath} onClick={handleClose}>
                    {childName}
                  </Link>
                </div>
              ))}
            </div>
          ))}
        </StyledMenuLinks>
      </motion.div>
    </StyledMenu>
  );
}
const StyledMenu = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  color: var(--white);
  display: flex;
  justify-content: flex-end;
  &.hidden {
    pointer-events: none;
  }
  .menu {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    width: 200px;
    z-index: 1002;
    background-color: var(--primary);
    .header {
      text-align: right;
      padding: 5px;
      .close-button {
        height: 30px;
        width: 30px;
        padding: 2px;
        cursor: pointer;
        &:hover,
        &:active {
          color: var(--secondary);
        }
      }
    }
  }
  .overlay {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1001;
    background-color: var(--opaque);
  }
`;
export default Menu;
