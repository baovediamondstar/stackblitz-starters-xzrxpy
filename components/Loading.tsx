import { Spinner } from 'flowbite-react';

const Loading: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <Spinner aria-label="Loading..." size="xl" />
    </div>
  );
};

export default Loading;
