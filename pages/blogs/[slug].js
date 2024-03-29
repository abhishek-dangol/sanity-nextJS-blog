import PageLayout from "components/PageLayout";
import BlogHeader from "components/BlogHeader";
import ErrorPage from "next/error";
import { getBlogBySlug, getAllBlogs } from "lib/api";
import { Row, Col } from "react-bootstrap";
import { urlFor } from "lib/api";
import moment from "moment";
import { useRouter } from "next/router";
import BlogContent from "components/BlogContent";
import PreviewAlert from "components/PreviewAlert";
import Comments from "components/comments";
import Form from "components/form";
import { LikeButton, ClapButton } from "@lyket/react";

const BlogDetail = ({ blog, preview }) => {
  const router = useRouter();

  if (!router.isFallback && !blog?.slug) {
    return <ErrorPage statusCode="404" />;
  }

  if (router.isFallback) {
    return <PageLayout className="blog-detail-page">Loading...</PageLayout>;
  }

  return (
    <PageLayout className="blog-detail-page">
      <Row>
        <Col md={{ span: 10, offset: 1 }}>
          {preview && <PreviewAlert />}
          <BlogHeader
            title={blog.title}
            subtitle={blog.subtitle}
            coverImage={urlFor(blog.coverImage).height(600).url()}
            author={blog.author}
            date={moment(blog.date).format("LL")}
          />
          <hr />
          {blog.content && <BlogContent content={blog.content} />}
          <hr />
          <LikeButton
            id="vanillaLikeBtn"
            component={LikeButton.templates.Twitter}
          />{" "}
          <ClapButton
            id="vanillaClapBtn"
            component={ClapButton.templates.Heart}
          />
          <Comments comments={blog?.comments} />
          <Form _id={blog._id} />
        </Col>
      </Row>
    </PageLayout>
  );
};

export async function getStaticProps({ params, preview = false, previewData }) {
  const blog = await getBlogBySlug(params.slug, preview);
  return {
    props: { blog, preview },
    revalidate: 1,
  };
}

export async function getStaticPaths() {
  const blogs = await getAllBlogs();
  const paths = blogs?.map((b) => ({ params: { slug: b.slug } }));
  return {
    paths,
    fallback: true,
  };
}

export default BlogDetail;
