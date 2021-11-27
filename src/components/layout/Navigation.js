import * as React from "react";
import { TerminalIcon } from "@heroicons/react/solid";
import { Link } from "gatsby";

const mockPages = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Shorts",
    link: "/shorts",
  },
  {
    name: "Blog",
    link: "/blogs",
  },
  {
    name: "Projects",
    link: "/projects",
  },
  {
    name: "About",
    link: "/about",
  },
];

const Navigation = () => {
  return (
    <div className="w-full h-10 flex justify-between items-center">
      <Link to="/" className="text-xl font-mono font-bold flex items-center">
        <TerminalIcon className="w-8 h-8 text-green-400 mr-1" /> Kecman
        <span className="text-green-400">.dev</span>{" "}
      </Link>
      <nav>
        <ul class="flex">
          {mockPages.map((link, index) => (
            <li
              className="mr-3 font-mono font-medium hover:text-green-400"
              key={index}
            >
              <Link to={link.link}>
                <span className="text-green-400">0{index}.</span>
                {link.name}
              </Link>
            </li>
          ))}
          {/* <li>Hire me</li> */}
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
