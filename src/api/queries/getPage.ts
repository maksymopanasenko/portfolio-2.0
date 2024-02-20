import { gql } from '@apollo/client';
import client from '../apolloClient';

export const GET_PAGES = gql`
  query getPages {
    pages {
      id
      title
      slug
      components {
        id
        title
        description
        type
        buttons {
          title
        }
        navigation {
          links {
            id
            title
            anchorId
          }
        }
      }
    }
  }
`;

export interface ComponentGeneral {
  id: string;
  title: string;
  description: string;
  type: string;
  navigation: Navigation;
}

export interface Page {
  id: string;
  title: string;
  slug: string;
  components: ComponentGeneral[];
}

export interface Navigation {
  links: NavigationLink[];
}

export interface NavigationLink {
  id: string;
  title: string;
  anchorId: string;
}

interface GetPagesData {
  pages: any;
}

let pagesCache: GetPagesData = {
  pages: [],
};

export const getPages = async () => {
  if (pagesCache.pages.length > 0) {
    return pagesCache;
  }

  const queryResult = await client.query<GetPagesData>({
    query: GET_PAGES,
  });

  pagesCache = queryResult.data;
  return pagesCache;
};
