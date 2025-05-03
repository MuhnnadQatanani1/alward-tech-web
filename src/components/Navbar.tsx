
import React, { useState } from "react";
import { Menu, X, Languages } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white/90 backdrop-blur-sm fixed w-full z-50 shadow-sm">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <img 
            src="/lovable-uploads/4ee97a87-81b2-4506-817a-2a5849bade39.png" 
            alt="AlWard Tech Logo" 
            className="h-12 w-auto"
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#home" className="text-alward-dark hover:text-alward-secondary font-medium transition-colors">
            {t("الرئيسية", "Home")}
          </a>
          <a href="#services" className="text-alward-dark hover:text-alward-secondary font-medium transition-colors">
            {t("خدماتنا", "Services")}
          </a>
          <a href="#projects" className="text-alward-dark hover:text-alward-secondary font-medium transition-colors">
            {t("المشاريع", "Projects")}
          </a>
          <a href="#process" className="text-alward-dark hover:text-alward-secondary font-medium transition-colors">
            {t("عملية التطوير", "Development Process")}
          </a>
          <a href="#students" className="text-alward-dark hover:text-alward-secondary font-medium transition-colors">
            {t("للطلاب", "For Students")}
          </a>
          <a href="#contact" className="text-alward-dark hover:text-alward-secondary font-medium transition-colors">
            {t("تواصل معنا", "Contact Us")}
          </a>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <Button 
            variant="ghost" 
            size="icon" 
            className="rounded-full" 
            onClick={toggleLanguage}
            aria-label={t("تغيير اللغة", "Change language")}
          >
            <Languages className="h-5 w-5" />
            <span className="ml-2 text-xs font-bold">{language === "ar" ? "EN" : "AR"}</span>
          </Button>
          <Button className="bg-alward-primary hover:bg-alward-secondary text-white">
            {t("تواصل الآن", "Contact Now")}
          </Button>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center space-x-2">
          <Button 
            variant="ghost" 
            size="icon" 
            className="rounded-full" 
            onClick={toggleLanguage}
            aria-label={t("تغيير اللغة", "Change language")}
          >
            <Languages className="h-5 w-5" />
            <span className="ml-1 text-xs font-bold">{language === "ar" ? "EN" : "AR"}</span>
          </Button>
          <button onClick={toggleMenu} className="text-alward-dark focus:outline-none">
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4 px-4 shadow-lg">
          <div className="flex flex-col space-y-4 rtl-text">
            <a 
              href="#home" 
              className="text-alward-dark hover:text-alward-secondary font-medium px-4 py-2 hover:bg-alward-light rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              {t("الرئيسية", "Home")}
            </a>
            <a 
              href="#services" 
              className="text-alward-dark hover:text-alward-secondary font-medium px-4 py-2 hover:bg-alward-light rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              {t("خدماتنا", "Services")}
            </a>
            <a 
              href="#projects" 
              className="text-alward-dark hover:text-alward-secondary font-medium px-4 py-2 hover:bg-alward-light rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              {t("المشاريع", "Projects")}
            </a>
            <a 
              href="#process" 
              className="text-alward-dark hover:text-alward-secondary font-medium px-4 py-2 hover:bg-alward-light rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              {t("عملية التطوير", "Development Process")}
            </a>
            <a 
              href="#students" 
              className="text-alward-dark hover:text-alward-secondary font-medium px-4 py-2 hover:bg-alward-light rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              {t("للطلاب", "For Students")}
            </a>
            <a 
              href="#contact" 
              className="text-alward-dark hover:text-alward-secondary font-medium px-4 py-2 hover:bg-alward-light rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              {t("تواصل معنا", "Contact Us")}
            </a>
            <Button className="bg-alward-primary hover:bg-alward-secondary text-white">
              {t("تواصل الآن", "Contact Now")}
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
