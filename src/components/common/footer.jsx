import React from "react";
import { Link } from "react-router-dom";

import INFO from "../../data/user";


const Footer = () => {
	const year = new Date().getFullYear();
	const owner = INFO?.main?.name || "Portfolio";
	const socials = INFO?.socials || {};

	return (
		<footer className="flex flex-col md:flex-row items-center justify-between pt-8 mt-16 pb-8 border-t border-gray-200 dark:border-gray-700 w-full" role="contentinfo">
			<nav aria-label="Footer navigation" className="w-full md:w-1/2 flex justify-center md:justify-start mb-4 md:mb-0">
				<ul className="flex gap-8 list-none items-center m-0 p-0">
					<li className="font-medium text-sm"><Link className="text-gray-500 hover:text-blue-600 transition-colors duration-150" to="/">Home</Link></li>
					<li className="font-medium text-sm"><Link className="text-gray-500 hover:text-blue-600 transition-colors duration-150" to="/about">About</Link></li>
					<li className="font-medium text-sm"><Link className="text-gray-500 hover:text-blue-600 transition-colors duration-150" to="/projects">Projects</Link></li>
					<li className="font-medium text-sm"><Link className="text-gray-500 hover:text-blue-600 transition-colors duration-150" to="/articles">Articles</Link></li>
					<li className="font-medium text-sm"><Link className="text-gray-500 hover:text-blue-600 transition-colors duration-150" to="/contact">Contact</Link></li>
				</ul>
			</nav>

			<div className="w-full md:w-1/2 flex flex-col md:items-end items-center">
				<div className="flex gap-4 mb-2">
					{socials.github && (
						<a
							href={socials.github}
							target="_blank"
							rel="noopener noreferrer"
							aria-label="GitHub"
							className="text-gray-500 hover:text-blue-600 transition-colors duration-150"
						>
							GitHub
						</a>
					)}
					{socials.linkedin && (
						<a
							href={socials.linkedin}
							target="_blank"
							rel="noopener noreferrer"
							aria-label="LinkedIn"
							className="text-gray-500 hover:text-blue-600 transition-colors duration-150"
						>
							LinkedIn
						</a>
					)}
					{socials.twitter && (
						<a
							href={socials.twitter}
							target="_blank"
							rel="noopener noreferrer"
							aria-label="Twitter"
							className="text-gray-500 hover:text-blue-600 transition-colors duration-150"
						>
							X
						</a>
					)}
				</div>

				<div className="text-xs text-gray-400">
					&copy; {year} {owner}. All Rights Reserved.
				</div>
			</div>
		</footer>
	);
};

export default Footer;
