import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faFaceSadTear } from "@fortawesome/free-regular-svg-icons";

import NavBar from "../components/common/navBar";
import Logo from "../components/common/logo";

import INFO from "../data/user";




const Notfound = () => {
  useEffect(() => {
    document.title = `404 | ${INFO.main.title}`;
  }, []);

  return (
    <>
      <NavBar />
      <main className="min-h-screen w-full max-w-4xl mx-auto px-4 py-12 flex flex-col gap-12 items-center justify-center bg-white dark:bg-gray-900">
        <header className="flex flex-col items-center gap-4 mb-8">
          <Logo width={46} />
        </header>
        <section className="w-full flex flex-col items-center gap-6">
          <div className="text-5xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
            Oops! <FontAwesomeIcon icon={faFaceSadTear} />
          </div>
          <div className="text-lg text-gray-700 dark:text-gray-300 text-center">
            We can't seem to find the page you're looking for.<br />
            The requested URL "{window.location.href}" was not found on this server.
          </div>
          <a href="/" className="mt-4 px-6 py-2 rounded-lg bg-primary text-white font-semibold shadow hover:bg-gray-800 transition-colors">
            Go back to the home page
          </a>
        </section>
      </main>
    </>
  );
};

export default Notfound;
