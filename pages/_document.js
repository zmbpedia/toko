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
          <link rel="stylesheet" href="/assets/css/bootstrap.css" />
          <link rel="stylesheet" href="/assets/css/fontawesome.css" />
          <link rel="stylesheet" href="/assets/css/style.css" />
          <link rel="stylesheet" href="/assets/css/plugins.css" />
          <link rel="stylesheet" href="/assets/css/color.css" />
          <link rel="stylesheet" href="/assets/css/responsive.css" />
        </Head>
        <body>
          <Main />
          <NextScript />
          <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
          <script src="/assets/js/bootstrap.min.js"></script>
          <script src="/assets/js/popper.min.js"></script>
          <script src="/assets/js/jqueryCustome.js"></script>
        </body>
      </html>
    );
  }
}