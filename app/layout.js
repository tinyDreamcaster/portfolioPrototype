import Head from "next/head";
import "./globals.scss";
import PlausibleProvider from "next-plausible";



export const metadata = {
  title: "Прототип портфолио",
  description: "Прототип портфолио веб-дизайнера",
};

init({
  domain: 'tinydreamcaster.github.io/portfolioPrototype'
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <PlausibleProvider domain="tinydreamcaster.github.io/portfolioPrototype">
        <body className={'pageBody'}>{children}</body>
      </PlausibleProvider>
    </html>
  );
}
