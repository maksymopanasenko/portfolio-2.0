import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ComponentGeneral, ImageType } from '@/api/queries/getPage';
import getBase64 from '@/utils/getBase64';

interface HeroProps {
  component: ComponentGeneral;
}

const Hero: FC<HeroProps> = async ({ component }) => {
  const bgImg = component.images.find(img => img.type === ImageType.background);
  const bluredImg = await getBase64(bgImg!.image.url);

  return (
    <div className="w-full h-full relative">
      <div className="container mx-auto 2xl:pt-80 pt-44 pb-20 xl:py-44 flex flex-col items-start justify-end text-shadow">
        <h2 className="relative z-10 font-bold pb-4 pl-4 circle">{component.subTitle}</h2>
        <h1 className="font-bold md:leading-tight text-3xl md:text-5xl max-w-80 md:max-w-xl text-neutral-800">
          {component.title}
        </h1>
        <div className="mt-10 hidden md:block">
          {component.buttons.map(({ id, link, title }) => (
            <Link
              key={id}
              href={`#${link}`}
              className="hover:bg-amber-500 p-3 inline-block mx-2 text-xl font-bold transition-all duration-300"
            >
              {title}
            </Link>
          ))}
        </div>
      </div>
      {bgImg && (
        <Image
          src={bgImg.image.url}
          alt={bgImg.alt}
          fill
          sizes="100vw"
          quality={100}
          priority
          className="object-cover z-[-1]"
          blurDataURL={bluredImg}
          placeholder="blur"
        />
      )}
    </div>
  );
};

export default Hero;
