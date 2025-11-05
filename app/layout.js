import Head from "next/head";
import "./globals.scss";
import PlausibleProvider from "next-plausible";
import Script from "next/script";


export const metadata = {
  title: "Прототип портфолио",
  description: "Прототип портфолио веб-дизайнера",
};




export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <PlausibleProvider
          domain="tinydreamcaster.github.io/portfolioPrototype"
          trackOutboundLinks={true}
          trackFileDownloads={true}
          selfHosted={false}
          integrity=""
          scriptProps={{
            src: "https://plausible.io/js/script.js",
            async: true,
            defer: true,
          }}
          enabled={true} // Только в production
        />
      </head>
      {/* <PlausibleProvider domain="tinydreamcaster.github.io/portfolioPrototype"> */}
      <body className={'pageBody'}>{children}</body>

    </html>
  );
}
