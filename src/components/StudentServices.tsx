
import React from "react";
import { GraduationCap, BookOpen, FileText, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const StudentServices = () => {
  const { t, language } = useLanguage();
  const rtlClass = language === "ar" ? "rtl-text" : "";
  
  const features = [
    {
      icon: <GraduationCap className="h-6 w-6 text-alward-accent" />,
      title: t("مشاريع التخرج", "Graduation Projects"),
      description: t(
        "تطوير مشاريع تخرج متكاملة بأحدث التقنيات والمعايير الأكاديمية",
        "Development of integrated graduation projects with the latest technologies and academic standards"
      ),
    },
    {
      icon: <BookOpen className="h-6 w-6 text-alward-accent" />,
      title: t("تحليل المتطلبات", "Requirements Analysis"),
      description: t(
        "تحليل وتوثيق متطلبات المشروع بشكل احترافي ومنهجي",
        "Professional and methodical analysis and documentation of project requirements"
      ),
    },
    {
      icon: <FileText className="h-6 w-6 text-alward-accent" />,
      title: t("قوالب الأطروحات", "Thesis Templates"),
      description: t(
        "إعداد قوالب أطروحة احترافية تلبي متطلبات الجامعات",
        "Preparation of professional thesis templates that meet university requirements"
      ),
    },
    {
      icon: <CheckCircle2 className="h-6 w-6 text-alward-accent" />,
      title: t("الدعم الشامل", "Comprehensive Support"),
      description: t(
        "توجيه ودعم كامل طوال فترة المشروع حتى التسليم النهائي",
        "Guidance and full support throughout the project period until final delivery"
      ),
    },
  ];

  return (
    <section id="students" className="py-20 bg-alward-light">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className={`lg:w-1/2 ${rtlClass}`}>
            <h2 className="text-3xl md:text-4xl font-bold text-alward-primary font-tajawal inline-block relative mb-6">
              {t("خدمات الطلاب", "Student Services")}
              <span className="absolute -bottom-3 left-0 right-0 h-1 bg-alward-accent"></span>
            </h2>
            <p className="text-gray-600 mb-8 text-lg">
              {t(
                "نقدم خدمات متخصصة للطلاب في مجال تطوير مشاريع التخرج من الفكرة إلى التنفيذ وإعداد الوثائق اللازمة",
                "We provide specialized services to students in the field of developing graduation projects from idea to implementation and preparing the necessary documents"
              )}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {features.map((feature, index) => (
                <div key={index} className={`flex ${rtlClass}`}>
                  <div className={`${language === "ar" ? "ml-4" : "mr-4"} bg-white rounded-full p-2 shadow-md`}>
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-alward-primary mb-1">{feature.title}</h4>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className={`mb-4 p-4 border-${language === "ar" ? "r" : "l"}-4 border-alward-primary bg-white rounded shadow-md ${rtlClass}`}>
              <p className="text-alward-primary font-medium">
                ⚠️ {t(
                  "يتم تحديد أسعار الخدمات حسب حجم وتعقيد المشروع ومتطلباته التقنية",
                  "Service prices are determined according to the size and complexity of the project and its technical requirements"
                )}
              </p>
            </div>
            <Button className="bg-alward-primary hover:bg-alward-secondary text-white">
              {t("تواصل معنا لمعرفة التفاصيل", "Contact us for details")}
            </Button>
          </div>
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="absolute -inset-2 bg-alward-primary/20 rounded-lg blur-xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
                alt="Student Services" 
                className="relative rounded-lg shadow-2xl max-w-full mx-auto"
              />
              <div className={`absolute -bottom-8 -${language === "ar" ? "right" : "left"}-8 bg-alward-primary text-white p-4 rounded-lg shadow-lg ${rtlClass}`}>
                <p className="font-bold text-lg">{t("نجاحك هو هدفنا!", "Your success is our goal!")}</p>
                <p className="text-sm">{t("فريق متخصص لدعم مشاريع التخرج", "Specialized team to support graduation projects")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudentServices;
