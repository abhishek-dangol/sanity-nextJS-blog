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
  return (
    <Navbar
      variant={theme.type}
      className="fj-navbar fj-nav-base"
      bg="transparent"
      expand="lg"
    >
      <Navbar.Brand className="fj-navbar-brand">
        <Link href="/">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {
                scale: 0.8,
                opacity: 0,
              },
              visible: {
                scale: 1,
                opacity: 1,
                transition: {
                  delay: 0.4,
                },
              },
            }}
          >
            <a className="home-title-font" style={{ color: theme.fontColor }}>
              Abhishek Dangol's Blogs
            </a>
          </motion.div>
        </Link>
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
