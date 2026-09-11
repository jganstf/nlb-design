"use client";

import { useId, useState } from "react";
import Image from "next/image";

type FaqItemProps = {
  question: string;
  answer: string;
  defaultOpen?: boolean;
  className?: string;
};

export default function FaqItem({
  question,
  answer,
  defaultOpen = false,
  className,
}: FaqItemProps) {
  const [open, setOpen] = useState(defaultOpen);
  const answerId = useId();

  return (
    <button
      type="button"
      className={className ? `faq-item ${className}` : "faq-item"}
      aria-expanded={open}
      aria-controls={answerId}
      onClick={() => setOpen((isOpen) => !isOpen)}
    >
      <span className="faq-item-header">
        <span className="faq-item-question-row">
          <span>{question}</span>
          <Image
            src={open ? "/icons/chevron-up.svg" : "/icons/chevron-down.svg"}
            alt=""
            aria-hidden="true"
            width={24}
            height={24}
          />
        </span>
      </span>
      {open && (
        <p id={answerId} className="faq-item-answer">
          {answer}
        </p>
      )}
    </button>
  );
}
