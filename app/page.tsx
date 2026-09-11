import VideoBand from "@/components/VideoBand";
import MissionStatement from "@/components/MissionStatement";
import CtaContact from "@/components/CtaContact";
import EventsPreview from "@/components/EventsPreview";
import NewsPreview from "@/components/NewsPreview";
import BasicLeftRight from "@/components/BasicLeftRight";
import HeroTertiary from "@/components/HeroTertiary";

export default function Home() {
  return (
    <>
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
      <NewsPreview
        heading="Nantucket News"
        articles={[
          {
            imageSrc: "/images/news-berries-carbon-study.jpg",
            imageAlt: "Close-up of dark blue berries on a green shrub",
            title:
              "New Study Highlights Carbon Storage Value of Nantucket's Moorland Ecosystems",
            category: "Conservation",
            date: "08/02/2026",
            href: "#",
          },
          {
            imageSrc: "/images/news-polpis-road.jpg",
            imageAlt: "A sandy path winding through moorland shrubland under a cloudy sky",
            title:
              "Polpis Road Farm Acquisition Preserves Working Agricultural Land for Future Generations",
            category: "Conservation",
            date: "07/12/2026",
            href: "#",
          },
        ]}
        ctaHeading="Check out what is happening with the latest NLB news."
        ctaLinkLabel="View all news"
        ctaHref="#"
      />
      <BasicLeftRight
        eyebrow="Property Transfers"
        heading="Getting Started with Property Transfers"
        sections={[
          {
            heading: "How It Works",
            body: "Everything you need to complete your Nantucket property transfer is on our site. Download the necessary forms, review our step-by-step transfer overview, and find answers to common questions in our FAQ section — all in one place. Whether you're navigating this for the first time or just need a quick refresher, we've made it as simple as possible to get done.",
          },
          {
            heading: "Basic Transfer Forms",
            body: "Starting your property transfer is straightforward — every transaction begins with Form 1, which is required for all transfers. If your sale involves an entity such as a trust, corporation, partnership, LLP, or LLC, you'll also need to complete Form 2 for each entity involved. Simply download the forms below, open them in Adobe Reader 9 or higher, and you're ready to get started. Have questions? Our team is happy to help — just reach out or browse the FAQ section for quick answers.",
          },
        ]}
        downloads={[
          { label: "Form 1 - Required for all transfers", href: "#" },
          {
            label: "Form 2 - Required when buyer and or/ seller is an entity",
            href: "#",
          },
        ]}
      />
      <EventsPreview
        eyebrow="Events - Upcoming"
        events={[
          {
            weekday: "Tues",
            day: "04",
            month: "Aug 2026",
            title: "Miacomet Golf Jamboree",
            time: "10:30 am - 3:00 pm",
            location: "Miacomet Golf Course",
            description:
              "A fun-filled day on the fairways of Miacomet Golf Course where golfers of all ages and abilities come together to enjoy one of the Land Bank's most beloved recreational properties and the sport that has been a part of Nantucket's culture for over a century.",
          },
          {
            weekday: "Wed",
            day: "22",
            month: "July 2026",
            title: "Coastal Cleanup Day",
            time: "10:30 am - 5:00 pm",
            location: "Cinco Beach",
            description:
              "A hands-on opportunity for islanders and visitors alike to give back to the shorelines and open spaces they love, rolling up their sleeves to protect Nantucket's coastal ecosystems for generations to come.",
          },
        ]}
      />
      <CtaContact />
      <HeroTertiary
        eyebrow="Events"
        heading="Our upcoming events"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat."
      />
    </>
  );
}
