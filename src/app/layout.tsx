import ThemeRegistry from '@/components/theme-registry/theme.registry';
import NextAuthWrapper from '@/library/next.auth.wrapper';
import { ToastProvider } from '@/utils/toast';
import { TrackContextProvider } from '@/library/track.wrapper';

const RootLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <html lang="en">
            <body>
                <ThemeRegistry>
                    <NextAuthWrapper>
                        <ToastProvider>
                            <TrackContextProvider>
                                {children}
                            </TrackContextProvider>
                        </ToastProvider>
                    </NextAuthWrapper>
                </ThemeRegistry>
            </body>
        </html>
    );
}
export default RootLayout;