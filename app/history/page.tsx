import HeroQuaternary from "@/components/HeroQuaternary";
import HistorySlider from "@/components/HistorySlider";

// Hardcoded history events, ordered as they appear in the slider (most recent
// first). `lineLength` reproduces the varying connector-line heights from the
// Figma design (an organic, non-uniform rhythm rather than a rigid grid).
const historyEvents = [
  {
    year: "2020",
    title: "Event title",
    description: "This really cool thing happened on this date in Nantucket and nobody was ever the same",
    lineLength: 220,
  },
  {
    year: "2010",
    title: "Event title",
    description: "This really cool thing happened on this date in Nantucket and nobody was ever the same",
    lineLength: 333,
  },
  {
    year: "2009",
    title: "Event title",
    description: "This really cool thing happened on this date in Nantucket and nobody was ever the same",
    lineLength: 239,
  },
  {
    year: "2000",
    title: "Event title",
    description: "This really cool thing happened on this date in Nantucket and nobody was ever the same",
    lineLength: 279,
  },
  {
    year: "1984",
    title: "Event title",
    description: "This really cool thing happened on this date in Nantucket and nobody was ever the same",
    lineLength: 184,
  },
  {
    year: "1970",
    title: "Event title",
    description: "This really cool thing happened on this date in Nantucket and nobody was ever the same",
    lineLength: 301,
  },
  {
    year: "1955",
    title: "Event title",
    description: "This really cool thing happened on this date in Nantucket and nobody was ever the same",
    lineLength: 210,
  },
  {
    year: "1901",
    title: "Event title",
    description: "This really cool thing happened on this date in Nantucket and nobody was ever the same",
    lineLength: 349,
  },
  {
    year: "1850",
    title: "Event title",
    description: "This really cool thing happened on this date in Nantucket and nobody was ever the same",
    lineLength: 197,
  },
  {
    year: "1795",
    title: "Event title",
    description: "This really cool thing happened on this date in Nantucket and nobody was ever the same",
    lineLength: 265,
  },
];

export default function HistoryPage() {
  return (
    <>
      <HeroQuaternary
        eyebrow="History"
        title="A look back at the Land Bank's story."
        backgroundImage="/hero-quaternary/background.jpg"
        backgroundImageAlt="Historic aerial illustration of the Nantucket harbor and coastline"
      />
      <HistorySlider events={historyEvents} />
    </>
  );
}
