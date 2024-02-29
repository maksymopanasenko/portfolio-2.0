import { SubComponent } from '@/api/queries/getPage';
import Link from 'next/link';

export const getFormElement = (element: SubComponent) => {
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
            name={element.subTitle}
            className="border w-full px-5 h-full focus:border-transparent focus:outline-none focus:ring-amber-500"
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
            name={element.subTitle}
            className="border w-full p-5 resize-none h-full focus:border-transparent focus:outline-none focus:ring-amber-500"
          />
        </div>
      );
    case 'checkbox':
      return (
        <div key={element.id} className="relative lg:order-1 lg:self-center">
          <input
            type="checkbox"
            id={element.id}
            name={element.subTitle}
            className="border-black rounded focus:border-black focus:outline-none focus:ring-white"
          />
          <label htmlFor={element.id} className="px-2">
            {element.title}
          </label>
          {/* <Link href={element.button.page.slug} className=" text-blue-600">
            {element.button.title}
          </Link> */}
        </div>
      );
    default:
      break;
  }
};
