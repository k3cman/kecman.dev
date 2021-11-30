import * as React from "react";
import SectionTitle from "../shared/SectionTitle";
import { DocumentTextIcon, ExternalLinkIcon } from "@heroicons/react/outline";
import { graphql, useStaticQuery } from "gatsby";
import ButtonComponent from "../shared/Button";

const BlogSection = () => {
  const queryData = useStaticQuery(graphql`
    query blogHome {
      allMdx(limit: 6, sort: { fields: frontmatter___date, order: DESC }) {
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
  const data = queryData.allMdx.edges.map((edge) => {
    const { excerpt, slug, frontmatter } = edge.node;
    const { date, title } = frontmatter;
    return {
      title,
      date,
      excerpt,
      slug,
    };
  });
  return (
    <div className="w-full">
      <SectionTitle
        title="From the blog"
        subtitle="My latest posts about technology, developement and design"
      />
      <div className="mt-20 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
        {data.map((post, index) => {
          return (
            <div
              key={index}
              className="flex flex-col justify-between overflow-hidden bg-gray-200 p-5 rounded-md border-transparent border-l-4 cursor-pointer hover:border-green-500 hover:border-l-4  transition-all duration-500"
            >
              <div className="h-10 w-full flex justify-between align-center">
                <DocumentTextIcon className="stroke-current stroke-1 w-5 h-5"></DocumentTextIcon>
                <ExternalLinkIcon className="stroke-current stroke-1 w-5 h-5"></ExternalLinkIcon>
              </div>
              <div>
                <h3 className="text-green-500 text-2xl font-mono">
                  {post.title}
                </h3>
                <p className="text-gray-500 text-sm font-sans h-20">
                  {post.excerpt}
                </p>
                <p>
                  <em>{post.date}</em>
                </p>
              </div>
              {/* <ul className="flex align-center mt-2 flex-wrap h-10">
                {post.tags.map((tag, index) => {
                  return (
                    <li
                      key={index}
                      className="mt-2 mx-1 text-xs text-gray-400 self-end rounded-md bg-gray-300 px-2 cursor-pointer"
                    >
                      #{tag}
                    </li>
                  );
                })}
              </ul> */}
            </div>
          );
        })}
      </div>
      <div className="w-full flex items-center justify-center mt-5">
        <ButtonComponent label={"View all"} />
      </div>
    </div>
  );
};

export default BlogSection;
