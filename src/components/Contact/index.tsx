import { ComponentGeneral, ImageType } from '@/api/queries/getPage';
import Image from 'next/image';
import { FC } from 'react';

interface ContactProps {
  component: ComponentGeneral;
}

const Contact: FC<ContactProps> = ({ component }) => {
  const mainImage = component.images.find(img => img.type === ImageType.primary);

  return (
    <section className="pt-20 lg:pt-28" id="contact">
      <div className="container mx-auto">
        <div className="md:flex md:gap-6">
          <div className="mb-6 lg:p-0 h-96 sm:h-128 md:mb-0 md:w-2/5 lg:h-full">
            <Image
              src={mainImage!.image.url}
              alt={mainImage!.alt}
              width={300}
              height={500}
              quality={100}
              className="object-cover w-full h-full object-top"
            />
          </div>
          <div>
            <h3 className="relative z-10 font-bold pb-4 pl-4 circle">{component.subTitle}</h3>
            <h2 className="relative font-bold text-2xl pb-4 pt-2 underlined">{component.title}</h2>
            <p className="font-bold py-6">{component.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
