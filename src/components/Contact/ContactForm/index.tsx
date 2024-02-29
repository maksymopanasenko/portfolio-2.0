import { ComponentGeneral, ImageType } from '@/api/queries/getPage';
import { getFormElement } from '@/utils/getFormElement';
import { FC } from 'react';

interface ContactFormProps {
  component: ComponentGeneral;
}

const ContactForm: FC<ContactFormProps> = ({ component }) => {
  return (
    <div>
      <p className="font-bold py-6">{component.description}</p>
      <form
        name="contact"
        data-netlify="true"
        className="grid grid-cols-1 lg:grid-cols-2 grid-rows-contact lg:grid-rows-contact-lg gap-7"
      >
        <input type="hidden" name="form-name" value="contact" />
        {component.subComponents.map(element => getFormElement(element))}
        <button
          type="submit"
          className="w-3/4 sm:w-3/5 mt-2 py-3 px-6 font-bold bg-amber-500 mx-auto lg:w-full lg:m-0 shadow-lg"
        >
          {component.buttons[0]?.title}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
