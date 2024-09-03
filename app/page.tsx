// app/page.tsx
import { fetchAPI } from '@/lib/graphql';
import { Button } from 'flowbite-react';
import Link from 'next/link';
import { GET_PAGE_BY_SLUG, GetPageBySlugData } from '@/components/queries/GetPageBySlug.graphql';
import Image from 'next/image';
import { imageLoader } from '@/lib/image-loader';

export default async function Home() {
  const data = await fetchAPI<GetPageBySlugData>(GET_PAGE_BY_SLUG, {
    slug: '/',
  });

  return (
    <div>
      {/* Phần banner hoặc hình ảnh */}
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">
            Chào mừng đến với Takeda Shingen Security
          </h1>
          <p className="text-lg mb-6">
            Cung cấp dịch vụ bảo vệ chuyên nghiệp và an toàn
          </p>
          {data.page?.featuredImage && (
            <Image
              loader={imageLoader}
              src={data.page.featuredImage.node.sourceUrl}
              alt="Banner Takeda Shingen Security"
              className="w-full h-64 object-cover rounded-lg shadow-md"
              width={data.page.featuredImage.node.mediaDetails.width}
              height={data.page.featuredImage.node.mediaDetails.height}
            />
          )}
        </div>
      </section>

      {/* Phần giới thiệu ngắn gọn và dịch vụ nổi bật */}
      <section className="container mx-auto py-12">
        {/* {data.page && <PageContent page={data.page} />} */}
        {data.page && <div
          className="prose lg:prose-xl" // Sử dụng class prose từ Tailwind CSS để định dạng nội dung
          dangerouslySetInnerHTML={{ __html: data.page.content }}
        />}
      </section>

      {/* Lời kêu gọi hành động */}
      <section className="bg-blue-500 py-8 text-center text-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-4">Bạn cần bảo vệ?</h2>
          <p className="text-lg mb-6">
            Hãy liên hệ với chúng tôi ngay hôm nay để được tư vấn miễn phí.
          </p>
          <Button color="light">
            <Link href="/lien-he">Liên hệ ngay</Link>
          </Button>
        </div>
      </section>

      {/* Các ưu điểm hoặc lợi ích */}
      <section className="container mx-auto py-12">
        <h2 className="text-3xl font-bold mb-6 text-center">
          Ưu điểm của chúng tôi
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">
              Đội ngũ chuyên nghiệp
            </h3>
            <p>
              Chúng tôi có đội ngũ bảo vệ được đào tạo bài bản, giàu kinh nghiệm
              và tận tâm.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Công nghệ tiên tiến</h3>
            <p>
              Ứng dụng công nghệ hiện đại vào quy trình bảo vệ, đảm bảo an ninh
              tối đa.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Dịch vụ đa dạng</h3>
            <p>
              Cung cấp các giải pháp bảo vệ toàn diện, phù hợp với mọi nhu cầu
              của khách hàng.
            </p>
          </div>
        </div>
      </section>

      {/* Đánh giá hoặc chứng nhận */}
      <section className="container mx-auto py-12">
        <h2 className="text-3xl font-bold mb-6 text-center">
          Khách hàng nói gì về chúng tôi
        </h2>
        {/* Thêm nội dung về đánh giá hoặc chứng nhận tại đây */}
      </section>
    </div>
  );
}
