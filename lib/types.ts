// lib/types.ts

// Kiểu dữ liệu cho hình ảnh
export interface ImageNode {
  sourceUrl: string;
  altText: string;
  mediaDetails: {
    width: number;
    height: number;
  };
}

export interface SEO {

  fullHead: string

}

// Kiểu dữ liệu cho trang
export interface Page {
  id: string;
  title: string;
  content: string;
  slug: string;
  featuredImage?: {
    node: ImageNode
  };
  seo: SEO
}

// Kiểu dữ liệu cho kết quả truy vấn GetPageBySlug
export interface GetPageBySlugData {
  page: Page | null;
}

// ... (Thêm các kiểu dữ liệu khác nếu cần)
