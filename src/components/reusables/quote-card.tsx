import { Card, CardContent } from "components/ui/card";
import QuoteImg from "./quote-img";
import QuoteAuthor from "../reusables/quote-title";

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
        <div className=" flex flex-col justify-center gap-2">
          <div className="">
            <QuoteAuthor quote={quote} right={false} />
          </div>
          <p className="text-sm sm:text-base md:text-lg py-5">{quote.blurb}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default QuoteCard;
