import { ComponentGeneral, ImageType } from '@/api/queries/getPage';
import Link from 'next/link';
import { FC } from 'react';

interface HeroProps {
  component: ComponentGeneral;
}

const Hero: FC<HeroProps> = ({ component }) => {
  const bgImg = component.images.find(img => img.type === ImageType.background);

  return (
    <div
      className="2xl:min-h-screen w-screen bg-cover bg-60 xl:bg-half bg-no-repeat"
      style={{ backgroundImage: `url(${bgImg?.image.url})` }}
    >
      <div className="container mx-auto 2xl:h-screen pt-44 pb-20 xl:py-44 flex flex-col items-start justify-end text-shadow">
        <h2 className="relative z-10 font-bold pb-4 pl-4 circle">{component.description}</h2>
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
    </div>
  );
};

export default Hero;
