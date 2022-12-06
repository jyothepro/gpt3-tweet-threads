import './styles.css';
import Script from 'next/script';

function App({ Component, pageProps }) {
  return (
    <>
    <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-VTRQPTPQYP"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-VTRQPTPQYP');
        `}
      </Script>
      <Component {...pageProps} />
      </>
  );
}
export default App;
