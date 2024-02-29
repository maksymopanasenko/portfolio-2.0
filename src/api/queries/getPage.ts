import { gql } from '@apollo/client';
import client from '../apolloClient';

export const GET_PAGES = gql`
  query getPages {
    pages {
      id
      title
      slug
      components(first: 100) {
        ... on ComponentGeneral {
          id
          title
          subTitle
          description
          type
          buttons {
            id
            title
            link
            page {
              slug
            }
          }
          images {
            id
            alt
            type
            image {
              url
            }
          }
          navigation {
            links {
              id
              anchorId
              title
            }
          }
          nestedComponents {
            ... on ComponentGeneral {
              id
              title
              subTitle
              description
              type
              buttons {
                id
                title
                link
                page {
                  slug
                }
              }
              images {
                id
                alt
                type
                image {
                  url
                }
              }
              subComponents {
                id
                title
                subTitle
                description
                type
                button {
                  id
                  title
                  page {
                    slug
                  }
                }
                images {
                  id
                  alt
                  type
                  image {
                    url
                  }
                }
              }
            }
          }
          subComponents {
            id
            title
            subTitle
            description
            type
            images {
              id
              alt
              type
              image {
                url
              }
            }
          }
        }
      }
    }
  }
`;

export interface ComponentGeneral {
  id: string;
  title: string;
  subTitle: string;
  description: string;
  type: string;
  navigation: Navigation;
  images: ImageComponent[];
  buttons: ButtonType[];
  nestedComponents: ComponentGeneral[];
  subComponents: SubComponent[];
}

export interface ButtonType {
  id: string;
  title: string;
  link: string;
  page: Page;
}

export interface SubComponent {
  id: string;
  title: string;
  subTitle: string;
  description: string;
  type: string;
  button: ButtonType;
  images: ImageComponent[];
}

export interface Page {
  id: string;
  title: string;
  slug: string;
  components: ComponentGeneral[];
}

export interface ImageComponent {
  id: string;
  alt: string;
  type: string;
  image: {
    url: string;
  };
}

export enum ImageType {
  primary = 'primary',
  secondary = 'secondary',
  background = 'background',
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
