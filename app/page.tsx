import VideoBand from "@/components/VideoBand";
import MissionStatement from "@/components/MissionStatement";

export default function Home() {
  return (
    <main>
      <VideoBand
        posterSrc="/images/hero-cyclists.png"
        posterAlt="Cyclists riding a dirt path through Nantucket conservation land at sunset"
        videoSrc="/videos/hero-cyclists.mp4"
      />
      <MissionStatement
        heading="Preserving Nantucket’s open spaces for the public while adapting to the island’s needs with balance, simplicity, and care."
        links={[
          { label: "Agriculture", href: "#" },
          { label: "Conservation", href: "#" },
          { label: "Recreation", href: "#" },
        ]}
      />
    </main>
  );
}
