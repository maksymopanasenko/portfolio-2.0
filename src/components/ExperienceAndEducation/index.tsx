import { ComponentGeneral } from '@/api/queries/getPage';
import { getComponent } from '@/utils/getComponent';
import { FC } from 'react';

interface ExperienceAndEducationProps {
  component: ComponentGeneral;
}

const ExperienceAndEducation: FC<ExperienceAndEducationProps> = ({ component }) => {
  return (
    <section className="pt-20 lg:pt-28" id="experience">
      <div className="container mx-auto">
        <h3 className="relative z-10 font-bold pb-4 circle circle-center text-center">{component.subTitle}</h3>
        <h2 className="relative font-bold text-2xl pb-4 pt-2 underlined underlined-center text-center">
          {component.title}
        </h2>
        <div className="lg:flex justify-between">
          {component.nestedComponents.map(component => getComponent(component))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceAndEducation;
