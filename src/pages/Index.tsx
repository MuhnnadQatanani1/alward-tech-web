
import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import DevelopmentProcess from "@/components/DevelopmentProcess";
import StudentServices from "@/components/StudentServices";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

const Index = () => {
  const { language } = useLanguage();
  
  // Apply RTL direction to body based on language
  React.useEffect(() => {
    document.body.dir = language === "ar" ? "rtl" : "ltr";
    
    // Add a class to help with RTL-specific styling
    if (language === "ar") {
      document.body.classList.add("rtl-lang");
    } else {
      document.body.classList.remove("rtl-lang");
    }
  }, [language]);
  
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
