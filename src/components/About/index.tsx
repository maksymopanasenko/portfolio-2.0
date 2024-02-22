import { ComponentGeneral, ImageType } from '@/api/queries/getPage';
import Image from 'next/image';
import { FC } from 'react';

interface AboutProps {
  component: ComponentGeneral;
}

const About: FC<AboutProps> = ({ component }) => {
  const mainImage = component.images.find(img => img.type === ImageType.primary);

  return (
    <section className="py-20 lg:py-28" id="about">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 grid-rows-48 gap-6 lg:grid-cols-about lg:grid-rows-1">
          <div className="lg:order-2">
            <h3 className="relative z-10 font-bold pb-4 pl-4 circle">{component.subTitle}</h3>
            <h2 className="relative font-bold text-2xl pb-4 pt-2 underlined">{component.title}</h2>
            <p className="py-6">{component.description}</p>
            <div>
              <ul className="grid gap-4 sm:grid-cols-2 sm:gap-y-10 pt-8">
                {component.subComponents.map(({ id, title, description, images }) => (
                  <li key={id} className="flex gap-6">
                    <div className="relative circle w-16 lg:w-24">
                      <Image
                        src={images[0].image.url}
                        alt={images[0].alt}
                        width={30}
                        height={30}
                        className="relative translate-y-3 translate-x-3"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm mb-2">{title}</h4>
                      <p className="text-sm">{description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="pt-6 lg:p-0">
            <Image
              src={mainImage!.image.url}
              alt={mainImage!.alt}
              width={300}
              height={500}
              quality={100}
              className="object-cover w-full h-full object-center-top"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
