import Image from "next/image";
import { AspectRatio } from "components/ui/aspect-ratio";
import { cn } from "lib/utils";

const RenderLogos = (
  logos: {
    name: string;
    src: string;
    width: number;
    height: number;
  }[],
  className: string
) => {
  return logos.map((logo, i) => (
    <div
      key={i}
      className={cn("w-full flex items-center md:justify-center", className)}
    >
      <div style={{ width: logo.width, height: logo.height }}>
        <AspectRatio ratio={logo.width / logo.height}>
          <Image
            key={logo.name}
            unoptimized
            src={logo.src}
            alt={logo.name}
            fill
          />
        </AspectRatio>
      </div>
    </div>
  ));
};

export default RenderLogos;