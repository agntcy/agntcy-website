"use client";
import { Card, CardContent } from "components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "components/ui/carousel";
import { quotes } from "data/members";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import { AspectRatio } from "components/ui/aspect-ratio";

const Quotes = () => {
  return (
    <div className="mx-auto container bg-[#00142B] md:pb-36 w-screen pb-12 relative px-5 md:px-8 lg:px-20">
      <Carousel
        className="w-full max-w-4xl mx-auto"
        plugins={[
          Autoplay({
            delay: 3000,
          }),
        ]}
      >
        <CarouselContent className="max-md:pb-5">
          {quotes.map((quote, index) => (
            <CarouselItem
              key={index}
              className="flex items-center justify-center"
            >
              <Card className="py-6 md:py-8 px-2 md:px-4 lg:px-8 min-h-[420px] flex items-center justify-center">
                <CardContent className="grid grid-cols-1 md:grid-cols-3  gap-4 md:gap-6 lg:gap-8 pt-6 items-center">
                  {quote.img && (
                    <div
                      className={`mx-auto flex items-center  min-h-[100px] ${
                        quote.img.width / quote.img.height > 2.2
                          ? "w-[200px] "
                          : "w-[130px]"
                      }`}
                    >
                      <AspectRatio ratio={quote.img.width / quote.img.height}>
                        <Image
                          key={quote.name}
                          unoptimized
                          src={quote.img.src}
                          alt={quote.name}
                          fill
                        />
                      </AspectRatio>
                    </div>
                  )}
                  <div className="col-span-1 md:col-span-2 flex flex-col justify-center gap-2">
                    <p className="md:text-lg pb-5">{quote.blurb}</p>
                    <div className="">
                      <p className="md:hidden text-right text-orange uppercase font-extrabold text-sm">
                        {quote.authorName.split(",").map((part, index) => (
                          <span key={index} className="block">
                            {part.trim()}
                          </span>
                        ))}
                      </p>
                      <p className="max-md:hidden text-right text-orange uppercase font-extrabold text-sm">
                        {quote.authorName}
                      </p>
                      {quote.authorTitle && (
                        <p className="text-right text-orange uppercase font-extrabold text-sm">
                          {quote.authorTitle}
                        </p>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious variant={"link"} />
        <CarouselNext variant={"link"} />
      </Carousel>
    </div>
  );
};

export default Quotes;
