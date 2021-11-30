import { Link } from "gatsby";
import * as React from "react";

const ButtonOutlinedComponent = ({ label, link }) => {
  return (
    <Link to={link}>
      <button className="font-mono py-1 px-5 hover:bg-gray-200 rounded-md border-gray-400 border hover:text-green-500 hover:border-green-500 transition-all duration-500">
        {">"} {label}_
      </button>
    </Link>
  );
};

export default ButtonOutlinedComponent;
