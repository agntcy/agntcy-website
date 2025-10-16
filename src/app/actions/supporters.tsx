'use server';
import { logos, quotes } from "~/data/members";

export async function fetchLogo() {
  const fetchLogo  = await fetch(
    "https://script.google.com/macros/s/AKfycbylpZlLnYDajqAWJEQlp9N8k0yazOemGufYpehoxB12oo_aL3lN2wQW0xpGc4AcWab8/exec",
    {
    next: { revalidate: 3600 }
    }
  );
  const newLogos = await fetchLogo.json();
  console.log(newLogos?.data);
  
  newLogos.data.map((logo: Logo) => logos.push(logo));
  const uniqueLogosMap = new Map<string, Logo>();
  logos.forEach((logo: Logo) => {
    if (!uniqueLogosMap.has(logo.name)) {
      uniqueLogosMap.set(logo.name, logo);
    }
  });
  const uniqueLogos = Array.from(uniqueLogosMap.values());
  console.log("Length: ", uniqueLogos.length);
  
  return uniqueLogos;
}

export async function fetchQuotes() {  
    const uniqueLogos = await fetchLogo();
    const uniqueQuotes= quotes;
    
    const fetchQuotes  = await fetch(
      "https://script.google.com/macros/s/AKfycbz0neq7L4iBf_UZHqh40l7lsl5pmW14Yoin0LOHgMzjOVupr9EKPZWomubgNUdVKBscSQ/exec"
        , { next: { revalidate: 3600 } }
    );
    const newQuotes = await fetchQuotes.json();

    newQuotes.data.forEach((quote: Quotes) => {
    // Update the image field before pushing
    quote.img = uniqueLogos.find((logo) => logo.name === quote?.name) || quote.img;
    uniqueQuotes.push(quote);
    });

    const filteredQuotes = Array.from(
      new Map(uniqueQuotes.map(q => [q.name, q])).values()
    );
    
    return filteredQuotes as Quotes[];
}
