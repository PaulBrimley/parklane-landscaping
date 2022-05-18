import { Link } from '@reach/router';
import styled from 'styled-components';

/** routes **/
import { Paths as ReactPaths, routeArr } from '../../routes/Routes';

/** hooks **/
import { useAppSelector } from '../../hooks/useStore.hook';

/** images **/
import { images } from '../../stores/Img.store';
const { facebookLogo, grassDark, instagramLogo, logoCard, twitterLogo } = images;

function Footer() {
  const { companyInfo } = useAppSelector(store => store.app);
  return (
    <StyledFooter>
      <div className="footer-top">
        <div className="grass" />
      </div>
      <div className="footer-main">
        <Link className="logo" to={ReactPaths.HOME}>
          <img src={logoCard} alt="logo card" />
        </Link>
        <div className="info">
          <div className="info-place-holder" />
          <div className="info-place-holder" />
          <div className="social-media-links">
            {/*<Link to={routes.HOME}><img className="link-logo" src={twitterLogo} alt="twitter logo"/></Link>*/}
            {/*<Link to={routes.HOME}><img className="link-logo" src={facebookLogo} alt="facebook logo"/></Link>*/}
            {/*<Link to={routes.HOME}><img className="link-logo" src={instagramLogo} alt="instagram logo"/></Link>*/}
            {/*
            we will bring these back when we get the actual links
            <a href="https://www.google.com" target="_blank">
              <img className="link-logo" src={twitterLogo} alt="twitter logo"/>
            </a>
            <a href="https://www.google.com" target="_blank">
              <img className="link-logo" src={facebookLogo} alt="facebook logo"/>
            </a>
            <a href="https://www.google.com" target="_blank">
              <img className="link-logo" src={instagramLogo} alt="instagram logo"/>
            </a>
            */}
          </div>
          <div className="contact-info">
            <div>
              <span>{companyInfo.poBox}</span>
              <span>{companyInfo.city}, {companyInfo.state} {companyInfo.zip}</span>
            </div>
            <div>
              <span>{companyInfo.phone}</span>
              <span>{companyInfo.email}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        {routeArr.map((route, index) => (
          <Link key={index} className="link" to={route.path}>
            {route.name}
          </Link>
        ))}
      </div>
    </StyledFooter>
  );
}
const StyledFooter = styled.div`
  flex: 50px 0 0;
  .footer-bottom {
    display: flex;
    justify-content: flex-end;
    padding: 20px 150px 20px 40px;
    .link {
      display: block;
      padding: 5px;
      margin: 0 5px;
      font-size: 0.8em;
      font-weight: 500;
      text-decoration: none;
      text-transform: uppercase;
      color: var(--secondary);
      transition: color 0.2s;
      &:hover, &.active {
        color: var(--primary);
      }
    }
  }
  .footer-main {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--primary);
    .info {
      margin: 20px 0 40px;
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 1px;
      background: radial-gradient(ellipse at 50% 10px, var(--tertiary-opaque), rgb(0, 0, 0, 0));
      color: var(--white);
      div {
        background: var(--primary);
      }
      .info-place-holder {
        padding: 5px;
      }
      .contact-info {
        padding: 10px 15px 8px;
        div:first-child {
          margin-bottom: 5px;
        }
        span {
          padding: 0 4px;
          &:nth-child(1) {
            border-right: 1px solid var(--white);
          }
        }
      }
      .social-media-links {
        padding: 10px 15px 8px;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        .link-logo {
          cursor: pointer;
          height: 30px;
          width: 30px;
        }
      }
    }
    .logo {
      position: absolute;
      left: 20px;
      width: 50px;
      img {
        width: 100%;
      }
    }
  }
  .footer-top {
    position: relative;
    height: 6px;
    background: var(--secondary);
    .grass {
      position: absolute;
      bottom: 100%;
      right: 0;
      height: 400px;
      width: 150px;
      background: url(${grassDark}) no-repeat 50% 100% / contain;
      z-index: -1;
    }
  }
  @media (max-width: ${({ theme }): number => theme.mobileWidth}px) {
    .footer-bottom {
      justify-content: center;
      padding: 20px;
    }
    .footer-main {
      .info {
        margin: 10px 0;
        grid-template-columns: 1fr;
        background: transparent;
        .info-place-holder {
          display: none;
        }
      }
      .logo {
        width: 30px;
      }
    }
    .footer-top {
      .grass {
        height: 200px;
        width: 75px;
      }
    }
  }
`;
export default Footer;
