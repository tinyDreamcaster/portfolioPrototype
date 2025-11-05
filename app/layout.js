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
        <Script
          strategy="beforeInteractive"
          src="https://plausible.io/js/pa-73z_nk2laaK__IJfmDLxu.js"
        />
        <Script
          id="plausible-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.plausible = window.plausible || function() { 
                (window.plausible.q = window.plausible.q || []).push(arguments) 
              };
              window.plausible.init = window.plausible.init || function(i) { 
                window.plausible.o = i || {}; 
              };
              window.plausible.init();
            `,
          }}
        />

      </head>
      <body className={'pageBody'}>{children}</body>
    </html>
  );
}
