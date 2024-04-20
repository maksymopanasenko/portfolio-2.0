import { ComponentGeneral, ImageType } from '@/api/queries/getPage';
import getBase64 from '@/utils/getBase64';
import { getComponent } from '@/utils/getComponent';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

interface ContactProps {
  component: ComponentGeneral;
}

const Contact: FC<ContactProps> = async ({ component }) => {
  const mainImage = component.images.find(img => img.type === ImageType.primary);
  const myImage = await getBase64(mainImage!.image.url);

  return (
    <section className="pt-20 lg:pt-28" id="contact">
      <div className="container mx-auto">
        <div className="md:flex md:gap-6 xl:gap-10">
          <div className="mb-6 lg:p-0 h-96 sm:h-128 md:mb-0 md:w-3/5 lg:h-full lg:w-9/12 xl:w-2/3 2xl:w-[55%]">
            <Image
              src={mainImage!.image.url}
              alt={mainImage!.alt}
              width={mainImage!.image.width}
              height={mainImage!.image.height}
              quality={100}
              blurDataURL={myImage}
              placeholder="blur"
              className="object-cover w-full h-full object-top"
            />
          </div>
          <div className="w-full">
            <h3 className="relative z-10 font-bold pb-4 pl-4 circle">{component.subTitle}</h3>
            <h2 className="relative font-bold text-2xl pb-4 pt-2 underlined">{component.title}</h2>
            <p className="font-bold py-6">{component.description}</p>
            <ul className="flex gap-7">
              {component.subComponents.map(({ id, title, images }) => (
                <li key={id}>
                  <Link href={title} target="_blank">
                    <Image src={images[0].image.url} alt={images[0].alt} width={30} height={30} />
                  </Link>
                </li>
              ))}
            </ul>
            {component.nestedComponents.map(component => getComponent(component))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
