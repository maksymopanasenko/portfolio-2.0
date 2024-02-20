import { ComponentGeneral } from '@/api/queries/getPage';
import Header from '@/components/Header';
import Hero from '@/components/Hero';

export const getComponent = (component: ComponentGeneral) => {
  switch (component.type) {
    case 'header':
      return <Header key={component.id} component={component} />;
    case 'hero':
      return <Hero key={component.id} component={component} />;
    default:
      break;
  }
};
