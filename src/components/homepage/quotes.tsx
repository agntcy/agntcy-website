import { quotes as InitialQuotes } from "~/data/members";
import { fetchQuotes } from "~/lib/supporters";
import QuotesClient from "./quotes-client";

const Quotes = async () => {
  const data = await fetchQuotes();

  return (
    <>
      <QuotesClient data={data || InitialQuotes} />
    </>
  );
};

export default Quotes;
