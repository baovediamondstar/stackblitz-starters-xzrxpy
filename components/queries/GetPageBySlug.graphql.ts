// components/queries/GetPageBySlug.graphql.ts

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
  page: {
    id: string;
    title: string;
    content: string;
    slug: string;
    featuredImage?: { // Hình ảnh nổi bật có thể không tồn tại
      node: {
        sourceUrl: string;
        altText?: string; // altText có thể không bắt buộc
        mediaDetails: {
          width?: number;
          height?: number;
        };
      };
    };
  } | null; // Cho phép page là null trong trường hợp không tìm thấy trang
}
