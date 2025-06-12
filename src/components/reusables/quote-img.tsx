import Image from "next/image";
import { AspectRatio } from "components/ui/aspect-ratio";

const QuoteImg = ({
  img,
  name,
}: {
  img: { src: string; width: number; height: number };
  name: string;
}) => {
  return (
    <>
      <div
        className={`mx-auto flex items-center justify-start min-h-[100px] ${
          img.width / img.height > 2.2 ? "w-[200px] " : "w-[130px]"
        }`}
      >
        <AspectRatio ratio={img.width / img.height}>
          <Image unoptimized src={img.src} alt={name} fill />
        </AspectRatio>
      </div>
    </>
  );
};

export default QuoteImg;
