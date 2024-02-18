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
        }
    }
}
`;


export interface ComponentGeneral {
    id: string;
    title: string;
    description: string;
    type: string;
}

export interface Page {
    id: string;
    title: string;
    slug: string;
    components: ComponentGeneral[];
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

