import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="Craft the perfect elevator pitch for your business idea using our Ai model specifically trained to reference the top 50 successful startups like Airbnb and Uber"
          />
          <meta property="og:site_name" content="roomikh.com" />
          <meta
            property="og:description"
            content="Quickly generate a compelling elevator pitch for your business idea."
          />
          <meta property="og:title" content="Elevator Pitch Generator" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Elevator Pitch Generator" />
          <meta
            name="twitter:description"
            content="Quickly generate a compelling elevator pitch for your business idea."
          />
          <meta
            property="og:image"
            content="https://elevatorpitch.roomikh.com/og-image.png"
          />
          <meta property="twitter:url" content="elevatorpitch.roomikh.com/" />
          <meta property="og:url" content="elevatorpitch.roomikh.com/" />
          <meta
            name="twitter:image"
            content="https://elevatorpitch.roomikh.com/og-image.png"
          />
          <meta name="theme-color" content="#000000" />
          <meta name="author" content="@therealroomio" />
        </Head>
        <body className="bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-gray-100 via-gray-300 to-white">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
