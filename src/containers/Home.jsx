import { Hero } from "../components/Hero/Hero";
import { PhotoDaySection } from "../components/PhotoDaySection/PhotoDaySection";
import { InfoNasaSection } from "../components/InfoNasaSection/InfoNasaSection";

export function Home() {
  return (
    <>
      <Hero />
      <PhotoDaySection />
      <InfoNasaSection />
    </>
  );
}
