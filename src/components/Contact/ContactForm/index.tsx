'use client';
import { FC } from 'react';
import { ComponentGeneral, SubmittingStatus } from '@/api/queries/getPage';
import { useContactForm } from '@/hooks/useContactForm';
import { getFormElement } from '@/utils/getFormElement';
import Image from 'next/image';

interface ContactFormProps {
  component: ComponentGeneral;
}

const ContactForm: FC<ContactFormProps> = ({ component }) => {
  const { status, errors, isSubmitting, submitForm, handleSubmit, register } = useContactForm();
  const disabledBtn = Object.keys(errors).length > 0 && 'bg-gray-400 hover:bg-gray-400 cursor-auto';
  const statusColor = status === SubmittingStatus.success ? 'text-green-500' : 'text-red-500';
  return (
    <div>
      <p className="font-bold py-6">{component.description}</p>
      <form
        name="contact"
        data-netlify="true"
        className="grid grid-cols-1 lg:grid-cols-2 grid-rows-contact lg:grid-rows-contact-lg gap-7"
        onSubmit={handleSubmit(submitForm)}
      >
        <input type="hidden" name="form-name" value="contact" />
        {component.subComponents.map(element => getFormElement(element, register, errors))}
        <div className="relative text-center">
          {status && (
            <p className={`absolute top-[-25px] w-full text-center animate-status ${statusColor}`}>
              {status[0].toUpperCase() + status.slice(1) + '!'}
            </p>
          )}
          <button
            type="submit"
            className={`w-3/4 sm:w-3/5 py-3 px-6 font-bold bg-amber-500 mx-auto lg:w-full lg:m-0 shadow-lg hover:bg-amber-600 transition-all duration-300 ${disabledBtn}`}
          >
            {isSubmitting ? (
              <Image src="/reload.svg" alt="loader" width="24" height="24" className="m-auto" />
            ) : (
              component.buttons[0]?.title
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
