import { Navbar } from '../components';
import { Heebo } from '@next/font/google';

const heebo = Heebo({
  weight: '400',
  subsets: ['latin'],
});

import '../styles/globals.css'


const MyApp = ({ Component, pageProps }) => (
  <div className={heebo.className}>
    <Navbar />
    <Component {...pageProps} />
  </div>
);

export default MyApp;

