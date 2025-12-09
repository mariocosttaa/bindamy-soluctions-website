import { ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";

const HeroSection = () => {
  const { t } = useTranslation();
  
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden mesh-gradient">
      <div className="section-container w-full">
        <div className="max-w-5xl">
          {/* Overline */}
          <p className="text-sm font-medium text-primary mb-6 animate-fade-up">
            {t("hero.overline")}
          </p>

          {/* Main Headline */}
          <h1 className="text-display mb-8 animate-fade-up-delay-1">
            {t("hero.title")}
            <br />
            <span className="gradient-text">{t("hero.titleHighlight")}</span> {t("hero.titleEnd")}
          </h1>

          {/* Description */}
          <p className="text-body-large max-w-xl mb-12 animate-fade-up-delay-2">
            {t("hero.description")}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up-delay-3">
            <a href="#contact" className="btn-primary group">
              {t("hero.startProject")}
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a href="#work" className="btn-secondary">
              {t("hero.viewWork")}
            </a>
          </div>
        </div>

        {/* Stats Row */}
        <div className="mt-24 pt-12 border-t border-border">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "150+", label: t("hero.stats.projects") },
              { value: "98%", label: t("hero.stats.satisfaction") },
              { value: "50+", label: t("hero.stats.clients") },
              { value: "5+", label: t("hero.stats.years") },
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-3xl md:text-4xl font-semibold tracking-tight mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
