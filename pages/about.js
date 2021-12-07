import Head from "next/head";
import PageLayout from "components/PageLayout";

export default function About() {
  return (
    <PageLayout>
      <Head>
        <title>About</title>
      </Head>

      <main className="mx-auto">
        <div class="text-5xl font-extrabold ...">
          <span class="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
            About This Blog
          </span>
        </div>
        <hr />
        <h4 className="shadow-lg p-5" >
          Hello visitor! Thank you for taking the time and interest to read
          this. This is my blog and let me tell you this is not your ordinary
          blog. Most blogs are built or written on third-party platforms
          such as Wordpress, Blogger or Medium etc. But, those things are for people who
          are afraid of the dreaded C-word! As a computer programmer who hates
          paying for stuff that ought to be free (and yes, I know there are some
          free options out there but they suck TBH), I thought why not build
          something from scratch using the latest and the greatest technology
          that everyone is raving about these days. I did some research, a lot
          of research actually, and decided to go with Next JS, a React
          framework (that's right - a framework on top of a framework) as my
          frontend tool of choice and an equally cool headless Content
          Management System, or CMS for short, called Sanity.io for my backend.
          Next JS offers a lot of great features that vanilla React does not such as
          server-side rendering (which leads to better SEO) as well as my
          favorite: file-based routing. On the other hand, Sanity.io makes
          managing content as easy as playing against Manchester United in the
          English Premier League. I hope to post at least one new blog every week
          on topics ranging from books to music, history, self-help, and just
          life in general.
          
          
        </h4>
      </main>
    </PageLayout>
  );
}
