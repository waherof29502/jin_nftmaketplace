import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute='class'>
      <div className='dark:bg-nft-dark'>
        <h1>NavBar</h1>
        <Component {...pageProps} />
        <h1>Footer</h1>
      </div>
    </ThemeProvider>
  );
}

export default MyApp;
