
import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import DevelopmentProcess from "@/components/DevelopmentProcess";
import StudentServices from "@/components/StudentServices";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Projects />
        <DevelopmentProcess />
        <StudentServices />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
