import * as React from "react";
import Layot from "../components/layout/Layout";
import Footer from "../components/layout/Footer";
import { graphql, Link } from "gatsby";

const BlogsPage = ({ data }) => {
  const { edges: posts } = data.allMdx;

  return (
    <Layot>
      <main>
        <ul>
          {posts.map(({ node: post }) => (
            <li key={post.id}>
              <Link to={post.slug}>
                <h2>{post.frontmatter.title}</h2>
              </Link>
              <p>{post.excerpt}</p>
            </li>
          ))}
        </ul>
      </main>
      <Footer />
    </Layot>
  );
};

export const pageQuery = graphql`
  query blogIndex {
    allMdx {
      edges {
        node {
          id
          excerpt
          frontmatter {
            title
          }
          slug
        }
      }
    }
  }
`;

export default BlogsPage;
