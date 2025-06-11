import { Card, CardContent } from "components/ui/card";
import QuoteImg from "./quote-img";

const QuoteCard = (quote: {
  name: string;
  img?: {
    src: string;
    width: number;
    height: number;
  };
  authorName?: string;
  authorTitle?: string;
  blurb: string;
}) => {
  return (
    <Card className="py-6 md:py-8 px-2 lg:px-8 min-h-[580px] md:min-h-[550px] lg:min-h-[420px] flex items-center justify-center">
      <CardContent className="flex flex-col gap-4 md:gap-6 lg:gap-8 pt-6 items-center">
        {quote.img && <QuoteImg img={quote.img} name={quote.name} />}
        <div className="col-span-1 md:col-span-2 flex flex-col justify-center gap-2">
          <div className="">
            <p className="md:hidden text-orange uppercase font-extrabold text-sm">
              {quote.authorName &&
                quote.authorName.split(",").map((part, index) => (
                  <span key={index} className="block">
                    {part.trim()}
                  </span>
                ))}
            </p>
            {quote.authorName && (
              <p className="max-md:hidden text-orange uppercase font-extrabold text-sm">
                {quote.authorName}
              </p>
            )}
            {quote.authorTitle && (
              <p className="text-orange uppercase font-extrabold text-sm">
                {quote.authorTitle}
              </p>
            )}
          </div>
          <p className="text-sm sm:text-base md:text-lg py-5">{quote.blurb}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default QuoteCard;
