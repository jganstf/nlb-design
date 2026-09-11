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
      className={`faq-item flex w-full cursor-pointer flex-col items-start gap-8 overflow-clip rounded bg-surface-dark p-6 text-left ${className ?? ""}`}
      aria-expanded={open}
      aria-controls={answerId}
      onClick={() => setOpen((isOpen) => !isOpen)}
    >
      <span className="faq-item-header flex w-full flex-col items-start gap-3">
        <span className="faq-item-question-row flex w-full items-start gap-10">
          <span className="faq-item-question min-w-px flex-1 break-words font-mono text-body-base leading-[1.6] tracking-normal text-on-surface-dark">
            {question}
          </span>
          <Image
            src={open ? "/icons/chevron-up.svg" : "/icons/chevron-down.svg"}
            alt=""
            aria-hidden="true"
            width={24}
            height={24}
            className="faq-item-icon size-6 shrink-0"
          />
        </span>
      </span>
      {open && (
        <p
          id={answerId}
          className="faq-item-answer w-full font-sans text-body-base font-normal leading-[1.6] tracking-normal text-on-surface-dark"
        >
          {answer}
        </p>
      )}
    </button>
  );
}
