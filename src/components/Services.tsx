
import React from "react";
import { Laptop, Smartphone, Code, Database } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Services = () => {
  const { t, language } = useLanguage();
  const rtlClass = language === "ar" ? "rtl-text" : "";
  
  const servicesList = [
    {
      icon: <Code className="w-12 h-12 text-alward-primary mb-4" />,
      title: "University IT Projects",
      arTitle: "مشاريع تقنية المعلومات الجامعية",
      description: t(
        "نطور مشاريع تخرج وأبحاث جامعية متميزة بتقنيات حديثة تلبي متطلبات الجامعات",
        "We develop outstanding graduation projects and university research with modern technologies that meet university requirements"
      ),
    },
    {
      icon: <Laptop className="w-12 h-12 text-alward-primary mb-4" />,
      title: "Web Development",
      arTitle: "تطوير الويب",
      description: t(
        "تصميم وتطوير مواقع ومنصات ويب متكاملة وديناميكية تناسب مختلف المجالات والأعمال",
        "Design and development of integrated and dynamic websites and web platforms suitable for various fields and businesses"
      ),
    },
    {
      icon: <Smartphone className="w-12 h-12 text-alward-primary mb-4" />,
      title: "Mobile Development",
      arTitle: "تطوير تطبيقات الموبايل",
      description: t(
        "تطوير تطبيقات موبايل احترافية لأنظمة Android و iOS بواجهات سلسة وأداء عالي",
        "Development of professional mobile applications for Android and iOS systems with smooth interfaces and high performance"
      ),
    },
    {
      icon: <Database className="w-12 h-12 text-alward-primary mb-4" />,
      title: "Business Solutions",
      arTitle: "حلول الأعمال",
      description: t(
        "حلول برمجية متكاملة لإدارة الأعمال والشركات مع أنظمة تخطيط موارد وإدارة علاقات العملاء",
        "Integrated software solutions for business and corporate management with resource planning systems and customer relationship management"
      ),
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 ${rtlClass}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-alward-primary font-tajawal inline-block relative">
            {t("خدماتنا", "Our Services")}
            <span className="absolute -bottom-3 left-0 right-0 h-1 bg-alward-accent"></span>
          </h2>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-lg font-tajawal">
            {t(
              "نقدم مجموعة متكاملة من الخدمات البرمجية المتطورة لتلبية احتياجات عملائنا في مختلف المجالات",
              "We provide a comprehensive range of advanced software services to meet the needs of our clients in various fields"
            )}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesList.map((service, index) => (
            <div
              key={index}
              className={`services-card bg-white rounded-lg p-6 border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 text-center ${rtlClass}`}
            >
              <div className="flex justify-center">{service.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-alward-primary">
                {language === "ar" ? service.arTitle : service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
