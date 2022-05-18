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
  flex: 75px 0 0;
  position: relative;
  display: flex;
  background-color: var(--primary);
  color: var(--white);
  .child-routes {
    display: flex;
    justify-content: center;
    position: absolute;
    top: 75px;
    left: 0;
    right: 0;
    box-sizing: border-box;
    z-index: 1000;
    background-color: var(--secondary);
    height: 0;
    //overflow: hidden;
    opacity: 0;
    transition: all 0.2s;
    &.active {
      opacity: 1;
      padding-top: 2px;
      height: 85px;
    }
    .child-route-wrapper {
      position: relative;
      margin-top: 8px;
      flex: 8% 0 0;
      &:before {
        position: absolute;
        border-right: 25px solid var(--white);
        border-left: 25px solid var(--white);
        content: '';
        display: block;
        top: 54%;
        left: 0;
        right: 0;
        height: 1px;
        z-index: -1;
      }
      &:first-child {
        &:before {
          border-left: none;
        }
      }
      &:last-child {
        &:before {
          border-right: none;
        }
      }
      .child-route {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-size: 0.6em;
        text-align: center;
        color: inherit;
        text-decoration: none;
        text-transform: uppercase;
        transform: scale(1);
        transform-origin: 50% 10%;
        transition: all 0.2s;
        &:hover {
          transform: scale(1.4);
        }
        .child-route-icon {
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 50%;
          background-image: linear-gradient(120deg, var(--primary) 0%, var(--primary) 50%, var(--primary-hover) 50%, var(--primary-hover) 100%);
          margin: 2px 5px;
          width: 46px;
          height: 46px;
          transition: all 0.2s;
          svg {
            fill: var(--white)
          }
        }
        .child-route-name {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }
    }
  }
  .header-center {
    flex: 1 1 auto;
    display: flex;
    padding-bottom: 10px;
  }
  .header-left {
    display: flex;
    align-items: center;
    .logo {
      max-width: 150px;
      margin: 0 0 5px 20px;
      object-fit: contain;
      object-position: center;
    }
  }
  .header-right {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 5px 20px 5px 10px;
    .contact {
      font-size: 0.8em;
      font-weight: 400;
    }
    .menu-button {
      height: 30px;
      width: 30px;
      padding: 2px;
      cursor: pointer;
      &:hover,
      &:active {
        color: var(--secondary);
      }
    }
    .phone {
      position: relative;
      font-size: 1.3em;
      font-weight: 200;
      color: var(--secondary);
      text-decoration: none;
      &:before {
        content: '';
        position: absolute;
        width: 100%;
        height: 1px;
        bottom: 0;
        left: 0;
        background-color: var(--secondary);
        visibility: hidden;
        transform: scaleX(0);
        transition: all 0.2s;
      }
      &:hover {
        &:before {
          visibility: visible;
          transform: scaleX(0.99);
        }
      }
    }
  }
  @media (max-width: 600px) {
    .header-left {
      .logo {
        max-width: 100px;
        margin: 0 0 5px 10px;
      }
    }
  }
`;
export default Header;
