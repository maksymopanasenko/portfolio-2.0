import { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';
import { contactValidationSchema } from '@/validations/contactFormValidation';
import { getEncodedUrl } from '@/utils/encodeUrlData';
import { SubmittingStatus } from '@/api/queries/getPage';

export type Inputs = {
  email: string;
  name: string;
  message?: string;
  policy: boolean;
};

export const useContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState('');
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>({ resolver: yupResolver(contactValidationSchema) });

  useEffect(() => {
    if (status === SubmittingStatus.success) {
      reset({
        email: '',
        name: '',
        message: '',
        policy: false,
      });
    }
  }, [status, reset]);

  const submitForm: SubmitHandler<Inputs> = async (_, e) => {
    e?.preventDefault();

    setIsSubmitting(true);
    setStatus('');

    const myForm = e?.target;
    const formData = new FormData(myForm);

    const urlEncodedData = getEncodedUrl(formData);

    try {
      await axios.post('/reload.svg', urlEncodedData, {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      });
      setStatus(SubmittingStatus.success);
    } catch (error) {
      setStatus(SubmittingStatus.failure);
    } finally {
      setIsSubmitting(false);
    }
  };

  return { status, errors, isSubmitting, submitForm, handleSubmit, register };
};
