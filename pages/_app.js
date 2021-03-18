import "styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "highlight.js/styles/darcula.css";
import "styles/index.scss";
import { library, config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import {
  faSun,
  faMoon,
  faBorderAll,
  faList,
  faSortNumericDown,
  faSortNumericUp,
} from "@fortawesome/free-solid-svg-icons";
import ThemeProvider from "providers/ThemeProvider";
import "react-toggle/style.css";
import "../styles/globals.css";

config.autoAddCss = false;
library.add(
  faList,
  faBorderAll,
  faSortNumericUp,
  faSortNumericDown,
  faSun,
  faMoon
);

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"
      />
      <Component {...pageProps} />;
    </ThemeProvider>
  );
}

export default MyApp;
