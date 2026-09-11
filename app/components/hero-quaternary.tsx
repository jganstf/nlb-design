import Image from "next/image";
import { EB_Garamond, DM_Mono } from "next/font/google";

const ebGaramond = EB_Garamond({
  variable: "--font-eb-garamond",
  subsets: ["latin"],
  weight: ["400"],
});

const dmMono = DM_Mono({
  variable: "--font-dm-mono",
  subsets: ["latin"],
  weight: ["400"],
});

type HeroQuaternaryProps = {
  eyebrow: string;
  title: string;
  backgroundImage: string;
  backgroundImageAlt?: string;
};

export function HeroQuaternary({
  eyebrow,
  title,
  backgroundImage,
  backgroundImageAlt = "",
}: HeroQuaternaryProps) {
  return (
    <div
      className={`${ebGaramond.variable} ${dmMono.variable} relative flex w-full items-start p-5 sm:p-10`}
    >
      <Image
        src={backgroundImage}
        alt={backgroundImageAlt}
        fill
        priority
        sizes="100vw"
        className="pointer-events-none object-cover"
      />
      <div className="relative flex h-[380px] w-full flex-col items-start justify-between overflow-hidden rounded-[4px] bg-[#f8f5f0] p-5 sm:w-[680px] sm:p-10">
        <svg
          aria-hidden
          className="pointer-events-none absolute -left-[244px] -top-[494px] h-[1281.317px] w-[1340.743px]"
          preserveAspectRatio="none"
          viewBox="0 0 1340.74 1281.32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g>
            <path
              d="M180.261 1113.55C249.227 1103.21 245.779 1068.15 292.331 1107.81C337.515 1146.3 402.102 1114.7 431.988 1104.36C461.873 1094.01 481.413 1077.92 528.54 1107.81C575.667 1137.69 558.426 1050.33 589.461 1026.2C620.495 1002.06 692.91 895.16 744.635 904.356C796.359 913.551 880.268 822.747 937.74 880.218C995.212 937.69 968.775 983.667 1013.6 989.415C1049.47 994.012 1109.77 991.33 1135.44 989.415"
              stroke="#DAD5D1"
            />
            <path
              d="M102.676 934.121C146.491 933.308 238.703 941.617 257.035 981.363C279.95 1031.04 357.701 1041.15 384.497 1031.04C419.874 1017.69 490.365 870.865 548.294 851.359C692.594 802.769 741.096 607.114 862.992 668.903C960.583 718.372 968.512 621.549 1046.12 628.232C1082.25 631.344 1130.32 555.264 1185.26 598.796C1204.73 614.215 1295.41 610.786 1313.33 731.036"
              stroke="#DAD5D1"
            />
            <path
              d="M1261.74 692.382C1220.45 677.695 1137.09 637.406 1133.95 593.749C1130.02 539.178 1060.83 502.305 1032.19 502.321C994.378 502.342 876.646 614.881 815.559 612.71C663.394 607.3 549.021 773.289 456.739 672.488C382.859 591.787 341.3 679.596 271.037 645.98C238.321 630.328 166.514 684.574 130.445 624.464C117.669 603.172 31.5979 574.406 57.2272 455.56"
              stroke="#DAD5D1"
            />
          </g>
        </svg>

        <p className="relative shrink-0 whitespace-nowrap font-[family-name:var(--font-dm-mono)] text-sm uppercase leading-[1.6] tracking-[2px] text-[#482f1a]">
          {eyebrow}
        </p>
        <p className="relative w-full shrink-0 font-[family-name:var(--font-eb-garamond)] text-[44px] leading-[1.1] text-[#482f1a] sm:text-[59px]">
          {title}
        </p>
      </div>
    </div>
  );
}
