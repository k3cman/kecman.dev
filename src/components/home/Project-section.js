import { graphql, Link, useStaticQuery } from "gatsby";
import * as React from "react";
import ButtonComponent from "../shared/Button";
import ButtonOutlinedComponent from "../shared/ButtonOutlined";
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
  const queryData = useStaticQuery(graphql`
    query projectHome {
      allMdx(limit: 6, filter: { frontmatter: { type: { eq: "project" } } }) {
        edges {
          node {
            excerpt
            slug
            frontmatter {
              title
              date
            }
          }
        }
      }
    }
  `);

  const projects = queryData.allMdx.edges.map((edge) => {
    const { excerpt, slug, frontmatter } = edge.node;
    const { date, title } = frontmatter;
    return {
      title,
      date,
      slug,
      excerpt,
    };
  });

  return (
    <div className="w-full mt-20">
      <SectionTitle title="Featured projects"></SectionTitle>
      <div className="flex flex-col pt-5">
        {projects.map((project, index) => {
          const { title, excerpt } = project;

          return (
            <div
              key={index}
              className="rounded-md transition-all duration-500 self-start border-l-4 hover:border-green-500 px-5 mb-5 py-5 cursor-pointer bg-gray-200"
            >
              <h3 className="text-3xl font-mono pt-2 text-green-500">
                {title}
              </h3>
              <p className="font-sans text-sm pb-10">{excerpt}</p>
              <ButtonOutlinedComponent
                label="View"
                link={"project/" + project.slug}
              ></ButtonOutlinedComponent>
            </div>
          );
        })}
      </div>
      <div className="w-full flex items-center justify-center mt-5">
        <ButtonComponent label="View All" link="projects"></ButtonComponent>
      </div>
    </div>
  );
};

export default ProjectSection;
