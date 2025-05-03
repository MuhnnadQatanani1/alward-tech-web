
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Hero = () => {
  const { t, language } = useLanguage();
  const rtlClass = language === "ar" ? "rtl-text" : "";
  const buttonIcon = language === "ar" ? <ArrowRight className="mr-1 h-4 w-4" /> : <ArrowRight className="ml-1 h-4 w-4" />;

  return (
    <section id="home" className="hero-gradient text-white pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className={`md:w-1/2 text-center md:text-${language === "ar" ? "right" : "left"} ${rtlClass} animate-fade-in`}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-tajawal">
              {t("نحن نقدم", "We provide")} <span className="text-alward-accent">{t("حلول برمجية", "software solutions")}</span> {t("مبتكرة", "innovative")}
            </h1>
            <p className="text-lg md:text-xl mb-8 opacity-90 max-w-xl mx-auto md:mr-0 font-tajawal">
              {t(
                "شركة AlWard Tech متخصصة في تطوير البرمجيات والتطبيقات المتكاملة للشركات والمؤسسات والأفراد بمعايير عالمية",
                "AlWard Tech specializes in developing integrated software and applications for companies, institutions, and individuals with international standards"
              )}
            </p>
            <div className={`flex flex-wrap gap-4 justify-center md:justify-${language === "ar" ? "start" : "start"}`}>
              <Button size="lg" className="bg-white text-alward-primary hover:bg-alward-accent hover:text-white transition-all duration-300">
                {t("تواصل معنا", "Contact Us")}
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-alward-primary transition-all duration-300">
                {t("خدماتنا", "Our Services")} {buttonIcon}
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center md:justify-end animate-fade-in animate-delay-200">
            <div className="relative">
              <div className="absolute -inset-0.5 bg-alward-accent rounded-full blur-xl opacity-70"></div>
              <div className="relative bg-alward-dark p-2 rounded-full">
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden flex items-center justify-center bg-alward-primary border-4 border-alward-accent">
                  <img 
                    src="/lovable-uploads/4ee97a87-81b2-4506-817a-2a5849bade39.png" 
                    alt="AlWard Tech Logo" 
                    className="w-3/4 h-auto animate-spin-slow"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-16">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto">
          <path fill="#ffffff" fillOpacity="1" d="M0,128L48,122.7C96,117,192,107,288,122.7C384,139,480,181,576,176C672,171,768,117,864,96C960,75,1056,85,1152,112C1248,139,1344,181,1392,202.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
