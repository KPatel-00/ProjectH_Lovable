import React from 'react';
import { Globe, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useLanguage } from '@/hooks/useLanguage';
import { useT } from "@/i18n";
import { toast } from "@/components/ui/use-toast";

const LanguageSelector = () => {
  const { selectedLanguage, setLanguage, languages } = useLanguage();
  const t = useT();

  const currentLanguage = languages.find(lang => lang.code === selectedLanguage);

  const handleLanguageChange = (languageCode: string) => {
    setLanguage(languageCode);
    toast({
      title: t("languageChanged"),
      description: `${languages.find(l => l.code === languageCode)?.name}`,
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
        {languages.map((language) => (
          <DropdownMenuItem
            key={language.code}
            onClick={() => handleLanguageChange(language.code)}
            className={`flex items-center space-x-2 cursor-pointer transition-colors ${
              selectedLanguage === language.code 
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
