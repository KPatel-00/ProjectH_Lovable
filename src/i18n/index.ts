
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

export function useT() {
  const { language } = useI18n();
  return (key: string, ns: Namespace = "common") => {
    return getTranslation(language, ns, key);
  };
}
