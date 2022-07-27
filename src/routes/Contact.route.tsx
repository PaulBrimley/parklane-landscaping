import { ChangeEvent, ComponentProps, useState } from 'react';
import styled from 'styled-components';
import { toast } from 'react-toastify';
import { unwrapResult } from '@reduxjs/toolkit';

/** stores **/
import { images } from '../stores/Img.store';
import { sendEmail } from '../stores/Email.store';

/** hooks **/
import useParallaxEffect from '../hooks/useParallaxEffect.hook';
import { useAppDispatch, useAppSelector } from '../hooks/useStore.hook';

/** components **/
import AnimatedRoute from '../components/atoms/AnimatedRoute';
import Button from '../components/atoms/Button';
import InfoBanner from '../components/molecules/InfoBanner';
import InfoBannerLeft from '../components/molecules/InfoBannerLeft';
import PageDivider1 from '../components/atoms/PageDivider1';
import ServiceList from '../components/atoms/ServiceList';
import StyledInfoBannerMessage from '../components/styled/StyledInfoBannerMessage';
import StyledInfoBodyMessage from '../components/styled/StyledInfoBodyMessage';
import { Loader4 } from 'styled-icons/remix-line';

/** images **/
const { imgFlowers2, logoAnniversary, imgOverhead1 } = images;

interface IContactRoute extends ComponentProps<any> {}
function ContactRoute({ ...otherProps }: IContactRoute) {
  const dispatch = useAppDispatch();
  const { companyInfo, width } = useAppSelector(store => store.app);
  const { serviceIDs, templateIDs } = useAppSelector(store => store.email);
  const { offset } = useParallaxEffect({ strength: 0.2 });

  const [form, setForm] = useState({
    email: '',
    message: '',
    name: '',
    phone: ''
  });
  const [submitting, setSubmitting] = useState(false);

  function calcBackgroundPosition() {
    let offset = 40;
    if (width < 800) offset = 30;
    if (width < 700) offset = 35;
    if (width < 400) offset = 40;
    return offset;
  }
  function calcBackgroundSize() {
    let size = '110%';
    if (width < 800) size = '115%';
    if (width < 700) size = '125%';
    if (width < 400) size = '150%';
    return size;
  }
  function handleChange(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  }
  async function handleSubmit() {
    setSubmitting(true);
    try {
      validateForm();
      await dispatch(
        sendEmail({
          form,
          serviceID: serviceIDs.CONTACT_SERVICE_ID,
          templateID: templateIDs.CONTACT_TEMPLATE_ID
        })
      ).then(unwrapResult);
      toast.success('Contact request submitted successfully');
      resetForm();
    } catch (err: any) {
      if (err instanceof Error) toast.error(err.message);
      else console.log(err);
    }
    setSubmitting(false);
  }
  function resetForm() {
    setForm({
      email: '',
      message: '',
      name: '',
      phone: ''
    });
  }
  function validateForm() {
    const missingFields = [];
    if (!form.name) missingFields.push('name');
    if (!form.email) missingFields.push('email');
    if (!form.phone) missingFields.push('phone');
    if (!form.message) missingFields.push('message');
    if (missingFields.length) throw new Error(`Please fill in the required form fields: ${missingFields.join(', ')}`);
  }

  return (
    <StyledContactRoute>
      <InfoBanner
        style={{
          backgroundImage: `url(${imgFlowers2})`,
          backgroundPosition: `0 calc(${calcBackgroundPosition()}% + ${offset.y}px)`,
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
                  <div>Specialists</div>
                </div>
                <div className="hr" />
                <div className="message">
                  <div>Celebrating A Decade</div>
                  <div>Specializing in HOA Landscapes</div>
                </div>
              </StyledInfoBannerMessage>
            }
          />
        }
      />

      <PageDivider1 />

      <br />
      <br />

      <div className="contact-form-wrapper">
        <div className="form-header">Contact Us</div>
        <form className="contact-form">
          <input className="contact-form-input" placeholder="NAME" name="name" value={form.name} onChange={handleChange} />
          <input className="contact-form-input" placeholder="EMAIL" name="email" value={form.email} onChange={handleChange} />
          <input className="contact-form-input" placeholder="PHONE" name="phone" value={form.phone} onChange={handleChange} />
          <textarea className="contact-form-input" rows={8} placeholder="MESSAGE" name="message" value={form.message} onChange={handleChange} />
          <div className="contact-form-controls">
            {submitting ? (
              <Loader4 className="loading" />
            ) : (
              <Button classes="submit-form-button" disabled={submitting} fontSize="0.8em" fontWeight="400" onClick={handleSubmit} shadowColor="colorTransparent" width="40px">
                Send
              </Button>
            )}
          </div>
        </form>
      </div>

      <StyledInfoBodyMessage align="center" color="colorPrimary" fontSize="1.6em" margin="0 var(--side-margin)">
        Parklane Landscaping is a full service HOA landscape company. We serve greater the San Antonio and its surrounding municipalities. If you have questions or would like a bid for your next HOA maintenance contract or project, feel free to contact us at...
      </StyledInfoBodyMessage>
      <StyledInfoBodyMessage align="center" color="colorPrimary" fontSize="1.4em" fontWeight="400" lineHeight="1.2em" margin="10px var(--side-margin)">
        {companyInfo.phone} (M-F 9A-5p) | Text or Voice
      </StyledInfoBodyMessage>
      <StyledInfoBodyMessage align="center" color="colorPrimary" fontSize="1.4em" fontWeight="400" lineHeight="1.2em" margin="10px var(--side-margin)">
        {companyInfo.email}
      </StyledInfoBodyMessage>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <div className="contact-logo-image" />

      <br />
      <br />
      <br />
      <br />

      <ServiceList />
    </StyledContactRoute>
  );
}
const StyledContactRoute = styled(AnimatedRoute)`
  padding-bottom: 90px;
  .contact-form-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px var(--side-margin);
    .form-header {
      font-size: 1.7em;
      font-weight: 700;
      text-transform: uppercase;
      color: var(--primary);
      text-align: center;
    }
    .contact-form {
      display: flex;
      flex-direction: column;
      width: 40%;
      min-width: 200px;
      background-color: var(--primary);
      padding: 5px 8px 7px;
      .contact-form-input {
        resize: none;
        width: 100%;
        padding: 8px;
        margin: 2px 0;
        border: none;
        background-color: #fff;
        box-sizing: border-box;
        box-shadow: 0 0 2px var(--transparent);
        color: var(--primary);
        font-family: 'Josefin Sans', sans-serif;
        font-size: 1em;
        font-weight: 200;
        outline: none;
        transition: box-shadow 0.25s, border-bottom 0.25s;
        &:focus {
          box-shadow: 0 0 2px var(--grey-medium-light);
          &.hasError {
            box-shadow: 0 0 2px var(--danger);
          }
        }
      }
      .contact-form-controls {
        display: flex;
        justify-content: center;
        margin-top: 5px;
        @keyframes rotation {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .loading {
          height: 30px;
          width: 30px;
          color: var(--white);
          animation: rotation 2s infinite linear;
        }
        .submit-form-button {
          color: var(--white);
          background-color: var(--secondary);
          &:hover {
            background-color: var(--secondary-opaque);
          }
        }
      }
    }
  }
  .contact-header {
    font-size: 1.3em;
    font-weight: 700;
    text-transform: uppercase;
    color: var(--primary);
    text-align: center;
    margin: 10px var(--side-margin);
  }
  .contact-logo-image {
    height: 300px;
    background: url(${logoAnniversary}) no-repeat center / contain;
  }
  .info-banner-left {
    flex: 1 1 auto;
    padding-top: 50px;
    margin-bottom: 40px;
  }
  @media (max-width: ${({ theme }) => theme.mobileWidth}px) {
    .contact-info {
      margin: 0 20px;
      .contact-info-phone-email {
        font-size: 1em;
      }
    }
  }
`;
export default ContactRoute;
