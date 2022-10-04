import Head from 'next/head';
import Navigator from '../components/nav/navigator';
import Menu from '../components/nav/menu';

import '../styles/globals.css'
function MyApp({ Component, pageProps }) {
  return( 
    <>
      <Head>
        <title>Sv3rige - Raw meat</title>
        <link href="http://fonts.cdnfonts.com/css/gotham-extra-light" rel="stylesheet"/>
        <link href="http://fonts.cdnfonts.com/css/gotham-narrow-bold" rel="stylesheet"/>
      </Head>
        <Navigator>
          <Menu></Menu>
        </Navigator>
        <Component {...pageProps} />
    </>
  );
}

export default MyApp
