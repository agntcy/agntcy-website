import Quotes from "components/homepage/quotes";
import Hero from "components/homepage/hero";

export default function Home() {
  return (
    <div className="min-h-[calc(100vh-100px)] flex flex-col items-center justify-center">
      <Hero />
      <Quotes />
    </div>
  );
}
