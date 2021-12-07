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
import { Provider } from '@lyket/react';

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
    <Provider apiKey="pt_608277271e24a6d1a014320d71a717">
      <ThemeProvider>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"
        />
        <Component {...pageProps} />;
      </ThemeProvider>
    </Provider>
  );
}

export default MyApp;
