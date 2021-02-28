import "styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "highlight.js/styles/darcula.css";
import "styles/index.scss";
import { library, config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { faBorderAll, faList } from "@fortawesome/free-solid-svg-icons";

config.autoAddCss = false;
library.add(faList, faBorderAll);

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
