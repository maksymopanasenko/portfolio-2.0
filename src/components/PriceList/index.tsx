import { ComponentGeneral } from '@/api/queries/getPage';
import { FC } from 'react';

interface PriceListProps {
  component: ComponentGeneral;
}

const PriceList: FC<PriceListProps> = ({ component }) => {
  const { subTitle, subComponents } = component;
  return (
    <section className="pt-24" id="price-list">
      <div className="container mx-auto">
        <h3 className="relative z-10 font-bold pb-5 circle circle-center text-center">{subTitle}</h3>
        <h2 className="relative font-bold text-2xl pt-2 underlined underlined-center text-center"></h2>
        <ul className="grid pt-10 gap-y-4 justify-center md:justify-between md:grid-cols-[repeat(2,340px)] lg:pt-14 lg:grid-cols-[repeat(2,396px)] xl:px-16">
          {subComponents.map(({ id, title, subTitle, description }) => (
            <li key={id} className="text-sm">
              <div className="flex justify-between mb-2">
                <h4 className="relative font-bold pl-4 circle-mini">{title}</h4>
                <h4 className="font-bold">{subTitle}</h4>
              </div>
              <p className="text-xs">{description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default PriceList;
