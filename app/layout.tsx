import '@/app/ui/global.css'; // Import your global styles
import { inter } from './ui/fonts'; // Import your custom font
import Footer from './Components/footer/Footer';
import NavBar from './Components/nav/NavBar';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        {children}
        <Footer />
        
      </body>
    </html>
  );
}