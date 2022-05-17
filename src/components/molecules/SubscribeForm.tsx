import { ChangeEvent, ComponentProps, useEffect, useState } from 'react';
import { AxiosError } from 'axios';
import { Textfit } from 'react-textfit';
import styled from 'styled-components';
import { toast } from 'react-toastify';
import { unwrapResult } from '@reduxjs/toolkit';

/** stores **/
import { sendEmail } from '../../stores/Email.store';
import { setModalOpen } from '../../stores/App.store';

/** hooks **/
import { useAppDispatch, useAppSelector } from '../../hooks/useStore.hook';

/** components **/
import Button from '../atoms/Button';
import PageDivider2 from '../atoms/PageDivider2';
import { Loader4 } from 'styled-icons/remix-line';

/** images **/
import { images } from '../../stores/Img.store';
const { imgNewsLetter1, imgNewsLetter2, imgNewsLetter3 } = images;

interface ISubscribeForm extends ComponentProps<any> {}
function SubscribeForm({ ...otherProps }: ISubscribeForm) {
  const dispatch = useAppDispatch();
  const { templateIDs } = useAppSelector(store => store.email);
  const [checkbox, setCheckbox] = useState(false);
  const [form, setForm] = useState({
    email: '',
    name: ''
  });
  const [submitting, setSubmitting] = useState(false);


  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  }
  async function handleSubmit() {
    if (!checkbox) return;
    setSubmitting(true);
    try {
      validateForm();
      await dispatch(sendEmail({
        form,
        templateID: templateIDs.SUBSCRIPTION_TEMPLATE_ID
      })).then(unwrapResult);
      toast.success('Contact request submitted successfully');
      dispatch(setModalOpen(false));
      resetForm();
    } catch (err: any) {
      if (err instanceof Error) toast.error(err.message);
      else console.log(err);
    }
    setSubmitting(false);
  }
  function resetForm() {
    setCheckbox(false);
    setForm({
      email: '',
      name: ''
    });
  }
  function validateForm() {
    const missingFields = [];
    if (!form.name) missingFields.push('name');
    if (!form.email) missingFields.push('email');
    if (missingFields.length) throw new Error(`Please fill in the required form fields: ${missingFields.join(', ')}`);
  }

  return (
    <StyledSubscribeForm>
      <Textfit className="header" mode="single">
        Subscribe Now!
      </Textfit>
      <div className="receive-emails">To receive Parklane e-mail blasts!</div>

      <PageDivider2 />

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
      </div>

      <PageDivider2 margin="20px auto"/>

      <form className="contact-form">
        <input className="contact-form-input" placeholder="NAME" name="name" value={form.name} onChange={handleChange} />
        <input className="contact-form-input" placeholder="EMAIL" name="email" value={form.email} onChange={handleChange} />
        <label className="contact-form-checkbox-label">
          <input className="contact-form-checkbox" type="checkbox" name="checkbox" checked={checkbox} value={checkbox.toString()} onChange={e => setCheckbox(e.target.checked)} />
          <span>Yes, I would like to receive the Parklane Landscaping information E-mail blasts for my HOA community!</span>
        </label>
        <div className="contact-form-controls">
          {submitting ? (
            <Loader4 className="loading" />
          ) : (
            <Button classes="submit-form-button" disabled={submitting || !checkbox} fontSize="0.8em" fontWeight="400" onClick={handleSubmit} shadowColor="colorTransparent" width="40px" padding="7px 14px 6px">
              Send
            </Button>
          )}
        </div>
      </form>
    </StyledSubscribeForm>
  );
}
const StyledSubscribeForm = styled.div`

`;
export default SubscribeForm;
