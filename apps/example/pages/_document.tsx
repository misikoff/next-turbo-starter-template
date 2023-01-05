import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang='en' className='h-full'>
        <Head>
          <meta name='application-name' content='' />
          <meta name='apple-mobile-web-app-capable' content='yes' />
          <meta
            name='apple-mobile-web-app-status-bar-style'
            content='default'
          />
          <meta name='apple-mobile-web-app-title' content='' />
          <meta name='description' content='' />
          <meta name='format-detection' content='telephone=no' />
          <meta name='mobile-web-app-capable' content='yes' />

          <meta name='theme-color' content='#ffffff' />

          <link rel='apple-touch-icon' href='/icons-auto/apple-icon-180.png' />
          <link
            rel='apple-touch-icon'
            sizes='152x152'
            href='/icons/touch-icon-ipad.png'
          />
          <link
            rel='apple-touch-icon'
            sizes='180x180'
            href='/icons/touch-icon-iphone-retina.png'
          />
          <link
            rel='apple-touch-icon'
            sizes='167x167'
            href='/icons/touch-icon-ipad-retina.png'
          />

          <link
            rel='icon'
            type='image/png'
            sizes='32x32'
            href='/icons/favicon-32x32.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='16x16'
            href='/icons/favicon-16x16.png'
          />
          <link rel='manifest' href='/manifest.json' />
          <link
            rel='mask-icon'
            href='/icons-auto/manifest-icon-192.maskable.png'
          />
          <link rel='icon' href='/favicon.ico' />

          <meta name='twitter:card' content='' />
          <meta name='twitter:url' content='' />
          <meta name='twitter:title' content='' />
          <meta name='twitter:description' content='' />
          <meta name='twitter:image' content='' />
          <meta name='twitter:creator' content='' />
          <meta property='og:type' content='website' key='og:type' />
          <meta property='og:title' content='' key='og:title' />
          <meta property='og:description' content='' key='og:description' />
          <meta property='og:site_name' content='' />
          <meta property='og:url' content='' key='og:url' />
          <meta property='og:image' content='' key='og:image' />
        </Head>

        <body className='h-full'>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
