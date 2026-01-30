import React from "react";
import { HelmetProvider } from "react-helmet-async";

const Providers = ({ children }) => <HelmetProvider>{children}</HelmetProvider>;

export default Providers;
