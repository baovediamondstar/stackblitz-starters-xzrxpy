// components/queries/GetPageBySlug.graphql.ts

import { Page } from "@/lib/types";

export const GET_PAGE_BY_SLUG = `
  query GetPageBySlug($slug: ID!) {
    page(id: $slug, idType: URI) {
      id
      title
      content
      slug
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

export interface GetPageBySlugData {
  page: Page | null; // Cho phép page là null trong trường hợp không tìm thấy trang
}
