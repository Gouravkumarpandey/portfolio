import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";

import { faMailBulk } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faGithub,
	faStackOverflow,
	faInstagram,
} from "@fortawesome/free-brands-svg-icons";


import Footer from "../components/common/footer";
import NavBar from "../components/common/navBar";

import Works from "../components/homepage/works";
import Skills from "../components/homepage/skills";

import INFO from "../data/user";
import SEO from "../data/seo";



import Providers from "../Providers";


const Homepage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const currentSEO = SEO.find((item) => item.page === "home");

  return (
    <Providers>
      <Helmet>
        <title>{INFO.main.title}</title>
        <meta name="description" content={currentSEO.description} />
        <meta name="keywords" content={currentSEO.keywords.join(", ")} />
      </Helmet>
      <NavBar active="home" />
      <main className="min-h-screen w-full max-w-4xl mx-auto px-4 py-12 flex flex-col gap-12 bg-white">
        {/* Hero Section */}
        <section className="flex flex-col items-center gap-6">
          <figure className="w-full flex justify-center">
            <img
              src="homepage-hero-animation-lf.png"
              alt="hero animation"
              className="w-full max-w-2xl"
            />
          </figure>
          <header className="w-full flex flex-col items-center text-center gap-2">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 mb-2">
              {INFO.homepage.title}
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl">
              {INFO.homepage.description}
            </p>
          </header>
          {/* Social Links */}
          <nav className="flex flex-row gap-4 justify-center mt-4" aria-label="Social Links">
            {INFO.socials.twitter && (
              <a href={INFO.socials.twitter} target="_blank" rel="noreferrer" className="hover:text-blue-500 transition-colors">
                <svg width="24" height="24" viewBox="0 0 300 300" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="homepage-social-icon">
                  <path d="M178.57 127.15 290.27 0h-26.46l-97.03 110.38L89.34 0H0l117.13 166.93L0 300.25h26.46l102.4-116.59 81.8 116.59h89.34M36.01 19.54H76.66l187.13 262.13h-40.66" />
                </svg>
              </a>
            )}
            <a href={INFO.socials.github} target="_blank" rel="noreferrer" className="hover:text-gray-800 transition-colors">
              <FontAwesomeIcon icon={faGithub} className="homepage-social-icon text-2xl" />
            </a>
            {INFO.socials.stackoverflow && (
              <a href={INFO.socials.stackoverflow} target="_blank" rel="noreferrer" className="hover:text-orange-500 transition-colors">
                <FontAwesomeIcon icon={faStackOverflow} className="homepage-social-icon text-2xl" />
              </a>
            )}
            {INFO.socials.instagram && (
              <a href={INFO.socials.instagram} target="_blank" rel="noreferrer" className="hover:text-pink-500 transition-colors">
                <FontAwesomeIcon icon={faInstagram} className="homepage-social-icon text-2xl" />
              </a>
            )}
            <a href={`mailto:${INFO.main.email}`} target="_blank" rel="noreferrer" className="hover:text-green-600 transition-colors">
              <FontAwesomeIcon icon={faMailBulk} className="homepage-social-icon text-2xl" />
            </a>
          </nav>
        </section>
        {/* Skills Section */}
        <section className="w-full">
          <Skills />
        </section>
        {/* Works Section */}
        <section className="w-full">
          <Works />
        </section>
        <footer className="mt-12">
          <Footer />
        </footer>
      </main>
    </Providers>
  );
};

export default Homepage;


