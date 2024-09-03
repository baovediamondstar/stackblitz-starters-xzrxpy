import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">404 - Không tìm thấy trang</h1>
      <p className="text-lg mb-6">Rất tiếc, trang bạn tìm kiếm không tồn tại.</p>
      <Link href="/" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Quay về trang chủ
      </Link>
    </div>
  );
}