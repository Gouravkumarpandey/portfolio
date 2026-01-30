import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Socials from "../components/about/socials";
import ContactForm from "../components/common/contactForm";

import INFO from "../data/user";
import SEO from "../data/seo";




const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const currentSEO = SEO.find((item) => item.page === "contact");

  return (
    <>
      <Helmet>
        <title>{`Contact | ${INFO.main.title}`}</title>
        <meta name="description" content={currentSEO.description} />
        <meta name="keywords" content={currentSEO.keywords.join(", ")} />
      </Helmet>
      <NavBar active="contact" />
      <main className="min-h-screen w-full max-w-4xl mx-auto px-4 py-12 flex flex-col gap-12 bg-white dark:bg-gray-900">
        <header className="flex flex-col items-center gap-4 mb-8">
          <Logo width={46} />
          <h1 className="text-title font-primary font-bold text-gray-900 dark:text-white mt-4">Let's Get in Touch</h1>
          <p className="text-body-lg text-gray-700 dark:text-gray-300 mb-4 text-center">
            Thank you for your interest in getting in touch with me. I welcome your feedback, questions, and suggestions. If you have a specific question or comment, please use the contact form below or email me directly at
            <a href={`mailto:${INFO.main.email}`} className="text-accent-blue underline ml-1">{INFO.main.email}</a>.
            I make an effort to respond to all messages within 24 hours, although it may take me longer during busy periods. You can also connect with me on social media using the links below. Thanks for your interest, and I look forward to hearing from you!
          </p>
        </header>
        <section className="w-full flex flex-col gap-8">
          <div className="w-full flex justify-center">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 max-w-xl w-full"
            >
              <source src="/reach.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="w-full flex flex-col items-center">
            <ContactForm />
          </div>
          <div className="w-full flex flex-col items-center mt-8">
            <Socials />
          </div>
        </section>
        <footer className="mt-12">
          <Footer />
        </footer>
      </main>
    </>
  );
};

export default Contact;
