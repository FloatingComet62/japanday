'use client'

import { useChangeLanguage, useT } from 'next-i18next/client'
import { Button } from './ui/button';
import { Globe } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipTrigger } from './ui/tooltip';

export function LanguageSwitcher() {
  const { i18n } = useT();
  const changeLanguage = useChangeLanguage()
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          className="h-10 rounded-xl bg-primary-container text-button font-button text-on-primary hover:bg-primary"
          onClick={() => {
            if (i18n.language == 'en') changeLanguage('ja');
            else changeLanguage('en');
          }}
        >
          <Globe />
        </Button>
      </TooltipTrigger>
      <TooltipContent>
      <p>Switch to {i18n.language == 'en' ? "Japanese" : "English"}</p>
      </TooltipContent>
    </Tooltip>
  )
}
