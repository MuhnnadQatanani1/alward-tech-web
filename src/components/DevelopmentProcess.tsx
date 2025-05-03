
import React from "react";
import { Lightbulb, FileText, Code, Settings, CheckCircle2, ArrowRight } from "lucide-react";

const processList = [
  {
    icon: <Lightbulb className="w-6 h-6 text-white" />,
    title: "الفكرة",
    description: "جمع المتطلبات وتحليل الاحتياجات",
    color: "bg-blue-500",
  },
  {
    icon: <FileText className="w-6 h-6 text-white" />,
    title: "التخطيط",
    description: "تصميم النظام وهيكلة المشروع",
    color: "bg-indigo-500",
  },
  {
    icon: <Code className="w-6 h-6 text-white" />,
    title: "التطوير",
    description: "برمجة وتنفيذ الوظائف الأساسية",
    color: "bg-purple-500",
  },
  {
    icon: <Settings className="w-6 h-6 text-white" />,
    title: "الاختبار",
    description: "فحص الجودة وضمان الأداء",
    color: "bg-pink-500",
  },
  {
    icon: <CheckCircle2 className="w-6 h-6 text-white" />,
    title: "التسليم",
    description: "إطلاق المنتج وتدريب المستخدمين",
    color: "bg-red-500",
  },
  {
    icon: <ArrowRight className="w-6 h-6 text-white" />,
    title: "التحسين",
    description: "تطوير مستمر ودعم فني متواصل",
    color: "bg-amber-500",
  },
];

const DevelopmentProcess = () => {
  return (
    <section id="process" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 rtl-text">
          <h2 className="text-3xl md:text-4xl font-bold text-alward-primary font-tajawal inline-block relative">
            عملية التطوير
            <span className="absolute -bottom-3 left-0 right-0 h-1 bg-alward-accent"></span>
          </h2>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-lg font-tajawal">
            نتبع منهجية Agile في تطوير المشاريع مما يضمن المرونة والجودة والتسليم في الوقت المحدد
          </p>
        </div>

        <div className="relative flex justify-center mb-8">
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-dashed border-alward-secondary flex items-center justify-center relative">
            <div className="w-48 h-48 md:w-64 md:h-64 bg-alward-light rounded-full flex items-center justify-center">
              <img 
                src="/lovable-uploads/4ee97a87-81b2-4506-817a-2a5849bade39.png" 
                alt="AlWard Tech Logo" 
                className="w-32 h-32 md:w-40 md:h-40"
              />
            </div>
            
            {processList.map((process, index) => {
              const angle = (index * 60) * (Math.PI / 180);
              const radius = 170;
              const x = radius * Math.cos(angle);
              const y = radius * Math.sin(angle);
              
              return (
                <div
                  key={index}
                  className="process-circle absolute transform -translate-x-1/2 -translate-y-1/2"
                  style={{ left: `calc(50% + ${x}px)`, top: `calc(50% + ${y}px)` }}
                >
                  <div className={`${process.color} rounded-full p-3 shadow-lg`}>
                    <div className="bg-white rounded-full p-6">
                      {process.icon}
                    </div>
                  </div>
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 text-center w-24">
                    <h4 className="text-sm font-bold text-alward-primary rtl-text">{process.title}</h4>
                    <p className="text-xs text-gray-500 rtl-text">{process.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DevelopmentProcess;
