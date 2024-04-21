import { SubComponent } from '@/api/queries/getPage';
import { Inputs } from '@/hooks/useContactForm';
import Link from 'next/link';
import { FieldErrors, UseFormRegister } from 'react-hook-form';

export const getFormElement = (
  element: SubComponent,
  register: UseFormRegister<Inputs>,
  errors: FieldErrors<Inputs>,
) => {
  const errorBorder = 'border-red-500 focus:ring-red-500';
  switch (element.type) {
    case 'input':
      return (
        <div key={element.id} className="relative">
          <label htmlFor={element.id} className="absolute bottom-8 left-3 bg-white px-2">
            {element.title}
          </label>
          <input
            type="text"
            id={element.id}
            className={`border w-full px-5 h-full focus:border-transparent focus:outline-none focus:ring-amber-500 placeholder:text-red-500 placeholder:text-xs ${errors[element.subTitle as keyof Inputs] && errorBorder}`}
            {...register(element.subTitle as keyof Inputs)}
            placeholder={errors[element.subTitle as keyof Inputs] && element.description}
          />
        </div>
      );
    case 'textArea':
      return (
        <div key={element.id} className="relative lg:col-span-2">
          <label htmlFor={element.id} className="absolute top-[-10px] left-3 bg-white px-2">
            {element.title}
          </label>
          <textarea
            id={element.id}
            className="border w-full p-5 resize-none h-full focus:border-transparent focus:outline-none focus:ring-amber-500"
            {...register(element.subTitle as keyof Inputs)}
          />
        </div>
      );
    case 'checkbox':
      return (
        <div key={element.id} className="relative lg:order-1 lg:self-center">
          <input
            type="checkbox"
            id={element.id}
            className="border-black rounded focus:border-black focus:outline-none focus:ring-white"
            {...register(element.subTitle as keyof Inputs)}
          />
          <label htmlFor={element.id} className="pl-2 pr-1">
            {element.title}
          </label>
          <Link href={element.button.page.slug} className="text-blue-600">
            {element.button.title}
          </Link>
          <p className="text-xs text-red-500 pt-2">{errors[element.subTitle as keyof Inputs] && element.description}</p>
        </div>
      );
    default:
      break;
  }
};
