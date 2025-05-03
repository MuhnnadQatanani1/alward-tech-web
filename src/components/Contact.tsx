
import React from "react";
import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 rtl-text">
          <h2 className="text-3xl md:text-4xl font-bold text-alward-primary font-tajawal inline-block relative">
            تواصل معنا
            <span className="absolute -bottom-3 left-0 right-0 h-1 bg-alward-accent"></span>
          </h2>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-lg font-tajawal">
            نحن هنا للإجابة على جميع استفساراتكم ومساعدتكم في تطوير مشاريعكم البرمجية
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/2 rtl-text">
            <h3 className="text-2xl font-bold mb-6 text-alward-primary">معلومات التواصل</h3>
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="bg-alward-light p-3 rounded-full mr-4">
                  <Mail className="h-6 w-6 text-alward-primary" />
                </div>
                <div>
                  <p className="text-gray-500 text-sm">البريد الإلكتروني</p>
                  <p className="font-medium">muhnnadqatanani123@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="bg-alward-light p-3 rounded-full mr-4">
                  <Phone className="h-6 w-6 text-alward-primary" />
                </div>
                <div>
                  <p className="text-gray-500 text-sm">رقم الهاتف</p>
                  <p className="font-medium">+970 568512074</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="bg-alward-light p-3 rounded-full mr-4">
                  <MapPin className="h-6 w-6 text-alward-primary" />
                </div>
                <div>
                  <p className="text-gray-500 text-sm">العنوان</p>
                  <p className="font-medium">نابلس، فلسطين</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="bg-alward-light p-3 rounded-full mr-4">
                  <Linkedin className="h-6 w-6 text-alward-primary" />
                </div>
                <div>
                  <p className="text-gray-500 text-sm">لينكد إن</p>
                  <a 
                    href="https://www.linkedin.com/in/muhnnad-qatanani/"
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="font-medium text-alward-secondary hover:underline"
                  >
                    muhnnad-qatanani
                  </a>
                </div>
              </div>
              <div className="flex items-center">
                <div className="bg-alward-light p-3 rounded-full mr-4">
                  <Github className="h-6 w-6 text-alward-primary" />
                </div>
                <div>
                  <p className="text-gray-500 text-sm">جيت هاب</p>
                  <a 
                    href="https://github.com/MuhnnadQatanani1" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="font-medium text-alward-secondary hover:underline"
                  >
                    MuhnnadQatanani1
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2">
            <form className="bg-white rounded-lg shadow-xl p-8 rtl-text">
              <h3 className="text-2xl font-bold mb-6 text-alward-primary">أرسل لنا رسالة</h3>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="block font-medium text-gray-700">
                      الاسم
                    </label>
                    <Input id="name" placeholder="أدخل اسمك الكامل" className="rtl-text" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="block font-medium text-gray-700">
                      البريد الإلكتروني
                    </label>
                    <Input id="email" type="email" placeholder="أدخل بريدك الإلكتروني" className="rtl-text" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="block font-medium text-gray-700">
                    الموضوع
                  </label>
                  <Input id="subject" placeholder="موضوع الرسالة" className="rtl-text" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="block font-medium text-gray-700">
                    الرسالة
                  </label>
                  <Textarea
                    id="message"
                    placeholder="اكتب رسالتك هنا..."
                    className="min-h-32 rtl-text"
                  />
                </div>
                <Button className="w-full bg-alward-primary hover:bg-alward-secondary text-white">
                  إرسال الرسالة
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
