import { Page, getPages } from '@/api/queries/getPage';
import { getComponent } from '@/utils/getComponent';

interface GetPagesResult {
  pages: Page[];
}

const Home = async () => {
  const { pages }: GetPagesResult = await getPages();
  const homePage = pages.find(page => !page.slug);

  return (
    <main className="min-h-screen">
      <>{homePage?.components.map(component => getComponent(component))}</>
    </main>
  );
};

export default Home;
