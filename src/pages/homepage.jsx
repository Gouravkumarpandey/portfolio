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
        {/* Hero Section - Notion style */}
        <section className="flex flex-col items-center gap-6">
          <img
            src="/homepage-hero-animation.png"
            alt="Notion style hero faces"
            style={{ width: '700px', maxWidth: '100%', marginBottom: '1.5rem' }}
          />
          <header className="w-full flex flex-col items-center text-center gap-2">
            <h1 className="text-[40px] font-semibold leading-[1.2] tracking-tight text-[#111827] font-sans" style={{letterSpacing: '-0.01em', fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif'}}>Gourav Kumar Pandey <br /> Full-stack developer</h1>
            <p className="text-[16px] font-normal leading-[1.7] text-[#374151] max-w-3xl mt-4 font-sans" style={{fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif'}}>I am a Computer Science student pursuing my B.Tech degree from Arka Jain University, currently in my 7th semester, batch 2022–2026, with expertise in full-stack development. I have experience building scalable web applications using React, Node.js, and modern frameworks. My skills include JavaScript, Java, C++, React, Node.js, Spring Boot, MongoDB, and MySQL. I am passionate about creating secure, innovative solutions and continuously learning emerging technologies to solve complex problems.</p>
          </header>
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


