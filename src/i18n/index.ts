import en from "./en";
import de from "./de";
import { useI18n } from "@/hooks/useI18n";

const resources: Record<string, any> = {
  en,
  de
};

type Namespace = "common";

function getTranslation(lang: string, ns: Namespace, key: string): string {
  return resources[lang]?.[ns]?.[key] || resources["en"][ns][key] || key;
}

// Refactored: the translation function will always use the latest "language" value from context
export function useT() {
  const { language } = useI18n();
  // DEBUG: log whenever useT is called and which language is used
  console.log("[useT] Hook called: language =", language);
  return (key: string, ns: Namespace = "common") => {
    // DEBUG: log every time a translation is fetched
    console.log(`[useT] Fetching "${key}" for language "${language}", ns = "${ns}"`);
    return getTranslation(language, ns, key);
  };
}
