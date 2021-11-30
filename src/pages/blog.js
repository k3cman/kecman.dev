import * as React from "react";
import Layot from "../components/layout/Layout";
import Footer from "../components/layout/Footer";
import { graphql, Link } from "gatsby";

const BlogsPage = ({ data }) => {
  const { edges: posts } = data.allMdx;

  return (
    <Layot>
      <main>
        <h1 className="font-mono text-5xl font-black text-gray-600 mt-16 mb-20">
          Blog
        </h1>
        <ul>
          {posts.map(({ node: post }) => (
            <li key={post.id} className="mb-12">
              <p className="text-green-500 text-xs">{post.frontmatter.date}</p>

              <h2 className="font-mono text-3xl text-gray-600 mt-1 mb-1">
                {post.frontmatter.title}
              </h2>
              <p className="text-sm mb-2">{post.excerpt}</p>
              <Link to={post.slug}>
                <span className="text-xs text-green-500">Read more...</span>
              </Link>
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
    allMdx(
      filter: { frontmatter: { type: { eq: "blog" } } }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      edges {
        node {
          id
          excerpt
          frontmatter {
            title
            date
          }
          slug
        }
      }
    }
  }
`;

export default BlogsPage;
