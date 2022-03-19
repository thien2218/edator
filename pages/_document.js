import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
   return (
      <Html>
         <Head>
            <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.0/css/line.css"></link>
         </Head>
         <body>
            <Main />
            <NextScript />
            <script src="https://unpkg.com/swiper/swiper-bundle.min.js"></script>
         </body>
      </Html>
   )
}