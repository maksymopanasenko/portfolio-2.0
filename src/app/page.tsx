import { Page, getPages } from '@/api/queries/getPage';
import { getComponent } from '@/utils/getComponent';

interface GetPagesResult {
  pages: Page[];
}

const Home = async () => {
  const { pages }: GetPagesResult = await getPages();
  const homePage = pages.find(page => !page.slug);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className='px-5'>
        {homePage?.components.map(component => getComponent(component))}
      </div>
    </main>
  );
};

export default Home;
