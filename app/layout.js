import Head from "next/head";
import "./globals.scss";



export const metadata = {
  title: "Прототип портфолио",
  description: "Прототип портфолио веб-дизайнера",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>

        <meta
          httpEquiv="Content-Security-Policy"
          content="default-src 'self' *.plausible.io"
        />
        <script
          defer
          data-domain="tinydreamcaster.github.io/portfolioPrototype"
          src="https://plausible.io/js/script.js"
        />
      </head>
      <body className={'pageBody'}>{children}</body>
    </html>
  );
}
