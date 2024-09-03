// components/Footer.tsx
import { Footer } from 'flowbite-react';
import {
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsGithub,
  BsDribbble,
} from 'react-icons/bs'; // Import các biểu tượng từ react-icons

const MyFooter: React.FC = () => {
  return (
    <Footer container={true}>
      <div className="w-full">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div>
            <Footer.Brand
              href="/"
              src="/images/logo.svg"
              alt="Takeda Shingen Security Logo"
              name="Takeda Shingen Security"
            />
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="Về chúng tôi" />
              <Footer.LinkGroup col={true}>
                <Footer.Link href="/gioi-thieu">Giới thiệu</Footer.Link>
                <Footer.Link href="/dich-vu">Dịch vụ</Footer.Link>
                <Footer.Link href="/tin-tuc">Tin tức</Footer.Link>
                <Footer.Link href="/tuyen-dung">Tuyển dụng</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Theo dõi" />
              <Footer.LinkGroup col={true}>
                {/* Thêm các liên kết mạng xã hội của bạn */}
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Liên hệ" />
              <Footer.LinkGroup col={true}>
                <Footer.Link href="#">
                  <p>Địa chỉ: 123 Đường ABC, Quận XYZ, Thành phố ...</p>
                </Footer.Link>
                <Footer.Link href="#">
                  <p>Email: contact@example.com</p>
                </Footer.Link>
                <Footer.Link href="#">
                  <p>Điện thoại: 0123 456 789</p>
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright href="#" by="Takeda Shingen™" year={2023} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon href="#" icon={BsFacebook} />
            <Footer.Icon href="#" icon={BsInstagram} />
            <Footer.Icon href="#" icon={BsTwitter} />
            {/* ...Thêm các biểu tượng mạng xã hội khác */}
          </div>
        </div>
      </div>
    </Footer>
  );
};

export default MyFooter;
