import { ComponentGeneral } from '@/api/queries/getPage';
import Header from '@/components/Header';

export const getComponent = (component: ComponentGeneral) => {
  switch (component.type) {
    case 'header':
      return <Header key={component.id} component={component} />;
    default:
      break;
  }
};
