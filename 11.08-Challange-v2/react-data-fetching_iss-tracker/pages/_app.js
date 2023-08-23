import GlobalStyle from "../styles";

export default function App({ Component, pageProps }) {
  const fetcher = (...args) => fetch(...args).then(res => res.json())
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}
