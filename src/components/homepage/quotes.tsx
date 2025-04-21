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

const Quotes = () => {
  return (
    <div className="mx-auto container bg-[#00142B] md:pb-36 w-screen pb-12 relative px-5 md:px-8 lg:px-20">
      <Carousel
        className="w-full max-w-4xl mx-auto"
        // plugins={[
        //   Autoplay({
        //     delay: 3000,
        //   }),
        // ]}
      >
        <CarouselContent>
          {quotes.map((quote, index) => (
            <CarouselItem key={index} className="flex items-center justify-center">
                <Card className="py-6 md:py-8 px-2 md:px-4 lg:px-8 min-h-[420px] flex items-center justify-center">
                  <CardContent className="grid grid-cols-1 md:grid-cols-3  gap-4 md:gap-6 lg:gap-8 pt-6 items-center">
                    {quote.img && (
                      <Image
                        key={quote.name}
                        unoptimized
                        src={quote.img.src}
                        alt={quote.name}
                        className="mx-auto"
                        height={quote.img.height}
                        width={quote.img.width}
                      />
                    )}
                    <div className="col-span-1 md:col-span-2">
                      <p className="text-lg pb-5">{quote.blurb}</p>
                      <p className="text-right text-orange uppercase font-extrabold text-sm">
                        {quote.authorName}
                      </p>
                      {quote.authorTitle && (
                        <p className="text-right text-orange uppercase font-extrabold text-sm">
                          {quote.authorTitle}
                        </p>
                      )}
                    </div>
                  </CardContent>
                </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious variant={'link'} />
        <CarouselNext variant={'link'} />
      </Carousel>
    </div>
  );
};

export default Quotes;
