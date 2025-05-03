
import React from "react";
import { GraduationCap, BookOpen, FileText, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: <GraduationCap className="h-6 w-6 text-alward-accent" />,
    title: "مشاريع التخرج",
    description: "تطوير مشاريع تخرج متكاملة بأحدث التقنيات والمعايير الأكاديمية",
  },
  {
    icon: <BookOpen className="h-6 w-6 text-alward-accent" />,
    title: "تحليل المتطلبات",
    description: "تحليل وتوثيق متطلبات المشروع بشكل احترافي ومنهجي",
  },
  {
    icon: <FileText className="h-6 w-6 text-alward-accent" />,
    title: "قوالب الأطروحات",
    description: "إعداد قوالب أطروحة احترافية تلبي متطلبات الجامعات",
  },
  {
    icon: <CheckCircle2 className="h-6 w-6 text-alward-accent" />,
    title: "الدعم الشامل",
    description: "توجيه ودعم كامل طوال فترة المشروع حتى التسليم النهائي",
  },
];

const StudentServices = () => {
  return (
    <section id="students" className="py-20 bg-alward-light">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 rtl-text">
            <h2 className="text-3xl md:text-4xl font-bold text-alward-primary font-tajawal inline-block relative mb-6">
              خدمات الطلاب
              <span className="absolute -bottom-3 left-0 right-0 h-1 bg-alward-accent"></span>
            </h2>
            <p className="text-gray-600 mb-8 text-lg">
              نقدم خدمات متخصصة للطلاب في مجال تطوير مشاريع التخرج من الفكرة إلى التنفيذ وإعداد الوثائق اللازمة
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex rtl-text">
                  <div className="mr-4 bg-white rounded-full p-2 shadow-md">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-alward-primary mb-1">{feature.title}</h4>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mb-4 p-4 border-r-4 border-alward-primary bg-white rounded shadow-md rtl-text">
              <p className="text-alward-primary font-medium">
                ⚠️ يتم تحديد أسعار الخدمات حسب حجم وتعقيد المشروع ومتطلباته التقنية
              </p>
            </div>
            <Button className="bg-alward-primary hover:bg-alward-secondary text-white">
              تواصل معنا لمعرفة التفاصيل
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
              <div className="absolute -bottom-8 -right-8 bg-alward-primary text-white p-4 rounded-lg shadow-lg rtl-text">
                <p className="font-bold text-lg">نجاحك هو هدفنا!</p>
                <p className="text-sm">فريق متخصص لدعم مشاريع التخرج</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudentServices;
