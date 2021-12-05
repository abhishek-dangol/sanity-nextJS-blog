import { faCarSide } from "@fortawesome/free-solid-svg-icons";
import BlockContent from "@sanity/block-content-to-react";
import HighlightCode from "components/HighlightCode";
import getYouTubeID from "get-youtube-id";
import { urlFor } from "lib/api";
import { Figure } from "react-bootstrap";
import YouTube from 'react-youtube'

const serializers = {
  types: {
    code: ({ node: { language, code, filename } }) => {
      return (
        <HighlightCode language={language}>
          {code}
          <div className="code-filename">{filename}</div>
        </HighlightCode>
      );
    },
    image: ({ node: { asset, alt, position = "center" } }) => {
      return (
        <div className={`blog-image blog-image-${position}`}>
          <img src={urlFor(asset).height(300).fit("max").url()} />
          <div className="image-alt">{alt}</div>
        </div>
      );
    },
    authorReference: ({ node }) => <span>{node.author.name}</span>,
    mainImage: Figure,
    youtube: ({ node }) => {
      const { url } = node
      const id = getYouTubeID(url)
      return (<YouTube videoId={id}/>)
    }
  },
};

const BlogContent = ({ content }) => (
  <BlockContent serializers={serializers} blocks={content} />
);

export default BlogContent;
