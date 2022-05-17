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
      }))
      /*await sendEmail({
        form,
        templateId: templateIds.SUBSCRIPTION_TEMPLATE_ID
      });*/
      toast.success('Contact request submitted successfully');
      //toggleModal({ open: false });
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

    </StyledSubscribeForm>
  );
}
const StyledSubscribeForm = styled.div`

`;
export default SubscribeForm;
