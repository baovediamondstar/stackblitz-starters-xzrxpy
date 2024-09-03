import { Alert } from 'flowbite-react';

interface ErrorProps {
  message: string;
}

const Error: React.FC<ErrorProps> = ({ message }) => {
  return (
    <div className="container mx-auto p-4">
      {' '}
      {/* Thêm container và padding */}
      <Alert color="failure">
        <span>
          <span className="font-medium">Lỗi:</span> {message}
        </span>
      </Alert>
    </div>
  );
};

export default Error;
