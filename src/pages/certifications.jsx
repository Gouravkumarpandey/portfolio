import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Certificates from "../components/homepage/certificates";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/certifications.css";

const Certifications = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const currentSEO = SEO.find((item) => item.page === "certifications") || SEO[0];

    return (
        <React.Fragment>
            <Helmet>
                <title>{`Certifications | ${INFO.main.title}`}</title>
                <meta name="description" content={currentSEO.description} />
                <meta
                    name="keywords"
                    content={currentSEO.keywords.join(", ")}
                />
            </Helmet>

            <div className="page-content">
                <NavBar active="certifications" />
                <div className="content-wrapper">
                    <div className="certifications-logo-container">
                        <div className="certifications-logo">
                            <Logo width={46} />
                        </div>
                    </div>
                    <div className="certifications-container">
                        <div className="title certifications-title">
                            Professional Certifications
                        </div>

                        <div className="subtitle certifications-subtitle">
                            A collection of my professional certifications and technical credentials
                            that validate my expertise in various technologies and domains. Each certification
                            represents dedicated learning and mastery of industry-standard tools and practices.
                        </div>

                        <div className="certifications-list">
                            <Certificates certificates={INFO.certificates} />
                        </div>
                    </div>
                    <div className="page-footer">
                        <Footer />
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Certifications;
