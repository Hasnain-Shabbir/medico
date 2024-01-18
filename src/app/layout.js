import './globals.css';

export const metadata = {
  title: 'Medico Healthcare',
  description: 'Your Journey to Better Health Starts Here',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-background font-satoshi">{children}</body>
    </html>
  );
}
