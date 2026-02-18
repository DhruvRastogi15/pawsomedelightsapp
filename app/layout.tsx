import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import Toolbar from "@mui/material/Toolbar";
import Navbar from "../components/Navbar"
// "@/components/Navbar";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        
        <Header />
         <Toolbar />
        <AppRouterCacheProvider>
          
          {children}
          <Navbar />
        </AppRouterCacheProvider>
        <Footer />
      </body>
    </html>
  );
}

export const metadata = {
  viewport: 'width=device-width, initial-scale=1, viewport-fit=cover',
};