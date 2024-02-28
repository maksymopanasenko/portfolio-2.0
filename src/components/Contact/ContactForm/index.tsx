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
      <form className="grid grid-cols-1 grid-rows-contact gap-4">
        {component.subComponents.map(element => getFormElement(element))}
        <button type="submit" className="w-3/4 py-3 px-6 font-bold bg-amber-500">
          {component.buttons[0]?.title}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
