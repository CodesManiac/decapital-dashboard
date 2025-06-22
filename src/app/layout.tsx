
import "./globals.css";



export const metadata = {
  title: 'Professional Profile Dashboard',
  description: 'DeCapital Assessment',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
     <body className="bg-gray-50 text-gray-900">
        {children}
      </body>
    </html>
  );
}
