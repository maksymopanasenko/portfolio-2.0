import { Page, getPages } from '@/api/queries/getPage';
import { getComponent } from '@/utils/getComponent';

interface GetPagesResult {
  pages: Page[];
}

const Home = async () => {
  const { pages }: GetPagesResult = await getPages();
  const homePage = pages.find(page => !page.slug);
  const projectPages = pages.filter(({ type }) => type === 'project_page');

  return (
    <main className="min-h-screen pb-20">
      <>{homePage?.components.map(component => getComponent(component, projectPages))}</>
    </main>
  );
};

export default Home;
