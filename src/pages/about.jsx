import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Socials from "../components/about/socials";
import Experience from "../components/about/experience";

import INFO from "../data/user";
import SEO from "../data/seo";




const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const currentSEO = SEO.find((item) => item.page === "about");

  return (
    <>
      <Helmet>
        <title>{`About | ${INFO.main.title}`}</title>
        <meta name="description" content={currentSEO.description} />
        <meta name="keywords" content={currentSEO.keywords.join(", ")} />
      </Helmet>
      <NavBar active="about" />
      <main className="min-h-screen w-full max-w-4xl mx-auto px-4 py-12 flex flex-col gap-12 bg-white dark:bg-gray-900">
        <section className="flex flex-col md:flex-row gap-8 items-center md:items-start">
          <div className="flex flex-col items-center md:items-start gap-4 flex-1">
            <Logo width={46} />
            <h1 className="text-title font-primary font-bold text-gray-900 dark:text-white mt-4">{INFO.about.title}</h1>
            <p className="text-body-lg text-gray-700 dark:text-gray-300 mb-4">{INFO.about.description}</p>
            <a
              href="/resume.pdf"
              download="Gourav_Kumar_Pandey_Resume.pdf"
              className="inline-flex items-center gap-2 px-5 py-2 rounded-lg bg-primary text-white font-semibold shadow hover:bg-gray-800 transition-colors"
            >
              <FontAwesomeIcon icon={faDownload} className="text-lg" />
              Download My Resume
            </a>
            <div className="hidden md:block mt-6">
              <Socials />
            </div>
          </div>
          <div className="flex flex-col items-center flex-1">
            <img
              src="about.jpg"
              alt="about"
              className="w-48 h-48 object-cover rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 mb-4"
            />
            <div className="md:hidden mt-4">
              <Socials />
            </div>
          </div>
        </section>
        <section className="w-full mt-8">
          <Experience />
        </section>
        <footer className="mt-12">
          <Footer />
        </footer>
      </main>
    </>
  );
};

export default About;
