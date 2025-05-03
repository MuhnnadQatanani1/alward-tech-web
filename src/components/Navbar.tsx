
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
            الرئيسية
          </a>
          <a href="#services" className="text-alward-dark hover:text-alward-secondary font-medium transition-colors">
            خدماتنا
          </a>
          <a href="#projects" className="text-alward-dark hover:text-alward-secondary font-medium transition-colors">
            المشاريع
          </a>
          <a href="#process" className="text-alward-dark hover:text-alward-secondary font-medium transition-colors">
            عملية التطوير
          </a>
          <a href="#students" className="text-alward-dark hover:text-alward-secondary font-medium transition-colors">
            للطلاب
          </a>
          <a href="#contact" className="text-alward-dark hover:text-alward-secondary font-medium transition-colors">
            تواصل معنا
          </a>
        </div>

        <div className="hidden md:block">
          <Button className="bg-alward-primary hover:bg-alward-secondary text-white">تواصل الآن</Button>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
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
              الرئيسية
            </a>
            <a 
              href="#services" 
              className="text-alward-dark hover:text-alward-secondary font-medium px-4 py-2 hover:bg-alward-light rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              خدماتنا
            </a>
            <a 
              href="#projects" 
              className="text-alward-dark hover:text-alward-secondary font-medium px-4 py-2 hover:bg-alward-light rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              المشاريع
            </a>
            <a 
              href="#process" 
              className="text-alward-dark hover:text-alward-secondary font-medium px-4 py-2 hover:bg-alward-light rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              عملية التطوير
            </a>
            <a 
              href="#students" 
              className="text-alward-dark hover:text-alward-secondary font-medium px-4 py-2 hover:bg-alward-light rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              للطلاب
            </a>
            <a 
              href="#contact" 
              className="text-alward-dark hover:text-alward-secondary font-medium px-4 py-2 hover:bg-alward-light rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              تواصل معنا
            </a>
            <Button className="bg-alward-primary hover:bg-alward-secondary text-white">تواصل الآن</Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
