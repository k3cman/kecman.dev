import * as React from "react";
import SectionTitle from "../shared/SectionTitle";

const mockProjects = [
  {
    title: "Resume builder",
    description:
      "Easly update and your resume every time you need it. Import it as JSON tree and update whatever you need",
    tags: ["reactjs", "slate", "redux", "firebase"],
  },
  {
    title: "Code snippets",
    descripiton:
      "Share your code snippets with unique URL, collaborate, generate screenshot and more",
    tags: ["angular", "material-components"],
  },
  {
    title: "Budget app",
    descrition:
      "App, that tracks your sms or email notifications about your spending and uses Machine Learning to put the spending in specific category",
    tags: ["flutter", "firebase"],
  },
];

const ProjectSection = () => {
  return (
    <div className="w-full mt-20">
      <SectionTitle title="Latest projects"></SectionTitle>
      <div className="flex flex-col pt-5">
        {mockProjects.map((project, index) => {
          const { title, description, tags } = project;

          return (
            <div
              key={index}
              className="w-2/3 self-start border-l-4 border-green-500 pl-5 mb-5 py-5 cursor-pointer"
            >
              <h3 className="text-3xl font-mono pt-2 text-green-500">
                {title}
              </h3>
              <p className="font-sans text-sm">{description}</p>
              {tags.map((tag) => {
                return <small>{tag}</small>;
              })}
            </div>
          );
        })}
      </div>
      <div className="w-full flex items-center justify-center mt-5">
        <button className="font-mono py-2 px-5 border border-green-500 hover:bg-gray-200">
          {">"} View All_
        </button>
      </div>
    </div>
  );
};

export default ProjectSection;
