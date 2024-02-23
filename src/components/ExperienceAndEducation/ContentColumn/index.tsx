import { ComponentGeneral } from '@/api/queries/getPage';
import Image from 'next/image';
import { FC } from 'react';

interface ContentColumnProps {
  component: ComponentGeneral;
}

const ContentColumn: FC<ContentColumnProps> = ({ component }) => {
  return (
    <div className="lg:w-1/2 lg:mx-14">
      <h3 className="font-bold text-lg pl-6 py-14 circle-mini relative">{component.title}</h3>
      <ul className="vertical-stick relative">
        {component.subComponents?.map(({ id, title, subTitle, description, images }) => (
          <li key={id} className="relative horizontal-stick pl-11 mb-8">
            <div className="flex gap-1">
              <div className="relative circle w-14">
                {images.length > 0 && (
                  <Image
                    src={images[0].image.url}
                    alt={images[0].alt}
                    width={30}
                    height={30}
                    className="relative translate-y-3 translate-x-3"
                  />
                )}
              </div>
              <div>
                <h4 className="font-bold text-sm">{title}</h4>
                <h5 className="text-xs mb-4">{subTitle}</h5>
              </div>
            </div>
            <p className="text-sm">{description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContentColumn;
