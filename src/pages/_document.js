/* eslint-disable @next/next/no-title-in-document-head */
import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>Painting Service Provider</title>
        <meta name="description" content="Your page description" />
        <meta
          name="google-site-verification"
          content="Iu-gnGh1b_-srSJApfqyCK-zPw0PGXBLZEU-Zv0L3q0"
        />
        {/* Other meta tags */}
      </Head>

      <body className="text-black">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
