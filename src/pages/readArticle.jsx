import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import styled from "styled-components";


import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import INFO from "../data/user";
import myArticles from "../data/articles";


const ReadArticle = () => {
  const navigate = useNavigate();
  let { slug } = useParams();

  const article = myArticles[slug - 1];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [article]);

  const ArticleStyle = styled.div`
    ${article.style}
  `;

  return (
    <>
      <Helmet>
        <title>{`${article.title} | ${INFO.main.title}`}</title>
        <meta name="description" content={article.description} />
        <meta name="keywords" content={article.keywords.join(", ")} />
      </Helmet>
      <NavBar />
      <main className="min-h-screen w-full max-w-4xl mx-auto px-4 py-12 flex flex-col gap-12 bg-white dark:bg-gray-900">
        <header className="flex flex-col items-center gap-4 mb-8">
          <Logo width={46} />
        </header>
        <section className="w-full flex flex-col gap-8">
          <button
            onClick={() => navigate(-1)}
            className="mb-4 self-start flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200 transition-colors"
          >
            <img src="../back-button.png" alt="back" className="w-5 h-5" />
            Go Back
          </button>
          <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">{article.date}</div>
          <h1 className="text-title font-primary font-bold text-gray-900 dark:text-white mb-4">{article.title}</h1>
          <div className="prose dark:prose-invert max-w-none">
            <ArticleStyle>{article.body}</ArticleStyle>
          </div>
        </section>
        <footer className="mt-12">
          <Footer />
        </footer>
      </main>
    </>
  );
};

export default ReadArticle;

