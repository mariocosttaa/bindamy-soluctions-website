import { useTranslation } from "react-i18next";
import partnersData from "@/data/partners.json";

const TrustedBySection = () => {
  const { t } = useTranslation();
  const partners = partnersData;

  // Duplicate partners for seamless infinite scroll
  const duplicatedPartners = [...partners, ...partners];

  return (
    <section className="py-20 border-b border-border overflow-hidden">
      <div className="section-container">
        <p className="text-sm text-muted-foreground text-center mb-12">
          {t("partners.title")}
        </p>
      </div>
      <div className="relative w-full">
        {/* Gradient overlays for smooth fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
        
        {/* Scrolling container - full width */}
        <div className="flex animate-scroll-horizontal gap-12 md:gap-16 lg:gap-20">
          {duplicatedPartners.map((partner, i) => (
            <div
              key={`${partner.name}-${i}`}
              className="flex-shrink-0 flex items-center justify-center"
            >
              <img
                src={partner.image}
                alt={partner.name}
                className="h-16 md:h-20 lg:h-24 w-32 md:w-40 lg:w-48 object-contain opacity-60 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBySection;
