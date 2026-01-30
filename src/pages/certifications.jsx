import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Certificates from "../components/homepage/certificates";

import INFO from "../data/user";
import SEO from "../data/seo";



const Certifications = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const currentSEO = SEO.find((item) => item.page === "certifications") || SEO[0];

    return (
        <>
            <Helmet>
                <title>{`Certifications | ${INFO.main.title}`}</title>
                <meta name="description" content={currentSEO.description} />
                <meta name="keywords" content={currentSEO.keywords.join(", ")} />
            </Helmet>
            <NavBar active="certifications" />
            <main className="min-h-screen w-full max-w-4xl mx-auto px-4 py-12 flex flex-col gap-12 bg-white dark:bg-gray-900">
                <header className="flex flex-col items-center gap-4 mb-8">
                    <Logo width={46} />
                    <h1 className="text-title font-primary font-bold text-gray-900 dark:text-white mt-4">Professional Certifications</h1>
                    <p className="text-body-lg text-gray-700 dark:text-gray-300 mb-4">
                        A collection of my professional certifications and technical credentials that validate my expertise in various technologies and domains. Each certification represents dedicated learning and mastery of industry-standard tools and practices.
                    </p>
                </header>
                <section className="w-full flex flex-col gap-8">
                    <Certificates certificates={INFO.certificates} />
                </section>
                <footer className="mt-12">
                    <Footer />
                </footer>
            </main>
        </>
    );
}

export default Certifications;
