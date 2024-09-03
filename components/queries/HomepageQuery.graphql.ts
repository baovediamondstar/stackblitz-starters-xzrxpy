// components/queries/HomepageQuery.graphql.ts
import { Page } from '@/lib/types';

export const HOMEPAGE_QUERY = `
  query GetHomepageData {
    page(id: "/", idType: URI) { # Truy vấn trang chủ dựa trên URI
      id
      title
      content
      featuredImage {
        node {
          sourceUrl
          altText
          mediaDetails {
            width
            height
          }
        }
      }
    }
  }
`;

export interface HomepageData {
  page: Page;
}
