
import React from "react";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const Projects = () => {
  const { t, language } = useLanguage();
  const rtlClass = language === "ar" ? "rtl-text" : "";
  const buttonIcon = language === "ar" ? <ArrowRight className="mr-1 h-4 w-4" /> : <ArrowRight className="ml-1 h-4 w-4" />;
  const externalIcon = <ExternalLink className={language === "ar" ? "mr-1 h-4 w-4" : "ml-1 h-4 w-4"} />;
  
  const projectsList = [
    {
      title: t("Ecuamarce", "Ecuamarce"),
      description: t(
        "منصة إلكترونية متكاملة لإدارة العمليات التجارية وخدمة العملاء مع لوحات تحكم تفاعلية",
        "Integrated electronic platform for managing business operations and customer service with interactive dashboards"
      ),
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      tags: [t("تطبيق ويب", "Web App"), t("لوحة التحكم", "Dashboard"), "CRM"],
    },
    {
      title: t("تطبيق مراسلات", "Correspondence App"),
      description: t(
        "تطبيق موبايل شبيه بـ Model لإدارة المراسلات والاتصالات الداخلية مع واجهة مستخدم مميزة",
        "Mobile application similar to Model for managing correspondence and internal communications with a distinctive user interface"
      ),
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      tags: [t("موبايل", "Mobile"), t("اتصالات", "Communication"), "UI/UX"],
    },
    {
      title: t("Autism Communication App", "Autism Communication App"),
      description: t(
        "تطبيق PECS لمساعدة الأفراد المصابين بالتوحد على التواصل من خلال استخدام الصور والرموز",
        "PECS application to help individuals with autism communicate through the use of images and symbols"
      ),
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      tags: [t("الرعاية الصحية", "Healthcare"), t("سهولة الوصول", "Accessibility"), t("موبايل", "Mobile")],
    },
  ];

  return (
    <section id="projects" className="py-20 bg-alward-light">
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 ${rtlClass}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-alward-primary font-tajawal inline-block relative">
            {t("مشاريعنا", "Our Projects")}
            <span className="absolute -bottom-3 left-0 right-0 h-1 bg-alward-accent"></span>
          </h2>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-lg font-tajawal">
            {t(
              "نفخر بتقديم حلول برمجية مبتكرة ساهمت في نجاح عملائنا ودعم أهدافهم",
              "We are proud to provide innovative software solutions that have contributed to our clients' success and supported their goals"
            )}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsList.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:-translate-y-2 transition-all duration-300"
            >
              <div className="h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className={`p-6 ${rtlClass}`}>
                <h3 className="text-xl font-bold mb-3 text-alward-primary">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-alward-light text-alward-primary text-sm px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Button variant="outline" className="text-alward-primary border-alward-primary hover:bg-alward-primary hover:text-white">
                  {t("عرض المشروع", "View Project")} {externalIcon}
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button className="bg-alward-primary hover:bg-alward-secondary text-white">
            {t("عرض المزيد من المشاريع", "View More Projects")} {buttonIcon}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
