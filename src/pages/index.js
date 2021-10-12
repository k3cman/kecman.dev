import * as React from "react";
import BlogSection from "../components/home/Blog-section";
import HeroSection from "../components/home/Hero-section";
import ProjectSection from "../components/home/Project-section";
import Footer from "../components/layout/Footer";
import Layout from "../components/layout/Layout";

const IndexPage = () => {
  return (
    <Layout>
      <main>
        <HeroSection />
        <BlogSection />
        <ProjectSection />
      </main>

      <Footer />
    </Layout>
  );
};

export default IndexPage;
