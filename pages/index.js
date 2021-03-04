import { Row, Button } from "react-bootstrap";
import PageLayout from "components/PageLayout";
import AuthorIntro from "components/AuthorIntro";
import { getPaginatedBlogs } from "lib/api";
import FilteringMenu from "components/FliteringMenu";
import { useState } from "react";
import { useGetBlogsPages } from "actions/pagination";
import PreviewAlert from "components/PreviewAlert";

export default function Home({ blogs, preview }) {
  const [filter, setFilter] = useState({
    view: { list: 0 },
    date: { asc: 0 },
  });

  const { pages, isLoadingMore, isReachingEnd, loadMore } = useGetBlogsPages({
    blogs,
    filter,
  });

  return (
    <PageLayout>
      {preview && <PreviewAlert />}
      <AuthorIntro />
      <FilteringMenu
        filter={filter}
        onChange={(option, value) => {
          setFilter({ ...filter, [option]: value });
        }}
      />
      <hr />
      <Row className="mb-5">{pages}</Row>
      <div style={{ textAlign: "center" }}>
        <Button
          onClick={loadMore}
          disabled={isReachingEnd || isLoadingMore}
          size="lg"
          variant="outline-secondary"
        >
          {isLoadingMore
            ? "..."
            : isReachingEnd
            ? "No More Blogs"
            : "More Blogs"}
        </Button>
      </div>
    </PageLayout>
  );
}

// This function is called during build time
// Provides props to your page
// It will create static page
export async function getStaticProps({ preview = false }) {
  const blogs = await getPaginatedBlogs({ offset: 0, date: "desc" });
  return {
    props: {
      blogs,
    },
  };
}
