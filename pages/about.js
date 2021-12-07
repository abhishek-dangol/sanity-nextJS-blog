import Head from "next/head";
import PageLayout from "components/PageLayout";

export default function About() {
  return (
    <PageLayout>
      <Head>
        <title>About</title>
      </Head>

      <main className="mx-auto">
        <h1>About this blog</h1>
        <p>
          Hello visitor! Thank you for taking the time and interest to read this.
          This is my blog and let me tell you this is not your ordinary, run-of-the-mill blog.
          Most blogs are built using third-party platforms such as Wordpress or Medium etc.
          But, those things are for people who are afraid of the dreaded C-word! As a computer programmer
          who hates paying for stuff that ought to be free (and yes, I know
          there are some free options out there but they suck TBH), I thought why not build
          something from scratch using the latest and the greatest technology that everyone is
          raving about these days. I did some research, a lot of research actually, and decided
          to go with Next JS, a React framework (that's right - a
          framework on top of a framework) as my frontend tool of choice and an equally
          cool headless Content Management System, or CMS for short, called Sanity.io for
          my backend. Next JS has a lot of cool features that vanilla React does
          not such as server-side rendering (which leads to better SEO) as well as my favorite:
          file-based routing etc. On the other hand, Sanity.io makes managing content as easy
          as playing against Manchester United in the English Premier League (can you guess which
          team I support? I will give you a hint: 6).
        </p>
      </main>
    </PageLayout>
  );
}
