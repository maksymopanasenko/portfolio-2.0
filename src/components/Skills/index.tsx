import { ComponentGeneral } from '@/api/queries/getPage';
import { FC } from 'react';

interface SkillsProps {
  component: ComponentGeneral;
}

const Skills: FC<SkillsProps> = ({ component }) => {
  return (
    <div className="container mx-auto pt-24">
      <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 sm:px-20 md:p-0">
        {component.subComponents.map(({ id, title, subTitle }) => (
          <li key={id}>
            <div className="flex justify-between mb-10">
              <h4 className="relative font-bold pl-4 circle">{title}</h4>
              <p>{subTitle}</p>
            </div>
            <div className="w-full rounded bg-neutral-300 h-3.5">
              <div style={{ width: subTitle }} className="w-0 rounded h-full bg-amber-500"></div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
