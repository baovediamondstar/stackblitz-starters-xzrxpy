// app/gioi-thieu/page.tsx

import PageContent from "@/components/PageContent";
import { GET_PAGE_BY_SLUG, GetPageBySlugData } from "@/components/queries/GetPageBySlug.graphql";
import { fetchAPI } from "@/lib/graphql";
import { notFound } from 'next/navigation';

export default async function PageDetail({ params }: { params: { slug: string } }) {
  const { slug } = params;

  try {

    const data = await fetchAPI<GetPageBySlugData>(GET_PAGE_BY_SLUG, {
      slug, // Hoặc slug tương ứng với trang "Giới thiệu"
    });

    if (!data.page) {
      notFound(); // If page not found, trigger a 404
    }


    return (
      <main className="py-8 px-2 bg-white dark:bg-gray-800">
        {data.page && <PageContent page={data.page} />}
      </main>
    );
  } catch (error) {
    console.error('Error fetching page details:', error);
    return <div>Đã xảy ra lỗi khi tải trang.</div>;
  }
}