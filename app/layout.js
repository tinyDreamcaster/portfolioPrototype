import Head from "next/head";
import "./globals.scss";



export const metadata = {
  title: "Прототип портфолио",
  description: "Прототип портфолио веб-дизайнера",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <script defer data-domain="tinydreamcaster.github.io/portfolioprototype" src="https://plausible.io/js/script.js"></script>
      </Head>
      <body className={'pageBody'}>{children}</body>
    </html>
  );
}
