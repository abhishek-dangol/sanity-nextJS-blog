import highlight from "highlight.js";

import { createRef, useEffect } from "react";
import { findDOMNode } from "react-dom";

const HighlightCode = ({ children, language }) => {
  const code = createRef();

  useEffect(() => {
    highlight.highlightBlock(findDOMNode(code.current));
  }, []);

  return (
    <prep>
      <code ref={code} className={language}>
        {children}
      </code>
    </prep>
  );
};

export default HighlightCode;
