import { IProps } from './types';
import { Footer, Header } from './components';

export const Layout = ({ children }: IProps) => {
  return (
    <div className='from-appbackground to-appaccent flex min-h-[100vh] w-full flex-col justify-between bg-gradient-to-br'>
      <Header />
      {children}
      <Footer />
    </div>
  );
};
