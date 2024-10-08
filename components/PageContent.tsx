import { imageLoader } from '@/lib/image-loader';
import { Page } from '@/lib/types';
import Image from 'next/image';
import parse from "html-react-parser";

interface PageContentProps {
  page: Page;
}

export default function PageContent({ page }: PageContentProps) {
  return (
    <div>
      {parse(page.seo.fullHead)}
      <h1 className="text-3xl font-bold mb-4">{page.title}</h1>{' '}
      {/* Thêm class cho tiêu đề */}
      {page.featuredImage && (
        <Image
          loader={imageLoader}
          src={page.featuredImage.node.sourceUrl}
          alt={page.featuredImage.node.altText || page.title}
          className="mb-4 w-full max-h-[400px] object-cover rounded-lg shadow-md" // Giới hạn chiều cao tối đa và thêm class
          width={page.featuredImage.node.mediaDetails.width}
          height={page.featuredImage.node.mediaDetails.height}
        />
      )}
      <div
        className="prose lg:prose-xl" // Sử dụng class prose từ Tailwind CSS để định dạng nội dung
        dangerouslySetInnerHTML={{ __html: page.content }}
      />
    </div>
  );
}
