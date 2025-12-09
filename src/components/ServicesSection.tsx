import { useMemo } from "react";
import { ArrowUpRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import servicesEn from "@/data/services.en.json";
import servicesPt from "@/data/services.pt.json";

const ServicesSection = () => {
  const { t, i18n } = useTranslation();
  
  // Load services data based on current language
  const servicesData = i18n.language === 'pt' ? servicesPt : servicesEn;
  
  const services = useMemo(() => servicesData, [servicesData]);

  return (
    <section id="services" className="section-padding bg-secondary/30">
      <div className="section-container">
        {/* Header */}
        <div className="max-w-3xl mb-20">
          <p className="text-sm font-medium text-primary mb-4">{t("services.overline")}</p>
          <h2 className="text-headline mb-6">
            {t("services.title")}
          </h2>
          <p className="text-body-large">
            {t("services.description")}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-px bg-border rounded-3xl overflow-hidden">
          {services.map((service, i) => (
            <div
              key={i}
              className="bg-background p-10 md:p-12 group cursor-pointer hover:bg-secondary/50 transition-colors duration-300"
            >
              <div className="flex items-start justify-between mb-8">
                <span className="text-sm text-muted-foreground font-medium">
                  {service.number}
                </span>
                <ArrowUpRight className="w-5 h-5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
