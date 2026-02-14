import { LanguageProvider } from "@/contexts/LanguageContext";
import { LandingPage } from "@/components/LandingPage";
import { SyncLang } from "@/components/SyncLang";

export default function Home() {
  return (
    <LanguageProvider>
      <SyncLang />
      <LandingPage />
    </LanguageProvider>
  );
}
