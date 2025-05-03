
import React from "react";
import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-alward-primary text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between pb-8 border-b border-alward-secondary/30">
          <div className="mb-8 md:mb-0 md:w-1/3">
            <img 
              src="/lovable-uploads/4ee97a87-81b2-4506-817a-2a5849bade39.png" 
              alt="AlWard Tech Logo" 
              className="h-16 w-auto mb-4"
            />
            <p className="text-gray-300 mb-4 rtl-text">
              شركة AlWard Tech متخصصة في تطوير البرمجيات والتطبيقات المتكاملة للشركات والمؤسسات والأفراد بمعايير عالمية
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.linkedin.com/in/muhnnad-qatanani/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-alward-secondary/20 hover:bg-alward-secondary p-2 rounded-full transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="https://github.com/MuhnnadQatanani1" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-alward-secondary/20 hover:bg-alward-secondary p-2 rounded-full transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="mailto:muhnnadqatanani123@gmail.com" 
                className="bg-alward-secondary/20 hover:bg-alward-secondary p-2 rounded-full transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div className="mb-8 md:mb-0 rtl-text">
            <h4 className="font-bold text-xl mb-4">روابط سريعة</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-300 hover:text-white transition-colors">الرئيسية</a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-white transition-colors">خدماتنا</a>
              </li>
              <li>
                <a href="#projects" className="text-gray-300 hover:text-white transition-colors">المشاريع</a>
              </li>
              <li>
                <a href="#process" className="text-gray-300 hover:text-white transition-colors">عملية التطوير</a>
              </li>
              <li>
                <a href="#students" className="text-gray-300 hover:text-white transition-colors">للطلاب</a>
              </li>
            </ul>
          </div>
          
          <div className="mb-8 md:mb-0 rtl-text">
            <h4 className="font-bold text-xl mb-4">معلومات التواصل</h4>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Phone className="h-5 w-5 ml-2" />
                <span>+970 568512074</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 ml-2" />
                <span>muhnnadqatanani123@gmail.com</span>
              </li>
              <li className="flex items-center">
                <MapPin className="h-5 w-5 ml-2" />
                <span>نابلس، فلسطين</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} AlWard Tech. جميع الحقوق محفوظة
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
