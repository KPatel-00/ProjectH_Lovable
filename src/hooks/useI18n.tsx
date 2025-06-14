import React, { createContext, useContext, useState, useEffect } from "react";

type Language = "en" | "de"; // Add more as you expand

interface I18nContextValue {
  language: Language;
  setLanguage: (lang: Language) => void;
}

const I18nContext = createContext<I18nContextValue | undefined>(undefined);

export const I18nProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    return (localStorage.getItem("app_language") as Language) || "en";
  });

  useEffect(() => {
    localStorage.setItem("app_language", language);
  }, [language]);

  return (
    <I18nContext.Provider value={{ language, setLanguage }}>{children}</I18nContext.Provider>
  );
};

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within an I18nProvider");
  // DEBUG: log whenever the context is accessed
  console.log("[useI18n] useI18n called. Language is", ctx.language);
  return ctx;
}
