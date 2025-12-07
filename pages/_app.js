import '@/styles/globals.css';
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>GH Home Tutors | Premium Home & Online Tuition</title>
        <meta name="description" content="Connect with verified expert tutors for WASSCE, BECE, and specialized subjects in Ghana." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
