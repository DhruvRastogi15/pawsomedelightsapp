import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <AppRouterCacheProvider>
          {children}
        </AppRouterCacheProvider>
        <Footer />
      </body>
    </html>
  );
}
