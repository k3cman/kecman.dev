import * as React from "react";
import Layot from "../components/layout/Layout";
import Footer from "../components/layout/Footer";
import { graphql } from "gatsby";

const BlogsPage = ({ data }) => {
  const allBlogs = data.allMdx.edges.map((edge) => {
    const node = edge.node.frontmatter;
    return {
      title: node.title,
      date: node.date,
    };
  });

  console.log(allBlogs);
  return (
    <Layot>
      <main>
        <ul>
          {allBlogs.map((blog, index) => (
            <li key={index}>
              {blog.title} - {blog.date}
            </li>
          ))}
        </ul>
      </main>
      <Footer />
    </Layot>
  );
};

export const query = graphql`
  query BlogsPageQuery {
    allMdx {
      edges {
        node {
          frontmatter {
            title
            date
          }
        }
      }
    }
  }
`;

export default BlogsPage;
