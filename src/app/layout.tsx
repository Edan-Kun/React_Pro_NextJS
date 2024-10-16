import ThemeRegistry from '@/components/theme-registry/theme.registry';
import NextAuthWrapper from '@/library/next.auth.wrapper';
import { ToastProvider } from '@/utils/toast';

const RootLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <html lang="en">
            <body>
                <ThemeRegistry>
                    <NextAuthWrapper>
                        <ToastProvider>
                            {children}
                        </ToastProvider>
                    </NextAuthWrapper>
                </ThemeRegistry>
            </body>
        </html>
    );
}
export default RootLayout;