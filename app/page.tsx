'use client';
interface Props {
  children: React.ReactNode;
}

const Page = ({ children }: Props) => {
  return (
    <div className='flex'>
      Home Page
    </div>
  );
};

export default Page;
