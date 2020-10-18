import Document, { Head, Main, NextScript } from "next/document";
export default class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css?family=Playfair+Display:400,700%7CRoboto:300,400,500,700,900&display=swap"
            rel="stylesheet"
          />
          <meta
            name="author"
            content="Rama Hardian Sidik | ramahardiansidik@gmail.com"
          />
          <meta name="theme-color" content="#000000" />
          <link
            rel="shortcut icon"
            href="/assets/img/favicon.ico"
            type="image/x-icon"
          />
          <meta name="google-site-verification" content="EAEd8ZTBqNcUCZaCZwzRaQB0lLPcbc8NAeWvo0ha3dA" />
          <link rel="stylesheet" href="/assets/css/vendor.css" />
           <link rel="stylesheet" href="/assets/css/style.css" />
          <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
        </Head>
        <body>
          <Main />
          <NextScript />
          <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
          <script src="/assets/js/vendor.js"></script>

        </body>
      </html>
    );
  }
}