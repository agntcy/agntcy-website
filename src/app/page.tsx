import Quotes from "components/homepage/quotes";
import Hero from "components/homepage/hero";
import { Downloadable } from "~/components/homepage/downloadable";

export default function Home() {
  return (
    <div className="min-h-[calc(100vh-100px)] flex flex-col items-center justify-center bg-bg">
      <Hero />
      <Downloadable />
      <Quotes />
      <div className="bg-gradient-to-t from-bg to-bg h-10 w-full"></div>
    </div>
  );
}
