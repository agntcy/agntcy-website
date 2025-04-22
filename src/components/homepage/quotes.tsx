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
import AutoScroll from "embla-carousel-auto-scroll";
import { AspectRatio } from "components/ui/aspect-ratio";

const Quotes = () => {
  return (
    <div className="mx-auto xl:container bg-[#00142B] md:pb-36 w-screen pb-12 relative ">
      <div className="max-md:hidden pointer-events-none absolute inset-y-0 left-0 w-1/12 bg-gradient-to-r from-[#00142B] to-[#00142b00] z-30"></div>
      <div className="max-md:hidden pointer-events-none absolute inset-y-0 right-0 w-1/12 bg-gradient-to-l from-[#00142B] to-[#00142b00] z-30"></div>
      <Carousel
        className="w-full mx-auto "
        plugins={[
          AutoScroll({
            speed: 1.2,
            stopOnInteraction: false,
          }),
        ]}
        opts={{ loop: true }}
      >
        <CarouselContent className="pb-8 md:pb-5">
          {quotes.map((quote, index) => (
            <CarouselItem
              key={index}
              className="flex items-center justify-center basis-[90%] lg:basis-[80%]"
            >
              <Card className="py-6 md:py-8 px-2 lg:px-8 min-h-[580px] md:min-h-[550px] lg::min-h-[420px] flex items-center justify-center">
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
                    <p className="text-sm sm:text-base md:text-lg pb-5">{quote.blurb}</p>
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
