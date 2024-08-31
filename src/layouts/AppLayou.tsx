import Header from '@/components/header';

interface Props {
  children?: React.ReactNode;
}

export default function AppLayou({ children }: Props) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
