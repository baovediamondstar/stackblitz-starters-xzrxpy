// components/Header.tsx
'use client';

import { Navbar, Dropdown, Button } from 'flowbite-react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <Navbar fluid={true} rounded={true}>
      <Navbar.Brand href="/">
        <img
          src="/images/logo.svg" // Đường dẫn đến logo, đảm bảo logo có trong thư mục public/images
          className="mr-3 h-6 sm:h-9"
          alt="Logo Takeda Shingen"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Takeda Shingen Security
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Button color="purple" className="rounded-full">
          <Link href="/lien-he">Liên hệ ngay</Link>
        </Button>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="/">Trang chủ</Navbar.Link>
        <Navbar.Link href="/gioi-thieu">Giới thiệu</Navbar.Link>
        <Dropdown label="Dịch vụ" arrowIcon={false} inline={true}>
          {/* Thêm các liên kết đến các dịch vụ cụ thể */}
          <Dropdown.Item>
            <Link href="/dich-vu/bao-ve-ca-nhan">Bảo vệ cá nhân</Link>
          </Dropdown.Item>
          <Dropdown.Item>
            <Link href="/dich-vu/bao-ve-su-kien">Bảo vệ sự kiện</Link>
          </Dropdown.Item>
          {/* ...Thêm các dịch vụ khác */}
        </Dropdown>
        <Navbar.Link href="/tin-tuc">Tin tức</Navbar.Link>
        <Navbar.Link href="/tuyen-dung">Tuyển dụng</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
