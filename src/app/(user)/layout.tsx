import AppFooter from '@/components/footer/app.footer';
import AppHeader from '@/components/header/app.header';
import ThemeRegistry from '@/components/theme-registry/theme.registry';
import NextAuthWrapper from '@/library/next.auth.wrapper';

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry>
          <NextAuthWrapper>
            <AppHeader />
            {children}
            <AppFooter />
          </NextAuthWrapper>
        </ThemeRegistry>
      </body>
    </html>
  );
}
export default RootLayout;