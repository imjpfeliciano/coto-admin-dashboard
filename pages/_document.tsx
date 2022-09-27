import { Html, Head, Main, NextScript } from "next/document";

const Document = () => (
  <Html>
    <Head>
      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
      />
      <link
        href="http://fonts.googleapis.com/css?family=Roboto,Montserrat"
        rel="stylesheet"
        type="text/css"
      />
    </Head>
    <body>
      <Main />
      <NextScript />
      <div className="root-modal"></div>
    </body>
  </Html>
);

export default Document;
