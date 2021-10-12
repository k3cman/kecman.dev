import * as React from "react";
import BlogSection from "../components/home/Blog-section";
import HeroSection from "../components/home/Hero-section";
import ProjectSection from "../components/home/Project-section";
import Layout from "../components/layout/Layout";

const IndexPage = () => {
  return (
    <Layout>
      <main>
        <HeroSection />
        <BlogSection />
        <ProjectSection />
      </main>
    </Layout>
  );
};

export default IndexPage;
