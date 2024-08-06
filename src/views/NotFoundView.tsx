import { TbLocationBroken } from 'react-icons/tb';
import { HiEmojiSad } from 'react-icons/hi';
import { Button } from '@/components';

export const NotFoundView = () => {
  return (
    <section className='flex flex-grow flex-col items-center justify-center gap-8'>
      <h1 className='flex items-center gap-1 text-3xl font-bold'>
        <span>Error 404 (In Dev)</span>
        <HiEmojiSad />
      </h1>
      <div className='flex items-center justify-center gap-4'>
        <TbLocationBroken size={64} />
        <span className='select-none font-bold'>Not Found</span>
      </div>
      <div>
        <Button>Go To Home</Button>
      </div>
    </section>
  );
};
