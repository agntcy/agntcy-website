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
import AutoScroll from "embla-carousel-auto-scroll";
import { Marquee } from "components/ui/marquee";
import QuoteCard from "../reusables/quote-card";
import QuoteImg from "../reusables/quote-img";

const Quotes = () => {
  const third = Math.ceil(quotes.length / 3);
  const firstRow = quotes.slice(0, third);
  const secondRow = quotes.slice(third, third * 2);
  const thirdRow = quotes.slice(third * 2);
  return (
    <>
      <div className="container pb-8 md:pb-12 px-4">
        <h3 className="text-3xl md:text-5xl text-white">Why join AGNTCY?</h3>
      </div>
      <div className="mx-auto md:hidden bg-[#00142B] w-[calc(100vw-20px)]">
        <Carousel
          className="w-full mx-auto"
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
                <Card className="py-6 md:py-8 px-2 lg:px-8 min-h-[580px] md:min-h-[550px] lg:min-h-[420px] flex items-center justify-center">
                  <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8 pt-6 items-center">
                    {quote.img && (
                      <QuoteImg img={quote.img} name={quote.name} />
                    )}
                    <div className="col-span-1 md:col-span-2 flex flex-col justify-center gap-2">
                      <p className="text-sm sm:text-base md:text-lg pb-5">
                        {quote.blurb}
                      </p>
                      <div>
                        <p className="md:hidden text-right text-orange uppercase font-extrabold text-sm">
                          {quote.authorName &&
                            quote.authorName.split(",").map((part, index) => (
                              <span key={index} className="block">
                                {part.trim()}
                              </span>
                            ))}
                        </p>
                        {quote.authorName && (
                          <p className="max-md:hidden text-right text-orange uppercase font-extrabold text-sm">
                            {quote.authorName}
                          </p>
                        )}
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

      <div className="xl:container bg-[#00142B] md:pb-36 py-12 ">
        <div className="relative hidden md:flex h-[1100px] w-full flex-row items-center justify-center overflow-hidden">
          <Marquee pauseOnHover vertical className="[--duration:220s]">
            {firstRow.map((quote, i) => (
              <div key={`quote-1-${i}`}>
                <QuoteCard {...quote} />
              </div>
            ))}
          </Marquee>
          <Marquee reverse pauseOnHover vertical className="[--duration:220s]">
            {secondRow.map((quote, i) => (
              <div key={`quote-2-${i}`}>
                <QuoteCard {...quote} />
              </div>
            ))}
          </Marquee>
          <Marquee pauseOnHover vertical className="[--duration:220s]">
            {thirdRow.map((quote, i) => (
              <div key={`quote-1-${i}`}>
                <QuoteCard {...quote} />
              </div>
            ))}
          </Marquee>
          <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-navy"></div>
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-navy"></div>
        </div>
      </div>
    </>
  );
};

export default Quotes;
