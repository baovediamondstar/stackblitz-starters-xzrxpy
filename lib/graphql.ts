// lib/graphql.ts
import { GraphQLClient } from 'graphql-request';

const endpoint =
  'https://dichvubaovetakedashingen.vn/wordpress/ofns25ufyhdryhqiwrpndh05o'; // Thay thế bằng URL GraphQL của bạn

const client = new GraphQLClient(endpoint);

export async function fetchAPI<T>(
  query: string,
  variables?: Record<string, any>
): Promise<T> {
  const data = await client.request<T>(query, variables);
  return data;
}
