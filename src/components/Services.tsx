
import React from "react";
import { Laptop, Smartphone, Code, Database } from "lucide-react";

const servicesList = [
  {
    icon: <Code className="w-12 h-12 text-alward-primary mb-4" />,
    title: "University IT Projects",
    description: "نطور مشاريع تخرج وأبحاث جامعية متميزة بتقنيات حديثة تلبي متطلبات الجامعات",
  },
  {
    icon: <Laptop className="w-12 h-12 text-alward-primary mb-4" />,
    title: "Web Development",
    description: "تصميم وتطوير مواقع ومنصات ويب متكاملة وديناميكية تناسب مختلف المجالات والأعمال",
  },
  {
    icon: <Smartphone className="w-12 h-12 text-alward-primary mb-4" />,
    title: "Mobile Development",
    description: "تطوير تطبيقات موبايل احترافية لأنظمة Android و iOS بواجهات سلسة وأداء عالي",
  },
  {
    icon: <Database className="w-12 h-12 text-alward-primary mb-4" />,
    title: "Business Solutions",
    description: "حلول برمجية متكاملة لإدارة الأعمال والشركات مع أنظمة تخطيط موارد وإدارة علاقات العملاء",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 rtl-text">
          <h2 className="text-3xl md:text-4xl font-bold text-alward-primary font-tajawal inline-block relative">
            خدماتنا
            <span className="absolute -bottom-3 left-0 right-0 h-1 bg-alward-accent"></span>
          </h2>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-lg font-tajawal">
            نقدم مجموعة متكاملة من الخدمات البرمجية المتطورة لتلبية احتياجات عملائنا في مختلف المجالات
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesList.map((service, index) => (
            <div
              key={index}
              className="services-card bg-white rounded-lg p-6 border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 text-center rtl-text"
            >
              <div className="flex justify-center">{service.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-alward-primary">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
