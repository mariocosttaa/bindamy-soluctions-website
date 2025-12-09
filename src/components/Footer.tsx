import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Linkedin, Twitter, Github, Instagram } from "lucide-react";
import companyData from "@/data/company.json";

// Icon mapping for social media
const socialIconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Linkedin,
  Twitter,
  Github,
  Instagram,
};

const Footer = () => {
  const { t } = useTranslation();
  
  return (
    <footer className="py-16 border-t border-border">
      <div className="section-container">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <span className="text-xl font-semibold mb-4 block">
              {companyData.name.split(" ")[0]}
              <span className="text-primary">.</span>
            </span>
            <p className="text-muted-foreground text-sm max-w-md leading-relaxed mb-4">
              {t("footer.tagline")}
            </p>
            {/* Social Media */}
            <div className="flex gap-4">
              {companyData.socialMedia.map((social, i) => {
                const Icon = socialIconMap[social.icon] || Linkedin;
                return (
                  <a
                    key={i}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                    aria-label={social.name}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold mb-4">{t("footer.company")}</h4>
            <div className="flex flex-col gap-3 text-sm text-muted-foreground">
              {companyData.navigation.map((nav, i) => (
                <a
                  key={i}
                  href={nav.href}
                  className="hover:text-foreground transition-colors"
                >
                  {nav.label}
                </a>
              ))}
            </div>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">{t("footer.legal")}</h4>
            <div className="flex flex-col gap-3 text-sm text-muted-foreground">
              {companyData.legal.map((legal, i) => (
                <Link
                  key={i}
                  to={legal.href}
                  className="hover:text-foreground transition-colors"
                >
                  {legal.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            {t("footer.copyright")}
          </p>
          <p className="text-sm text-muted-foreground">
            {t("footer.builtWith")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;