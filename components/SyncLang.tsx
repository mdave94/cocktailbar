"use client";

import { useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

export function SyncLang() {
  const { locale } = useLanguage();

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  return null;
}
