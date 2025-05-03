
import React from "react";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const projectsList = [
  {
    title: "Ecuamarce",
    description: "منصة إلكترونية متكاملة لإدارة العمليات التجارية وخدمة العملاء مع لوحات تحكم تفاعلية",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    tags: ["Web App", "Dashboard", "CRM"],
  },
  {
    title: "تطبيق مراسلات",
    description: "تطبيق موبايل شبيه بـ Model لإدارة المراسلات والاتصالات الداخلية مع واجهة مستخدم مميزة",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    tags: ["Mobile", "Communication", "UI/UX"],
  },
  {
    title: "Autism Communication App",
    description: "تطبيق PECS لمساعدة الأفراد المصابين بالتوحد على التواصل من خلال استخدام الصور والرموز",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    tags: ["Healthcare", "Accessibility", "Mobile"],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-alward-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 rtl-text">
          <h2 className="text-3xl md:text-4xl font-bold text-alward-primary font-tajawal inline-block relative">
            مشاريعنا
            <span className="absolute -bottom-3 left-0 right-0 h-1 bg-alward-accent"></span>
          </h2>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-lg font-tajawal">
            نفخر بتقديم حلول برمجية مبتكرة ساهمت في نجاح عملائنا ودعم أهدافهم
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
              <div className="p-6 rtl-text">
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
                  عرض المشروع <ExternalLink className="mr-1 h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button className="bg-alward-primary hover:bg-alward-secondary text-white">
            عرض المزيد من المشاريع <ArrowRight className="mr-1 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
