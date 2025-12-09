import { useState } from "react";
import { ArrowRight, Mail, MapPin, MessageCircle } from "lucide-react";
import { useTranslation } from "react-i18next";

const ContactSection = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create email subject
    const subject = `Contact Form: ${formData.name}${formData.company ? ` - ${formData.company}` : ''}`;
    
    // Create email body with all form data
    const emailBody = `Hello Bindamy Team,

I would like to get in touch regarding:

${formData.message}

---
Contact Information:
Name: ${formData.name}
Email: ${formData.email}
${formData.company ? `Company: ${formData.company}` : ''}
`;

    // Encode the email components for mailto link
    const encodedSubject = encodeURIComponent(subject);
    const encodedBody = encodeURIComponent(emailBody);
    
    // Create mailto link
    const mailtoLink = `mailto:support@bindamy.site?subject=${encodedSubject}&body=${encodedBody}`;
    
    // Open the user's default email client
    window.location.href = mailtoLink;
    
    // Clear the form after opening email client
    setFormData({ name: "", email: "", company: "", message: "" });
  };

  return (
    <section id="contact" className="section-padding">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Content */}
          <div>
            <p className="text-sm font-medium text-primary mb-4">{t("contact.overline")}</p>
            <h2 className="text-headline mb-8">
              {t("contact.title")}
            </h2>
            <p className="text-body-large mb-12">
              {t("contact.description")}
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-secondary flex items-center justify-center">
                  <Mail className="w-5 h-5 text-muted-foreground" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{t("contact.email")}</p>
                  <a href="mailto:support@bindamy.site" className="font-medium hover:text-primary transition-colors">
                    support@bindamy.site
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#25D366] flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{t("contact.whatsapp")}</p>
                  <a 
                    href="https://wa.me/351969313699?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20da%20Bindamy."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium hover:text-primary transition-colors"
                  >
                    +351 969 313 699
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-secondary flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-muted-foreground" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{t("contact.location")}</p>
                  <p className="font-medium">{t("contact.locationValue")}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">{t("contact.form.name")}</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl border border-border bg-transparent focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                    placeholder={t("contact.form.namePlaceholder")}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">{t("contact.form.email")}</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl border border-border bg-transparent focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                    placeholder={t("contact.form.emailPlaceholder")}
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">{t("contact.form.company")}</label>
                <input
                  type="text"
                  value={formData.company}
                  onChange={(e) =>
                    setFormData({ ...formData, company: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl border border-border bg-transparent focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                  placeholder={t("contact.form.companyPlaceholder")}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  {t("contact.form.message")}
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-transparent focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none"
                  placeholder={t("contact.form.messagePlaceholder")}
                  required
                />
              </div>
              <button 
                type="submit" 
                className="btn-primary w-full sm:w-auto group"
              >
                {t("contact.form.submit")}
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
