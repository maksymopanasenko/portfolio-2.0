import { ComponentGeneral, Page } from '@/api/queries/getPage';
import getBase64 from '@/utils/getBase64';
import { FC } from 'react';
import ProjectContainer from './ProjectContainer';

interface ProjectsProps {
  component: ComponentGeneral;
  projectPages: Page[];
}

const Projects: FC<ProjectsProps> = async ({ component, projectPages }) => {
  return (
    <section className="pt-20 lg:pt-28" id="projects">
      <div className="container mx-auto">
        <h3 className="relative z-10 font-bold pb-4 circle circle-center text-center">{component.subTitle}</h3>
        <h2 className="relative font-bold text-2xl pb-4 pt-2 underlined underlined-center text-center">
          {component.title}
        </h2>
        <ul>
          {await Promise.all(
            projectPages.map(async page => {
              const img = page.components[0].images[0];
              const bluredImg = await getBase64(img.image.url);
              return <ProjectContainer key={page.id} page={page} img={img} bluredImg={bluredImg ?? ''} />;
            }),
          )}
        </ul>
      </div>
    </section>
  );
};

export default Projects;
