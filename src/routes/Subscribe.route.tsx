import { ComponentProps, useState } from 'react';
import styled from 'styled-components';
import { AnimatePresence } from 'framer-motion';

/** stores **/
import { setModalStatus } from '../stores/App.store';
import { images } from '../stores/Img.store';

/** hooks **/
import useParallaxEffect from '../hooks/useParallaxEffect.hook';
import { useAppDispatch, useAppSelector } from '../hooks/useStore.hook';

/** components **/
import AnimatedRoute from '../components/atoms/AnimatedRoute';
import Button from '../components/atoms/Button';
import InfoBanner from '../components/molecules/InfoBanner';
import InfoBannerLeft from '../components/molecules/InfoBannerLeft';
import Modal from '../components/organisms/Modal';
import PageDivider1 from '../components/atoms/PageDivider1';
import PageDivider2 from '../components/atoms/PageDivider2';
import StyledInfoBannerMessage from '../components/styled/StyledInfoBannerMessage';
import StyledInfoBodyMessage from '../components/styled/StyledInfoBodyMessage';
import SubscribeForm from '../components/molecules/SubscribeForm';

/** images **/
const { imgGuyPlanting1, imgNewsLetter1, imgNewsLetter2, imgNewsLetter3, imgNewsLetter4, imgNewsLetter5, imgNewsLetter6 } = images;

interface ISubscribeRoute extends ComponentProps<any> {}
function SubscribeRoute({ ...otherProps }: ISubscribeRoute) {
  const dispatch = useAppDispatch();
  const { width } = useAppSelector(store => store.app);
  const { offset } = useParallaxEffect({ strength: 0.2 });
  const modalID = 'subscribe';

  function calcBackgroundPosition() {
    let offset = 30;
    if (width < 900) offset = 45;
    if (width < 800) offset = 50;
    return offset;
  }
  function calcBackgroundSize() {
    let size = '140%';
    if (width < 700) size = '160%';
    if (width < 600) size = '200%';
    return size;
  }
  function handleOpenModal() {
    dispatch(setModalStatus({ modalID, open: true }));
  }

  return (
    <StyledSubscribeRoute>
      <InfoBanner
        style={{
          backgroundImage: `url(${imgGuyPlanting1})`,
          backgroundPosition: `center calc(${calcBackgroundPosition()}% + ${offset.y}px)`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: calcBackgroundSize()
        }}
        config={{
          height: '350px'
        }}
        slotLeft={
          <InfoBannerLeft
            className="info-banner-left"
            message={
              <StyledInfoBannerMessage>
                <div className="title">
                  <div>
                    THE <span className="isBold">HOA</span>
                  </div>
                  <div className="isBold">LANDSCAPE</div>
                  <div>TIPS AND INFO</div>
                </div>
                <div className="hr" />
                <div className="message">
                  <div>The beauty of maintaining HOA</div>
                  <div>communities is in the details.</div>
                </div>
              </StyledInfoBannerMessage>
            }
          />
        }
      />

      <PageDivider1 />

      <br />

      <div className="subscribe-now-header">Learn more about HOA landscape infrastructures!</div>

      <StyledInfoBodyMessage fontSize="1.6em" margin="0 var(--side-margin)">
        Parklane Landscaping stays abreast of the latest information that effects our industry and most importantly the HOA communities we serve. When we come across pertinent information, we like to share it via our free subscription email. Stay informed by subscribing today! Click the button below.
      </StyledInfoBodyMessage>

      <br />
      <br />

      <div className="receive-emails">To receive e-mails with tips and information for your HOA</div>

      <PageDivider2 />

      <div className="subscribe-now-action">
        <Button classes="subscribe-now-button" height="30px" width="150px" fontSize="1.5em" onClick={handleOpenModal}>
          Subscribe Now
        </Button>
      </div>

      <div className="news-letters">
        <div>
          <img src={imgNewsLetter1} alt="news letter 1" />
        </div>
        <div>
          <img src={imgNewsLetter2} alt="news letter 2" />
        </div>
        <div>
          <img src={imgNewsLetter3} alt="news letter 3" />
        </div>
        <div>
          <img src={imgNewsLetter4} alt="news letter 4" />
        </div>
        <div>
          <img src={imgNewsLetter5} alt="news letter 5" />
        </div>
        <div>
          <img src={imgNewsLetter6} alt="news letter 6" />
        </div>
      </div>

      <Modal modalID={modalID}>
        <SubscribeForm modalID={modalID} />
      </Modal>
    </StyledSubscribeRoute>
  );
}
const StyledSubscribeRoute = styled(AnimatedRoute)`
  padding-bottom: 100px;
  .info-banner-left {
    flex: 1 1 auto;
    padding-top: 50px;
    margin-bottom: 40px;
  }
  .news-letters {
    margin: 40px var(--side-margin);
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px;
    div {
      img {
        width: 100%;
      }
    }
  }
  .receive-emails {
    margin: 0 var(--side-margin);
    font-size: 1.9em;
    font-weight: 600;
    color: var(--primary);
    text-align: center;
    text-transform: uppercase;
  }
  .subscribe-now-header {
    font-size: 4em;
    margin: 50px var(--side-margin) 10px;
    font-weight: 700;
    color: var(--primary);
    text-transform: uppercase;
    text-align: center;
  }
  .subscribe-now-action {
    display: flex;
    justify-content: center;
    margin: 20px var(--side-margin) 0;
    .subscribe-now-button {
      color: var(--white);
      border: 1px solid var(--secondary);
      background: var(--secondary);
      &:hover {
        border: 1px solid var(--primary);
        background: var(--primary);
      }
    }
  }
  @media (max-width: 800px) {
    .subscribe-now-header {
      font-size: 4.5em;
    }
  }
  @media (max-width: 700px) {
    .subscribe-now-header {
      font-size: 4em;
    }
  }
  @media (max-width: 600px) {
    .subscribe-now-header {
      font-size: 3em;
    }
  }
  @media (max-width: 500px) {
    .subscribe-now-header {
      font-size: 2em;
      text-align: left;
    }
  }
`;
export default SubscribeRoute;
