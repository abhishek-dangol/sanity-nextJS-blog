import { Navbar, Nav } from "react-bootstrap";
import Link from "next/link";
import ThemeToggle from "components/ThemeToggle";
import NProgress from "nprogress";
import Router from "next/router";
import { motion } from "framer-motion";

Router.onRouteChangeStart = (url) => NProgress.start();
Router.onRouteChangeComplete = (url) => NProgress.done();
Router.onRouteChangeError = (url) => NProgress.done();

const BlogNavbar = ({ theme, toggleTheme }) => {
  const title = "Abhishek Dangol's Blogs";
  const sentence = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        staggerChildren: 0.08,
      },
    },
  };
  const letter = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };
  return (
    <Navbar
      variant={theme.type}
      className="fj-navbar fj-nav-base"
      bg="transparent"
      expand="lg"
    >
      <Navbar.Brand className="fj-navbar-brand">
        <motion.div variants={sentence} initial="hidden" animate="visible">
          {" "}
          <Link href="/">
            <a className="home-title-font" style={{ color: theme.fontColor }}>
              {title.split("").map((char, index) => {
                return (
                  <motion.span key={char + "-" + index} variants={letter}>
                    {char}
                  </motion.span>
                );
              })}
            </a>
          </Link>
        </motion.div>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          {/* <div></div> */}
          <ThemeToggle onChange={toggleTheme} />
          <Nav.Link
            as={() => (
              <Link href="/about">
                <a className="fj-navbar-item fj-navbar-link">About</a>
              </Link>
            )}
          />
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default BlogNavbar;
