import { Page } from '@/lib/types';

interface PageContentProps {
  page: Page;
}

export default function PageContent({ page }: PageContentProps) {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">{page.title}</h1>{' '}
      {/* Thêm class cho tiêu đề */}
      {page.featuredImage && (
        <img
          src={page.featuredImage.sourceUrl}
          alt={page.featuredImage.altText || page.title}
          className="mb-4 w-full max-h-[400px] object-cover rounded-lg shadow-md" // Giới hạn chiều cao tối đa và thêm class
        />
      )}
      <div
        className="prose lg:prose-xl" // Sử dụng class prose từ Tailwind CSS để định dạng nội dung
        dangerouslySetInnerHTML={{ __html: page.content }}
      />
    </div>
  );
}
