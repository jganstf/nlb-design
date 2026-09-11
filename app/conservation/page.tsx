import { HeroQuaternary } from "../components/hero-quaternary";

export default function ConservationPage() {
  return (
    <div className="flex flex-1 flex-col">
      <HeroQuaternary
        eyebrow="Conservation"
        title="Protecting the island we call home."
        backgroundImage="/hero-quaternary/background.jpg"
        backgroundImageAlt="Historic aerial illustration of the Nantucket harbor and coastline"
      />
    </div>
  );
}
