import "../source/design.css";
import Header from "../components/header";

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <div class="main">
        <Component {...pageProps} />
      </div>
    </>
  );
}
