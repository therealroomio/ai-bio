import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="Generate an elevator pitch in seconds."
          />
          <meta property="og:site_name" content="roomikh.com" />
          <meta
            property="og:description"
            content="Generate an elevator pitch in seconds."
          />
          <meta property="og:title" content="Elevator Pitch Generator" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Elevator Pitch Generator" />
          <meta
            name="twitter:description"
            content="Generate an elevator pitch in seconds."
          />
          <meta
            property="og:image"
            content="https://elevatorpitch.roomikh.com/og-image.png"
          />
          <meta
            name="twitter:image"
            content="https://elevatorpitch.roomikh.com/og-image.png"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
