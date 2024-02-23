import { ComponentGeneral, ImageType } from '@/api/queries/getPage';
import Image from 'next/image';
import { FC } from 'react';

interface TechnologiesProps {
  component: ComponentGeneral;
}

const Technologies: FC<TechnologiesProps> = ({ component }) => {
  return (
    <section className="pt-20 lg:pt-28" id="skills">
      <div className="container mx-auto">
        <h3 className="relative z-10 font-bold pb-4 circle circle-center text-center">{component.subTitle}</h3>
        <h2 className="relative font-bold text-2xl pb-4 pt-2 underlined underlined-center text-center">
          {component.title}
        </h2>
        <ul className="grid place-content-center grid-cols-mobile sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-10">
          {component.subComponents?.map(({ id, title, description, images }) => (
            <li key={id} className="border border-black p-6 bg-neutral-200">
              <div className="h-16 flex items-center relative">
                <Image
                  src={images[0].image.url}
                  alt={images[0].alt}
                  width={64}
                  height={64}
                  className="object-contain absolute h-full"
                />
              </div>
              <h4 className="font-bold text-sm my-4">{title}</h4>
              <p className="text-sm">{description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Technologies;
