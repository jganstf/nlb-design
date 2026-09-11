import Image from "next/image";
import HeroQuaternary from "@/components/HeroQuaternary";
import FaqItem from "@/components/FaqItem";

const GENERAL_FAQS = [
  {
    question: "Where can I get paper maps?",
    answer:
      "Paper maps are available at our office at 22 Broad Street, Nantucket, MA during regular office hours.",
  },
  {
    question:
      "What is the best way to notify the Land Bank that there is an issue on one of the properties?",
    answer:
      "To report an issue call (508) 228-7240 or email us at info@nantucketlandbank.org",
  },
  {
    question: "Does the land bank have a lost and found?",
    answer:
      "Yes, please call our office at (508) 228-7240 to check on any lost items found on Land Bank properties.",
  },
  {
    question:
      "What is the best way to notify the Land Bank that there is an issue on one of the properties?",
    answer:
      "To report an issue call (508) 228-7240 or email us at info@nantucketlandbank.org",
  },
];

const FORM_FILING_FAQS = [
  {
    question: "Can I process my forms by mail?",
    answer:
      "Yes, forms can be mailed to 22 Broad Street, Nantucket, MA 02554. Please allow additional processing time for mailed submissions.",
  },
  {
    question:
      "How is the Land Bank fee calculated and who is responsible for its payment?",
    answer:
      "To report an issue call (508) 228-7240 or email us at info@nantucketlandbank.org",
    defaultOpen: true,
  },
  {
    question: "What is the current first-time home buyers exemption amount?",
    answer:
      "Please contact our office at (508) 228-7240 or info@nantucketlandbank.org for the current exemption amount.",
  },
];

export default function FaqsPage() {
  return (
    <>
      <HeroQuaternary
        eyebrow="FAQs"
        title="Have questions? We have the answers."
        backgroundImage="/images/hero-faqs.png"
        backgroundImageAlt="Wildflowers on a Nantucket conservation property"
      />
      <section className="faq-section relative flex w-full overflow-clip bg-background px-10 py-24">
        <Image
          src="/svg/decorative-line-faqs.svg"
          alt=""
          aria-hidden="true"
          width={2102}
          height={284}
          className="faq-section-line pointer-events-none absolute top-48 left-1/2 z-0 w-[150%] max-w-none -translate-x-1/2"
        />
        <div className="faq-section-inner relative z-10 mx-auto flex w-full max-w-[85rem] flex-col items-start gap-10 lg:flex-row lg:flex-wrap lg:justify-between">
          <h2 className="faq-section-title text-headline-xl leading-none text-on-background">
            FAQs
          </h2>
          <div className="faq-groups flex max-w-[42rem] flex-col items-start gap-16">
            <div className="faq-group flex w-full flex-col items-start gap-6">
              <h3 className="faq-group-title text-headline-base text-on-background">
                General FAQ
              </h3>
              <div className="faq-group-list flex w-full flex-col items-start gap-5">
                {GENERAL_FAQS.map((faq) => (
                  <FaqItem key={faq.question} {...faq} />
                ))}
              </div>
            </div>
            <div className="faq-group flex w-full flex-col items-start gap-6">
              <h3 className="faq-group-title text-headline-base text-on-background">
                Form Filing
              </h3>
              <div className="faq-group-list flex w-full flex-col items-start gap-5">
                {FORM_FILING_FAQS.map((faq) => (
                  <FaqItem key={faq.question} {...faq} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
