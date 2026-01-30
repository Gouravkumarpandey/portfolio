import React from "react";
import { Link } from "react-router-dom";

import DarkModeToggle from "./darkModeToggle";

const NavBar = (props) => {
	const { active } = props;

	       return (
		       <React.Fragment>
			       <div className="m-0 flex justify-center items-center">
				       <nav className="flex justify-center items-center fixed top-lg z-[999] animate-slideDown">
					       <div className="min-w-[400px] h-[44px] px-md bg-bg-primary backdrop-blur-[10px] shadow-md rounded-[50px] border border-border transition-all duration-base ease-smooth hover:shadow-lg hover:border-tertiary max-[768px]:min-w-0 max-[768px]:w-full max-[768px]:px-sm max-[600px]:h-[42px] max-[600px]:px-xs max-[480px]:h-[40px] max-[480px]:px-1 max-[375px]:h-[38px] flex items-center">
						       <ul className="flex justify-around items-center list-none m-0 p-0 h-full gap-sm max-[768px]:gap-[2px] max-[600px]:gap-0">
							<li
								className={`font-medium text-[14px] relative max-[768px]:text-[13px] max-[600px]:text-[12px] max-[480px]:text-[11px] max-[375px]:text-[10px] ${active === "home" ? "active" : ""
									}`}
							>
								<Link
									to="/"
									className={`no-underline px-md py-sm rounded-[20px] transition-all duration-fast ease-smooth inline-block max-[768px]:px-3 max-[768px]:py-[6px] max-[600px]:px-[10px] max-[600px]:py-[5px] max-[480px]:px-2 max-[480px]:py-1 max-[480px]:rounded-[16px] max-[375px]:px-[6px] max-[375px]:py-1 ${active === "home"
											? "text-link bg-hover"
											: "text-secondary hover:text-primary hover:bg-hover"
										}`}
								>
									Home
								</Link>
							</li>
							<li
								className={`font-medium text-[14px] relative max-[768px]:text-[13px] max-[600px]:text-[12px] max-[480px]:text-[11px] max-[375px]:text-[10px] ${active === "about" ? "active" : ""
									}`}
							>
								<Link
									to="/about"
									className={`no-underline px-md py-sm rounded-[20px] transition-all duration-fast ease-smooth inline-block max-[768px]:px-3 max-[768px]:py-[6px] max-[600px]:px-[10px] max-[600px]:py-[5px] max-[480px]:px-2 max-[480px]:py-1 max-[480px]:rounded-[16px] max-[375px]:px-[6px] max-[375px]:py-1 ${active === "about"
											? "text-link bg-hover"
											: "text-secondary hover:text-primary hover:bg-hover"
										}`}
								>
									About
								</Link>
							</li>
							<li
								className={`font-medium text-[14px] relative max-[768px]:text-[13px] max-[600px]:text-[12px] max-[480px]:text-[11px] max-[375px]:text-[10px] ${active === "projects" ? "active" : ""
									}`}
							>
								<Link
									to="/projects"
									className={`no-underline px-md py-sm rounded-[20px] transition-all duration-fast ease-smooth inline-block max-[768px]:px-3 max-[768px]:py-[6px] max-[600px]:px-[10px] max-[600px]:py-[5px] max-[480px]:px-2 max-[480px]:py-1 max-[480px]:rounded-[16px] max-[375px]:px-[6px] max-[375px]:py-1 ${active === "projects"
											? "text-link bg-hover"
											: "text-secondary hover:text-primary hover:bg-hover"
										}`}
								>
									Projects
								</Link>
							</li>
							<li
								className={`font-medium text-[14px] relative max-[768px]:text-[13px] max-[600px]:text-[12px] max-[480px]:text-[11px] max-[375px]:text-[10px] ${active === "certifications" ? "active" : ""
									}`}
							>
								<Link
									to="/certifications"
									className={`no-underline px-md py-sm rounded-[20px] transition-all duration-fast ease-smooth inline-block max-[768px]:px-3 max-[768px]:py-[6px] max-[600px]:px-[10px] max-[600px]:py-[5px] max-[480px]:px-2 max-[480px]:py-1 max-[480px]:rounded-[16px] max-[375px]:px-[6px] max-[375px]:py-1 ${active === "certifications"
											? "text-link bg-hover"
											: "text-secondary hover:text-primary hover:bg-hover"
										}`}
								>
									Certifications
								</Link>
							</li>
							<li
								className={`font-medium text-[14px] relative max-[768px]:text-[13px] max-[600px]:text-[12px] max-[480px]:text-[11px] max-[375px]:text-[10px] ${active === "hackathons" ? "active" : ""
									}`}
							>
								<Link
									to="/hackathons"
									className={`no-underline px-md py-sm rounded-[20px] transition-all duration-fast ease-smooth inline-block max-[768px]:px-3 max-[768px]:py-[6px] max-[600px]:px-[10px] max-[600px]:py-[5px] max-[480px]:px-2 max-[480px]:py-1 max-[480px]:rounded-[16px] max-[375px]:px-[6px] max-[375px]:py-1 ${active === "hackathons"
											? "text-link bg-hover"
											: "text-secondary hover:text-primary hover:bg-hover"
										}`}
								>
									Hackathons
								</Link>
							</li>
							<li
								className={`font-medium text-[14px] relative max-[768px]:text-[13px] max-[600px]:text-[12px] max-[480px]:text-[11px] max-[375px]:text-[10px] ${active === "articles" ? "active" : ""
									}`}
							>
								<Link
									to="/articles"
									className={`no-underline px-md py-sm rounded-[20px] transition-all duration-fast ease-smooth inline-block max-[768px]:px-3 max-[768px]:py-[6px] max-[600px]:px-[10px] max-[600px]:py-[5px] max-[480px]:px-2 max-[480px]:py-1 max-[480px]:rounded-[16px] max-[375px]:px-[6px] max-[375px]:py-1 ${active === "articles"
											? "text-link bg-hover"
											: "text-secondary hover:text-primary hover:bg-hover"
										}`}
								>
									Articles
								</Link>
							</li>
							<li
								className={`font-medium text-[14px] relative max-[768px]:text-[13px] max-[600px]:text-[12px] max-[480px]:text-[11px] max-[375px]:text-[10px] ${active === "contact" ? "active" : ""
									}`}
							>
								<Link
									to="/contact"
									className={`no-underline px-md py-sm rounded-[20px] transition-all duration-fast ease-smooth inline-block max-[768px]:px-3 max-[768px]:py-[6px] max-[600px]:px-[10px] max-[600px]:py-[5px] max-[480px]:px-2 max-[480px]:py-1 max-[480px]:rounded-[16px] max-[375px]:px-[6px] max-[375px]:py-1 ${active === "contact"
											? "text-link bg-hover"
											: "text-secondary hover:text-primary hover:bg-hover"
										}`}
								>
									Contact
								</Link>
							</li>
						</ul>
					</div>
				</nav>
			</div>
			<DarkModeToggle />
		</React.Fragment>
	);
};

export default NavBar;
