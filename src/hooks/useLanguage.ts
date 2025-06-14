
import { useState } from "react";

// Extend and expose your supported languages easily here
export const LANGUAGES = [
  { code: "en", name: "English", flag: "🇬🇧" },
  { code: "de", name: "Deutsch", flag: "🇩🇪" },
];

export function useLanguage() {
  const [selectedLanguage, setSelectedLanguage] = useState(
    localStorage.getItem("app_language") || "en"
  );

  const setLanguage = (lang: string) => {
    setSelectedLanguage(lang);
    localStorage.setItem("app_language", lang);
    // Optionally: Event system or context to signal language change globally
  };

  return {
    selectedLanguage,
    setLanguage,
    languages: LANGUAGES,
  };
}
