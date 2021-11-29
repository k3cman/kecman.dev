import * as React from "react";
import ContactPlaceholder from "./ContactPlaceholder";
import Navigation from "./Navigation";
import SEO from "./Seo";

const Layot = (props) => {
  return (
    <div className="page-wrapper bg-gray-100 p-5">
      <SEO />
      <ContactPlaceholder />
      <Navigation />
      <div className="max-w-5xl mx-auto">{props.children}</div>
    </div>
  );
};

export default Layot;
