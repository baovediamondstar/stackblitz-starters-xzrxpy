// app/gioi-thieu/page.tsx
import { GetPageBySlugData } from '@/lib/types';
import { GET_PAGE_BY_SLUG } from '@/components/queries/GetPageBySlug.graphql';
import { fetchAPI } from '@/lib/graphql';
import PageContent from '@/components/PageContent';
import Loading from '@/components/Loading';
import Error from '@/components/Error';
import { generateSlug } from '@/utils/slugify';
import { use, useEffect, useState } from 'react';

export default function AboutPage() {
  const [slug, setSlug] = useState<string | null>(null);

  const { data, isLoading, isError } = useSWR<GetPageBySlugData>(
    slug ? [`/gioi-thieu/${slug}`] : null, // Key cho cache SWR
    () => fetchAPI(GET_PAGE_BY_SLUG, { slug }),
    { revalidateOnFocus: false }
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetchAPI(gql`
          query GetAboutPageSlug {
            page(id: "gioi-thieu", idType: URI) {
              slug
            }
          }
        `, {});
        setSlug(result.page.slug);
      } catch (err) {
        console.error('Error fetching about page slug:', err);
        // Xử lý lỗi ở đây, ví dụ: hiển thị thông báo lỗi hoặc chuyển hướng đến trang lỗi
      }
    };

    fetchData();
  }, []);

  if (isLoading) return <Loading />;
  if (isError) return <Error message={isError.message} />;
  if (!data || !data.page) return <Error message="Không tìm thấy trang" />;

  return (
    <Layout>
      <PageContent page={data.page} />
    </Layout>
  );
}