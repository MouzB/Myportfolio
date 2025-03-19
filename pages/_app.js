import "@/styles/globals.css";
import { PortfolioProvider } from "../Context/PortfolioContext";

export default function App({ Component, pageProps }) {
  return (
    <PortfolioProvider>
      <Component {...pageProps} />
    </PortfolioProvider>
  );
}

