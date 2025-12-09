import { useTranslation } from "react-i18next";

const AboutSection = () => {
  const { t } = useTranslation();
  
  return (
    <section id="about" className="section-padding bg-foreground text-background">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Content */}
          <div>
            <p className="text-sm font-medium text-primary mb-4">{t("about.overline")}</p>
            <h2 className="text-headline mb-8">
              {t("about.title")}
            </h2>
            <div className="space-y-6 text-background/70 text-lg leading-relaxed">
              <p>
                {t("about.description1")}
              </p>
              <p>
                {t("about.description2")}
              </p>
              <p>
                {t("about.description3")}
              </p>
            </div>
          </div>

          {/* Values */}
          <div className="space-y-8">
            {[
              {
                title: t("about.values.excellence.title"),
                description: t("about.values.excellence.description"),
              },
              {
                title: t("about.values.partnership.title"),
                description: t("about.values.partnership.description"),
              },
              {
                title: t("about.values.innovation.title"),
                description: t("about.values.innovation.description"),
              },
              {
                title: t("about.values.transparency.title"),
                description: t("about.values.transparency.description"),
              },
            ].map((value, i) => (
              <div key={i} className="border-l-2 border-primary pl-6">
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-background/60">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
