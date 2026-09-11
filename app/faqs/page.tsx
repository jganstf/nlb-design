import Image from "next/image";
import HeroTertiary from "@/components/HeroTertiary";
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
      <HeroTertiary
        eyebrow="FAQs"
        heading="Have questions? We have the answers."
        imageSrc="/images/hero-faqs.png"
        imageAlt="Wildflowers on a Nantucket conservation property"
      />
      <section className="faq-section">
        <Image
          src="/svg/decorative-line-faqs.svg"
          alt=""
          aria-hidden="true"
          width={2102}
          height={284}
          className="faq-section-line"
        />
        <div className="faq-section-inner">
          <h2 className="faq-section-title">FAQs</h2>
          <div className="faq-groups">
            <div className="faq-group">
              <h3 className="faq-group-title">General FAQ</h3>
              <div className="faq-group-list">
                {GENERAL_FAQS.map((faq) => (
                  <FaqItem key={faq.question} {...faq} />
                ))}
              </div>
            </div>
            <div className="faq-group">
              <h3 className="faq-group-title">Form Filing</h3>
              <div className="faq-group-list">
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
