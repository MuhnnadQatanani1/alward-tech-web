
import React from "react";
import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useLanguage } from "@/contexts/LanguageContext";

const Contact = () => {
  const { t, language } = useLanguage();
  const rtlClass = language === "ar" ? "rtl-text" : "";
  
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 ${rtlClass}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-alward-primary font-tajawal inline-block relative">
            {t("تواصل معنا", "Contact Us")}
            <span className="absolute -bottom-3 left-0 right-0 h-1 bg-alward-accent"></span>
          </h2>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-lg font-tajawal">
            {t(
              "نحن هنا للإجابة على جميع استفساراتكم ومساعدتكم في تطوير مشاريعكم البرمجية",
              "We are here to answer all your inquiries and help you develop your software projects"
            )}
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-12">
          <div className={`md:w-1/2 ${rtlClass}`}>
            <h3 className="text-2xl font-bold mb-6 text-alward-primary">{t("معلومات التواصل", "Contact Information")}</h3>
            <div className="space-y-6">
              <div className="flex items-center">
                <div className={`bg-alward-light p-3 rounded-full ${language === "ar" ? "ml-4" : "mr-4"}`}>
                  <Mail className="h-6 w-6 text-alward-primary" />
                </div>
                <div>
                  <p className="text-gray-500 text-sm">{t("البريد الإلكتروني", "Email")}</p>
                  <p className="font-medium">muhnnadqatanani123@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className={`bg-alward-light p-3 rounded-full ${language === "ar" ? "ml-4" : "mr-4"}`}>
                  <Phone className="h-6 w-6 text-alward-primary" />
                </div>
                <div>
                  <p className="text-gray-500 text-sm">{t("رقم الهاتف", "Phone Number")}</p>
                  <p className="font-medium">+970 568512074</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className={`bg-alward-light p-3 rounded-full ${language === "ar" ? "ml-4" : "mr-4"}`}>
                  <MapPin className="h-6 w-6 text-alward-primary" />
                </div>
                <div>
                  <p className="text-gray-500 text-sm">{t("العنوان", "Address")}</p>
                  <p className="font-medium">{t("نابلس، فلسطين", "Nablus, Palestine")}</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className={`bg-alward-light p-3 rounded-full ${language === "ar" ? "ml-4" : "mr-4"}`}>
                  <Linkedin className="h-6 w-6 text-alward-primary" />
                </div>
                <div>
                  <p className="text-gray-500 text-sm">{t("لينكد إن", "LinkedIn")}</p>
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
                <div className={`bg-alward-light p-3 rounded-full ${language === "ar" ? "ml-4" : "mr-4"}`}>
                  <Github className="h-6 w-6 text-alward-primary" />
                </div>
                <div>
                  <p className="text-gray-500 text-sm">{t("جيت هاب", "GitHub")}</p>
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
            <form className={`bg-white rounded-lg shadow-xl p-8 ${rtlClass}`}>
              <h3 className="text-2xl font-bold mb-6 text-alward-primary">{t("أرسل لنا رسالة", "Send us a message")}</h3>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="block font-medium text-gray-700">
                      {t("الاسم", "Name")}
                    </label>
                    <Input id="name" placeholder={t("أدخل اسمك الكامل", "Enter your full name")} className={rtlClass} />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="block font-medium text-gray-700">
                      {t("البريد الإلكتروني", "Email")}
                    </label>
                    <Input id="email" type="email" placeholder={t("أدخل بريدك الإلكتروني", "Enter your email")} className={rtlClass} />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="block font-medium text-gray-700">
                    {t("الموضوع", "Subject")}
                  </label>
                  <Input id="subject" placeholder={t("موضوع الرسالة", "Message subject")} className={rtlClass} />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="block font-medium text-gray-700">
                    {t("الرسالة", "Message")}
                  </label>
                  <Textarea
                    id="message"
                    placeholder={t("اكتب رسالتك هنا...", "Write your message here...")}
                    className={`min-h-32 ${rtlClass}`}
                  />
                </div>
                <Button className="w-full bg-alward-primary hover:bg-alward-secondary text-white">
                  {t("إرسال الرسالة", "Send Message")}
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
