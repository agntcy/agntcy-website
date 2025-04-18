import Image from "next/image";

const RenderLogos = (
    logos: {
      name: string;
      src: string;
      width: number;
      height: number;
    }[],
    className: string,
  ) => {
    return logos.map((logo, i) => (
      <div key={i} className={className}>
        <Image
          key={logo.name}
          unoptimized
          src={logo.src}
          alt={logo.name}
          className="pt-3"
          height={logo.height}
          width={logo.width}
        />
      </div>
    ));
  };

  export default RenderLogos;
  
