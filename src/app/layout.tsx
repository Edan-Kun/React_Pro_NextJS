import ThemeRegistry from '@/components/theme-registry/theme.registry';
import NextAuthWrapper from '@/library/next.auth.wrapper';

const RootLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <html lang="en">
            <body>
                <ThemeRegistry>
                    <NextAuthWrapper>
                        {children}
                    </NextAuthWrapper>
                </ThemeRegistry>
            </body>
        </html>
    );
}
export default RootLayout;