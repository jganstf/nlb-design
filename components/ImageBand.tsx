import Image from "next/image";

type ImageBandProps = {
  imageSrc: string;
  imageAlt?: string;
  className?: string;
};

export default function ImageBand({
  imageSrc,
  imageAlt = "",
  className,
}: ImageBandProps) {
  return (
    <div
      className={`image-band relative aspect-[1440/800] w-full overflow-clip ${className ?? ""}`}
    >
      <Image src={imageSrc} alt={imageAlt} fill sizes="100vw" className="object-cover" />
    </div>
  );
}
