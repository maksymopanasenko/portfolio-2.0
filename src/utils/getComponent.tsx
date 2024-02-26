import { ComponentGeneral } from '@/api/queries/getPage';
import About from '@/components/About';
import ExperienceAndEducation from '@/components/ExperienceAndEducation';
import ContentColumn from '@/components/ExperienceAndEducation/ContentColumn';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Skills from '@/components/Skills';
import Technologies from '@/components/Technologies';

export const getComponent = (component: ComponentGeneral) => {
  switch (component.type) {
    case 'header':
      return <Header key={component.id} component={component} />;
    case 'hero':
      return <Hero key={component.id} component={component} />;
    case 'about':
      return <About key={component.id} component={component} />;
    case 'experience':
      return <ExperienceAndEducation key={component.id} component={component} />;
    case 'experienceItem':
      return <ContentColumn key={component.id} component={component} />;
    case 'technologies':
      return <Technologies key={component.id} component={component} />;
    case 'skills':
      return <Skills key={component.id} component={component} />;
    default:
      break;
  }
};
