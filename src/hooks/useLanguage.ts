
// Export just the list of languages for UI use
export const LANGUAGES = [
  { code: "en", name: "English", flag: "🇬🇧" },
  { code: "de", name: "Deutsch", flag: "🇩🇪" },
];

// Deprecated: this hook is no longer needed when using context everywhere.
export function useLanguage() {
  // You may remove this hook implementation in future refactors
  return {
    selectedLanguage: "en",
    setLanguage: () => {},
    languages: LANGUAGES,
  };
}
