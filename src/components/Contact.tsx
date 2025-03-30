
import { useContext } from "react";
import { LanguageContext, translations } from "@/utils/language";
import { MapPin, Phone, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Contact = () => {
  const { language } = useContext(LanguageContext);
  const t = translations[language];

  return (
    <section id="contact" className="py-20 bg-amber-50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-red-800 mb-2">{t.contactTitle}</h2>
          <p className="text-gray-700">{t.contactSubtitle}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <Card className="bg-white shadow-md border-none hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <div className="text-center">
                <div className="mx-auto bg-red-50 w-12 h-12 flex items-center justify-center rounded-full mb-4">
                  <MapPin className="h-6 w-6 text-red-700" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{t.address}</h3>
                <p className="text-gray-700">
                  {t.addressText}
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-md border-none hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <div className="text-center">
                <div className="mx-auto bg-red-50 w-12 h-12 flex items-center justify-center rounded-full mb-4">
                  <Phone className="h-6 w-6 text-red-700" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{t.phone}</h3>
                <p className="text-gray-700">+886 4 2224 0272</p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-md border-none hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <div className="text-center">
                <div className="mx-auto bg-red-50 w-12 h-12 flex items-center justify-center rounded-full mb-4">
                  <Clock className="h-6 w-6 text-red-700" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{t.openingHours}</h3>
                <p className="text-gray-700 mb-1">{t.weekdays}</p>
                <p className="text-gray-700">{t.weekends}</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12">
          <div className="w-full h-96 rounded-lg overflow-hidden shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3640.6772756961295!2d120.68080587605675!3d24.14226417934151!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34693d0e39eb9e6d%3A0x8cb3c7a456c16b86!2sNo.%20123%2C%20Pingdeng%20Street%2C%20Central%20District%2C%20Taichung%20City%2C%20Taiwan%20400!5e0!3m2!1sen!2sus!4v1715097234956!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
