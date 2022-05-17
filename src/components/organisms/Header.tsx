import { MouseEvent, useState } from 'react';
import { Link, useLocation } from '@reach/router';
import styled from 'styled-components';
import classNames from 'classnames';

import { IRoute, Paths as ReactPaths, routeArr } from '../../routes/Routes';

/** stores **/
import { setMenuCollapsed } from '../../stores/App.store';
import { images } from '../../stores/Img.store';

/** hooks **/
import { useAppDispatch, useAppSelector } from '../../hooks/useStore.hook';

/** components **/
import StyledHeaderLinks from '../styled/StyledHeaderLinks';
import SVGIcon from '../atoms/SVGIcon';
import { Menu } from 'styled-icons/boxicons-regular';

const { logoMain } = images;

function Header() {
  const dispatch = useAppDispatch();
  const { companyInfo, isMobile } = useAppSelector(store => store.app);
  const [childRoutes, setChildRoutes] = useState<IRoute[]>([]);
  const location = useLocation();

  function clearChildRoutes() {
    setChildRoutes([]);
  }
  function handleLinkHover({ e, children }: { e: MouseEvent; children: IRoute[]}) {
    setChildRoutes(children);
  }
  
  return (
    <StyledHeader onMouseLeave={clearChildRoutes}>
      <div className="header-left">
        <Link to={ReactPaths.HOME}>
          <img className="logo" src={logoMain} alt="logo" />
        </Link>
      </div>
      <div className="header-center">
        {!isMobile && (
          <StyledHeaderLinks>
            {routeArr.map(({ children, name, path }) => (
              <div key={path} className="link-wrapper">
                <div
                  className={classNames('link-inner', {
                    active: location.pathname === path || (children?.find(child => location.pathname === child.path))
                  })}
                >
                  <Link className="link" to={path} onMouseEnter={e => handleLinkHover({ e, children: children?.length ? children : [] })}>
                    {name}
                  </Link>
                </div>
              </div>
            ))}
          </StyledHeaderLinks>
        )}
      </div>
      <div className="header-right">
        {isMobile && <Menu className="menu-button" onClick={() => dispatch(setMenuCollapsed(false))} />}
        {!isMobile && (
          <>
            <div className="contact">CALL NOW</div>
            <a className="phone" href={`tel:${companyInfo.phone}`}>
              {companyInfo.phone}
            </a>
          </>
        )}
      </div>
      <div className={classNames('child-routes', { active: childRoutes.length > 0 && !isMobile })}>
        {childRoutes
          .filter(({ displayInHeader }) => displayInHeader)
          .map(({ headerLinkLines, icon, iconSize, name, path }) => (
            <div key={path} className="child-route-wrapper">
              <Link className="child-route" to={path} onClick={clearChildRoutes}>
                {headerLinkLines ? (
                  headerLinkLines.map((headerLinkLine, index) => (
                    <div key={index} className="child-route-name">
                      {headerLinkLine}
                    </div>
                  ))
                ) : (
                  <div className="child-route-name">{name}</div>
                )}
                {icon &&
                  <div className="child-route-icon">
                    <SVGIcon height={iconSize ?? '20px'} type={icon} />
                  </div>
                }
              </Link>
            </div>
          ))}
      </div>
    </StyledHeader>
  );
}
const StyledHeader = styled.div`

`;
export default Header;
