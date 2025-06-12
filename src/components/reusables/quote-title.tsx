const QuoteAuthor = ({
  quote,
  right = true,
}: {
  quote: {
    name: string;
    img?: {
      src: string;
      width: number;
      height: number;
    };
    authorName?: string;
    authorTitle?: string;
    blurb: string;
  };
  right?: boolean;
}) => {
  return (
    <>
      <p
        className={`md:hidden ${
          right && "text-right"
        } text-orange uppercase font-extrabold text-base md:text-lg`}
      >
        {quote.authorName &&
          quote.authorName.split(",").map((part, index) => (
            <span key={index} className="block">
              {part.trim()}
            </span>
          ))}
      </p>
      {quote.authorName && (
        <p
          className={`max-md:hidden ${
            right && "text-right"
          } text-orange uppercase font-extrabold text-base md:text-lg`}
        >
          {quote.authorName}
        </p>
      )}
      {quote.authorTitle && (
        <p
          className={`${
            right && "text-right"
          } text-orange uppercase font-extrabold text-base md:text-lg`}
        >
          {quote.authorTitle}
        </p>
      )}
    </>
  );
};

export default QuoteAuthor;
