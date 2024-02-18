import { ApolloClient, from, HttpLink, InMemoryCache } from '@apollo/client';
import { onError } from '@apollo/client/link/error';

const customFetch = async (uri: RequestInfo | URL, options?: RequestInit) => {  
  try {
    (options!.headers as Record<string, string>).Authorization = `${process.env.NEXT_PORTFOLIO_HYGRAPH_TOKEN}`;
    return fetch(uri, options);
  } catch (err) {
    console.log('[GraphQL error]: customFetch:', err);
  }
  return fetch(uri, options);
};

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.forEach(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${
          locations ? JSON.stringify(locations) : locations
        }, Path: ${path}`
      )
    );
  if (networkError) console.log(`[Network error]: ${networkError}`);
});

const httpLink = new HttpLink({
  uri: process.env.NEXT_PORTFOLIO_HYGRAPH_URL,
  fetch: customFetch,
});

const client = new ApolloClient({
  link: from([errorLink, httpLink]),
  cache: new InMemoryCache(),
});

export default client;
