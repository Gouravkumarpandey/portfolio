import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Article from "../components/articles/article";

import INFO from "../data/user";
import SEO from "../data/seo";
import myArticles from "../data/articles";




const Articles = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const currentSEO = SEO.find((item) => item.page === "articles");

  return (
    <>
      <Helmet>
        <title>{`Articles | ${INFO.main.title}`}</title>
        <meta name="description" content={currentSEO.description} />
        <meta name="keywords" content={currentSEO.keywords.join(", ")} />
      </Helmet>
      <NavBar active="articles" />
      <main className="min-h-screen w-full max-w-4xl mx-auto px-4 py-12 flex flex-col gap-12 bg-white dark:bg-gray-900">
        <header className="flex flex-col items-center gap-4 mb-8">
          <Logo width={46} />
          <h1 className="text-title font-primary font-bold text-gray-900 dark:text-white mt-4">{INFO.articles.title}</h1>
          <p className="text-body-lg text-gray-700 dark:text-gray-300 mb-4">{INFO.articles.description}</p>
        </header>
        <section className="w-full flex flex-col gap-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {myArticles.map((article, index) => (
              <Article
                key={(index + 1).toString()}
                date={article().date}
                title={article().title}
                description={article().description}
                link={"/article/" + (index + 1)}
              />
            ))}
          </div>
        </section>
        <footer className="mt-12">
          <Footer />
        </footer>
      </main>
    </>
  );
};

export default Articles;
