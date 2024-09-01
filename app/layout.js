import "./globals.scss";



export const metadata = {
  title: "Прототип портфолио",
  description: "Прототип портфолио веб-дизайнера",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={'pageBody'}>{children}</body>
    </html>
  );
}
