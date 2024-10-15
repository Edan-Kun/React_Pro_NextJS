import AppFooter from '@/components/footer/app.footer';
import AppHeader from '@/components/header/app.header';

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <AppHeader />
      {children}
      <AppFooter />
    </>
  );
}
export default RootLayout;