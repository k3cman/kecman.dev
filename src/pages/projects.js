import * as React from "react";
import Layot from "../components/layout/Layout";
import Footer from "../components/layout/Footer";
import { graphql } from "gatsby";

const ProjectsPage = ({ data }) => {
  const { edges } = data.allMdx;
  const projects = edges.map((e) => e.node);
  console.log(projects);
  return (
    <Layot>
      <main>
        <h1 className="font-mono text-5xl font-black text-gray-600 mt-16 mb-20">
          Projects
        </h1>
        <ul>
          {projects.map((project) => {
            return <li key={project.id}>{project.frontmatter.title}</li>;
          })}
        </ul>
      </main>
      <Footer />
    </Layot>
  );
};

export const pageQuery = graphql`
  query projectIndex {
    allMdx(filter: { frontmatter: { type: { eq: "project" } } }) {
      edges {
        node {
          id
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
`;

export default ProjectsPage;
