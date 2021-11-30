import * as React from "react";

const ButtonComponent = ({ label }) => {
  return (
    <button className="font-mono py-2 px-5 hover:bg-gray-200 rounded-md hover:text-green-500 transition-all duration-500">
      {">"} {label}_
    </button>
  );
};

export default ButtonComponent;
