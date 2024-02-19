import { Page, getPages } from '@/api/queries/getPage';

interface GetPagesResult {
  pages: Page[];
}

export const Home = async () => {
  const { pages }: GetPagesResult = await getPages();
  const homePage = pages.find(page => !page.slug);

  return <main className="flex min-h-screen flex-col items-center justify-between"></main>;
};

export default Home;
