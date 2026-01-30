import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import AllProjects from "../components/projects/allProjects";

import INFO from "../data/user";
import SEO from "../data/seo";




const Projects = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const currentSEO = SEO.find((item) => item.page === "projects");

  return (
    <>
      <Helmet>
        <title>{`Projects | ${INFO.main.title}`}</title>
        <meta name="description" content={currentSEO.description} />
        <meta name="keywords" content={currentSEO.keywords.join(", ")} />
      </Helmet>
      <NavBar active="projects" />
      <main className="min-h-screen w-full max-w-4xl mx-auto px-4 py-12 flex flex-col gap-12 bg-white dark:bg-gray-900">
        <header className="flex flex-col items-center gap-4 mb-8">
          <Logo width={46} />
          <h1 className="text-title font-primary font-bold text-gray-900 dark:text-white mt-4">Things I’ve made trying to put my dent in the universe.</h1>
          <p className="text-body-lg text-gray-700 dark:text-gray-300 mb-4">
            I've worked on a variety of projects over the years and I'm proud of the progress I've made. Many of these projects are open-source and available for others to explore and contribute to. If you're interested in any of the projects I've worked on, please feel free to check out the code and suggest any improvements or enhancements you might have in mind. Collaborating with others is a great way to learn and grow, and I'm always open to new ideas and feedback.
          </p>
        </header>
        <section className="w-full flex flex-col gap-8">
          <AllProjects />
        </section>
        <footer className="mt-12">
          <Footer />
        </footer>
      </main>
    </>
  );
};

export default Projects;
