import { Container } from "react-bootstrap";
import Navbar from "./Navbar";
import Head from "next/head";
import { useTheme } from "providers/ThemeProvider";

export default function PageLayout({ children, className }) {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={theme.type}>
      <Head>
       <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond&display=swap" rel="stylesheet"></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Redressed&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <Container>
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        <div className={`page-wrapper ${className}`}>{children}</div>
        <footer className="page-footer">
          <div>
            <a
              target="_blank"
              href="https://www.facebook.com/jainepaljaiktm/"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
            {" | "}
            <a
              target="_blank"
              href="https://www.instagram.com/abhishek_dangol/"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
            {" | "}
            <a
              target="_blank"
              href="https://twitter.com/abhishek_dangol"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
          </div>
        </footer>
      </Container>
      <style jsx global>
        {`
          html,
          body {
            background: ${theme.background};
            color: ${theme.fontColor};
            transition: color 0.2s ease-out 0s, background 0.2s ease-out 0s;
          }
        `}
      </style>
    </div>
  );
}
