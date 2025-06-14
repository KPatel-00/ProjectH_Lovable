
import React from 'react';
import { Globe, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useI18n } from '@/hooks/useI18n';
import { useT } from "@/i18n";
import { toast } from "@/components/ui/use-toast";
import { LANGUAGES } from "@/hooks/useLanguage"; // Use exported languages

const LanguageSelector = () => {
  const { language, setLanguage } = useI18n();
  const t = useT();

  const currentLanguage = LANGUAGES.find(lang => lang.code === language);

  console.log("LanguageSelector re-rendered, language is:", language);

  const handleLanguageChange = (languageCode: string) => {
    setLanguage(languageCode as any); // type assertion for compatibility
    toast({
      title: t("languageChanged"),
      description: `${LANGUAGES.find(l => l.code === languageCode)?.name}`,
    });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="ghost" 
          size="sm" 
          className="flex items-center space-x-2 hover:bg-accent transition-colors px-3 py-2 h-9"
        >
          <Globe className="w-4 h-4" />
          <span className="flex items-center space-x-1">
            <span>{currentLanguage?.flag}</span>
            <span className="font-medium">{currentLanguage?.code.toUpperCase()}</span>
          </span>
          <ChevronDown className="w-3 h-3 opacity-60" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        align="end" 
        className="w-40 bg-background/95 backdrop-blur-md border shadow-lg z-50"
      >
        {LANGUAGES.map((language) => (
          <DropdownMenuItem
            key={language.code}
            onClick={() => handleLanguageChange(language.code)}
            className={`flex items-center space-x-2 cursor-pointer transition-colors ${
              language.code === currentLanguage?.code
                ? 'bg-accent text-accent-foreground'
                : 'hover:bg-accent hover:text-accent-foreground'
            }`}
          >
            <span>{language.flag}</span>
            <span>{language.name}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSelector;
