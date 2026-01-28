import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Hackathons from "../components/homepage/hackathons";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/hackathons.css";

const HackathonsPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const currentSEO = SEO.find((item) => item.page === "hackathons") || SEO[0];

    return (
        <React.Fragment>
            <Helmet>
                <title>{`Hackathons | ${INFO.main.title}`}</title>
                <meta name="description" content={currentSEO.description} />
                <meta
                    name="keywords"
                    content={currentSEO.keywords.join(", ")}
                />
            </Helmet>

            <div className="page-content">
                <NavBar active="hackathons" />
                <div className="content-wrapper">
                    <div className="hackathons-logo-container">
                        <div className="hackathons-logo">
                            <Logo width={46} />
                        </div>
                    </div>
                    <div className="hackathons-container">
                        <div className="title hackathons-title">
                            Hackathon Wins & Achievements
                        </div>

                        <div className="subtitle hackathons-subtitle">
                            A showcase of my competitive programming journey, hackathon victories,
                            and collaborative problem-solving experiences. Each achievement represents
                            innovation, teamwork, and the drive to create impactful solutions under pressure.
                        </div>

                        <div className="hackathons-list">
                            <Hackathons hackathons={INFO.hackathons} />
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

export default HackathonsPage;
