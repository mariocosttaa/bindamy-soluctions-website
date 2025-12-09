import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Globe, Check } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const languages = [
  { code: "en", name: "English", flag: "🇺🇸", nativeName: "English" },
  { code: "pt", name: "Português", flag: "🇵🇹", nativeName: "Português (PT)" },
];

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  // Normalize language code (pt-PT, pt-BR, pt -> pt)
  const normalizeLang = (lang: string) => {
    if (lang.startsWith('pt')) return 'pt';
    return lang;
  };

  const currentLangCode = normalizeLang(i18n.language);
  const currentLanguage = languages.find((lang) => lang.code === currentLangCode) || languages[0];

  const changeLanguage = (langCode: string) => {
    i18n.changeLanguage(langCode);
    setIsOpen(false);
    // Smooth scroll to top on language change for better UX
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!mounted) {
    return (
      <div className="flex items-center gap-2 px-3 py-2 rounded-lg">
        <Globe className="w-4 h-4" />
        <span className="text-sm font-medium hidden sm:inline">🇺🇸</span>
      </div>
    );
  }

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <button
          className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-secondary transition-all duration-200 hover:scale-105 active:scale-95"
          aria-label={`Change language. Current: ${currentLanguage.name}`}
          aria-expanded={isOpen}
        >
          <Globe className="w-4 h-4 transition-transform duration-200 group-hover:rotate-12" />
          <span className="text-sm font-medium hidden sm:inline">
            <span className="mr-1.5">{currentLanguage.flag}</span>
            {currentLanguage.name}
          </span>
          <span className="text-sm font-medium sm:hidden" aria-hidden="true">
            {currentLanguage.flag}
          </span>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-52">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => changeLanguage(lang.code)}
            className="flex items-center justify-between cursor-pointer transition-colors"
            disabled={currentLangCode === lang.code}
          >
            <span className="flex items-center gap-3">
              <span className="text-lg">{lang.flag}</span>
              <div className="flex flex-col">
                <span className="font-medium">{lang.name}</span>
                {lang.nativeName && lang.nativeName !== lang.name && (
                  <span className="text-xs text-muted-foreground">{lang.nativeName}</span>
                )}
              </div>
            </span>
            {currentLangCode === lang.code && (
              <Check className="w-4 h-4 text-primary" aria-hidden="true" />
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSwitcher;

