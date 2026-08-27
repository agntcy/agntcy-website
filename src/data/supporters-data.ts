export type Company = {
  name: string;
  logo: string;
  url?: string;
};

export type Testimonial = {
  name: string;
  title: string;
  company: Company;
  quote: string;
};

export const sectionTabs = [
  { label: "Supporters", href: "#supporters" },
  { label: "Technical Steering Committee", href: "#tsc" },
  { label: "They say about us", href: "#testimonials" },
] as const;

export const supporters: Company[] = [
  { name: "Advensis", logo: "/images/Advensis.png", url: "https://www.advensis.com" },
  { name: "AG2", logo: "/images/AG2-logo.png", url: "https://ag2.ai" },
  { name: "AIPlotch", logo: "/images/plotch.png", url: "https://www.aiplotch.com" },
  { name: "Aisera", logo: "/images/aisera.png", url: "https://aisera.com" },
  { name: "Anon", logo: "/images/anon-logo.png", url: "https://www.anon.com" },
  { name: "AnyWeb", logo: "/images/anyweb.png", url: "https://www.anyweb.com" },
  { name: "ArcBlock", logo: "/images/ArcBlock.svg", url: "https://www.arcblock.io" },
  { name: "Arize AI", logo: "/images/arizeAI.png", url: "https://arize.com" },
  { name: "Aviz Networks", logo: "/images/aviz.png", url: "https://www.aviznetworks.com" },
  { name: "Beam AI", logo: "/images/beam.png", url: "https://www.beam.ai" },
  { name: "Boomi", logo: "/images/Boomi_2.png", url: "https://boomi.com" },
  { name: "BrowserBase", logo: "/images/BrowserBase.png", url: "https://www.browserbase.com" },
  { name: "Ciroos", logo: "/images/ciroos.png", url: "https://www.ciroos.ai" },
  { name: "Comet", logo: "/images/comet.png", url: "https://www.comet.com" },
  { name: "CrewAI", logo: "/images/CrewAI-logo.png", url: "https://www.crewai.com" },
  { name: "Dagger", logo: "/images/dagger.png", url: "https://dagger.io" },
  { name: "Duo", logo: "/images/duo.svg", url: "https://duo.com" },
  { name: "Dynamiq", logo: "/images/Dynamiq_Logo.png", url: "https://www.getdynamiq.ai" },
  { name: "Ema", logo: "/images/ema.png", url: "https://www.ema.co" },
  { name: "FabrixAI", logo: "/images/fabrix-ai.png", url: "https://www.fabrix.ai" },
  { name: "Galileo", logo: "/images/Galileo.png", url: "https://galileo.ai" },
  { name: "Glean", logo: "/images/Glean.svg", url: "https://www.glean.com" },
  { name: "Haize Labs", logo: "/images/haize-labs-white.png", url: "https://www.haizelabs.com" },
  { name: "HumanSecurity", logo: "/images/human-security.png", url: "https://www.humansecurity.com" },
  { name: "Hyperbolic", logo: "/images/hyperbolic.png", url: "https://hyperbolic.xyz" },
  { name: "Infinitus", logo: "/images/infinitus.svg", url: "https://www.infinitus.ai" },
  { name: "Infosys", logo: "/images/infosys.png", url: "https://www.infosys.com" },
  { name: "Kibo", logo: "/images/kibo.svg", url: "https://kibocommerce.com" },
  { name: "Komodor", logo: "/images/komodor_logo.png", url: "https://komodor.com" },
  { name: "LangChain", logo: "/images/Langchain_updated.png", url: "https://www.langchain.com" },
  { name: "Layer", logo: "/images/LayerLogo.png", url: "https://www.layer.ai" },
  { name: "Letta", logo: "/images/Letta.svg", url: "https://www.letta.com" },
  { name: "Lightning AI", logo: "/images/lightningAI.png", url: "https://lightning.ai" },
  { name: "LlamaIndex", logo: "/images/llamaindex.png", url: "https://www.llamaindex.ai" },
  { name: "Lleverage", logo: "/images/lleverage.png", url: "https://www.lleverage.ai" },
  { name: "Lobby", logo: "/images/Lobby.png", url: "https://www.lobby.so" },
  { name: "Meet Lloyd", logo: "/images/meetLoyd.png" },
  { name: "Mem0", logo: "/images/mem0.png", url: "https://mem0.ai" },
  { name: "MongoDB", logo: "/images/mongodb-logo.png", url: "https://www.mongodb.com" },
  { name: "Motleycrew", logo: "/images/motleycrew.png" },
  { name: "Mozilla", logo: "/images/mozilla.png", url: "https://www.mozilla.org" },
  { name: "Naptha AI", logo: "/images/naptha-ai.png", url: "https://www.naptha.ai" },
  { name: "Netcloud", logo: "/images/netcloud.svg", url: "https://www.netcloud.ch" },
  { name: "Nurix AI", logo: "/images/nurix-ai.svg", url: "https://www.nurix.ai" },
  { name: "Onetrust", logo: "/images/onetrust.png", url: "https://www.onetrust.com" },
  { name: "Opaque", logo: "/images/opaque.png", url: "https://www.opaque.co" },
  { name: "Orium", logo: "/images/orium.png", url: "https://orium.com" },
  { name: "Ory", logo: "/images/ory.png", url: "https://www.ory.com" },
  { name: "Pattern Agentic AI", logo: "/images/PatternAgenticAI.png", url: "https://www.patternagentic.ai" },
  { name: "Pensar", logo: "/images/pensar.png" },
  { name: "Permit", logo: "/images/permit_logo_variant3.png", url: "https://www.permit.io" },
  { name: "Persistent", logo: "/images/persistent.png", url: "https://www.persistent.com" },
  { name: "Presidio", logo: "/images/presidio.png", url: "https://www.presidio.com" },
  { name: "PydanticAI", logo: "/images/pydantic.png", url: "https://pydantic.dev" },
  { name: "Redis", logo: "/images/redis.png", url: "https://redis.io" },
  { name: "SciEncephalon AI", logo: "/images/SciEncephalonAI.png", url: "https://www.sciencephalon.ai" },
  { name: "Skreens", logo: "/images/skreens.svg", url: "https://www.skreens.ai" },
  { name: "Skyfire", logo: "/images/skyfire.png", url: "https://www.skyfire.xyz" },
  { name: "SmythOS", logo: "/images/SmythOS.png", url: "https://smythos.com" },
  { name: "Snaplogic", logo: "/images/snaplogic.png", url: "https://www.snaplogic.com" },
  { name: "Softserve", logo: "/images/softserve.svg", url: "https://www.softserveinc.com" },
  { name: "Superbo", logo: "/images/superbo.png", url: "https://www.superbo.ai" },
  { name: "Supertab", logo: "/images/supertab.png", url: "https://supertab.co" },
  { name: "Swirl AI", logo: "/images/swirl-ai.png", url: "https://www.swirlai.com" },
  { name: "Traceloop", logo: "/images/traceloop.png", url: "https://www.traceloop.com" },
  { name: "Tykio", logo: "/images/Tykio.png", url: "https://tyk.io" },
  { name: "Ushur", logo: "/images/ushur.svg", url: "https://ushur.com" },
  { name: "Valtech", logo: "/images/valtech.png", url: "https://www.valtech.com" },
  { name: "Vijil", logo: "/images/vijil.png", url: "https://www.vijil.ai" },
  { name: "VoAgents", logo: "/images/voagents.png", url: "https://www.voagents.ai" },
  { name: "VoltAgent", logo: "/images/voltagent.png", url: "https://voltagent.dev" },
  { name: "Wayfound", logo: "/images/wayfound.png", url: "https://www.wayfound.ai" },
  { name: "Weaviate", logo: "/images/weaviate_WH.png", url: "https://weaviate.io" },
  { name: "Yallma3", logo: "/images/yallma3.png" },
  { name: "Yokai", logo: "/images/yokai.png", url: "https://www.yokai.network" },
  { name: "Zep", logo: "/images/zep.png", url: "https://www.getzep.com" },
];

const companyByName = Object.fromEntries(
  supporters.map((company) => [company.name, company]),
) as Record<string, Company>;

function company(
  name: string,
  overrides?: Partial<Pick<Company, "name" | "logo" | "url">>,
): Company {
  const base = companyByName[name];
  return { ...base, name, ...overrides };
}

export const testimonials: Testimonial[] = [
  {
    name: "Arvind Jain",
    title: "Founder & CEO",
    company: company("Glean"),
    quote:
      "Networks of agents are breaking down the silos that have long limited enterprise software, unlocking the potential of agents to transform how we work... At Glean, we're committed to open source and open standards as the foundation for this future — building agents that reason and act over enterprise knowledge, grounded in context and extensible by design. We're proud to help drive this vision forward as part of AGNTCY.",
  },
  {
    name: "Nir Gazit",
    title: "Co-founder & CEO",
    company: company("Traceloop"),
    quote:
      "As agents move from prototypes to production, observability becomes mission-critical. At Traceloop, we're building OpenTelemetry-native infrastructure to monitor, evaluate, and debug agent behavior in real time—across any stack. AGNTCY's push for open standards aligns perfectly with our mission to make agentic systems reliable, transparent, and production-ready.",
  },
  {
    name: "Itiel Shwartz",
    title: "Co-Founder & CTO",
    company: company("Komodor"),
    quote:
      "At Komodor, we understand that the complexity of modern systems demands more than just reactive solutions—it requires proactive, collaborative frameworks. The AGNTCY's commitment to open standards and inter-agent collaboration aligns perfectly with our mission to enhance system reliability and observability... ensuring that multi-agent systems operate seamlessly and transparently at scale.",
  },
  {
    name: "Qingyun Wu",
    title: "Founder & CEO",
    company: company("AG2"),
    quote:
      "Internet of Agents represents the next evolution of AI — a paradigm shift for seamless agent collaboration across boundaries. Open protocols like AGNTCY's are essential for this future, and AG2 proudly supports this initiative... We remain committed to advancing open standards that democratize agent technology.",
  },
  {
    name: "Vitalii Duk",
    title: "CEO & Founder",
    company: company("Dynamiq"),
    quote:
      "As experts in agentic AI... we recognize at Dynamiq the importance of standards that ensure interoperability between AI agents. The AGNTCY collective plays a crucial role in bringing together open-source supporters and agentic AI leaders to define, promote, and implement such protocols, accelerating innovation in the AI industry. We are excited to join the collective and contribute to its standardization initiatives.",
  },
  {
    name: "Leonard Tang",
    title: "Co-Founder & CEO",
    company: company("Haize Labs"),
    quote:
      "The world aspires to create agents that coordinate, reason, and generalize across tasks and contexts. The salient, unsolved obstacle towards this dream is trust and transparency. The AGNTCY project enables this trust through shared protocols, infrastructure, and evaluation standards. Haize Labs resolutely supports AGNTCY... to close the last-mile gap in agentic trust.",
  },
  {
    name: "Thomas Scheibe",
    title: "CPO",
    company: company("Aviz Networks"),
    quote:
      "Aviz Networks empowers enterprises to create open, AI-driven, vendor-neutral networks that deliver greater choice, control, cost savings, and standardization. We're excited to partner with AGNTCY in setting new standards for AI-powered networking solutions.",
  },
  {
    name: "Matt McLarty",
    title: "CTO",
    company: company("Boomi"),
    quote:
      "Agent interoperability is a fundamental concern for our industry, and it will affect every organization as we enter the agentic age. AGNTCY is bringing experts from all backgrounds and specializations to create common ground across agent platforms and lower the barrier of entry for companies to get in the agent game.",
  },
  {
    name: "Bob van Luijt",
    title: "Co-Founder & CEO",
    company: company("Weaviate"),
    quote:
      "Weaviate's AI Native database empowers both developers and enterprises to build next generation agentic applications. Built on open source and community roots, we are excited to partner with AGNTCY to advance foundational technologies and establish standards that will streamline the creation of cutting-edge AI applications.",
  },
  {
    name: "João Moura",
    title: "CEO & Founder",
    company: company("CrewAI"),
    quote:
      "CrewAI is excited to support AGNTCY in advancing the future of agentic systems. As the agentic landscape rapidly evolves, interoperability has become a top priority. Establishing strong community standards will be important to realizing the full potential of scalable, enterprise-grade AI agents.",
  },
  {
    name: "Sam Alba",
    title: "Co-Founder",
    company: company("Dagger"),
    quote:
      "As AI agents become integral to software development, platform teams face a new layer of complexity that existing CI/CD and automation systems were not designed to handle... We support AGNTCY's push for open protocols because interoperability is essential at this new scale. A fragmented approach will not scale. Unified, observable automation will.",
  },
  {
    name: "Craig DeWitt",
    title: "Co-Founder",
    company: company("Skyfire"),
    quote:
      "Payments and KYA identity will be native to every AI agent interaction. We are excited to join AGNTCY and help drive the development and adoption of the infrastructure the AI economy needs to thrive.",
  },
  {
    name: "Surojit Chatterjee",
    title: "CEO",
    company: company("Ema"),
    quote:
      "Agents are transforming how the world works—and open, collaborative systems are essential to realizing their full potential. At Ema, our pre-built AI Employees and specialized agents are powering agentic business automation across the enterprise. We're proud to join AGNTCY in advancing a shared vision: intelligent, interoperable agents driving global transformation.",
  },
  {
    name: "Chaitanya",
    title: "Founder & CEO",
    company: company("Yokai", { name: "Yokai Network" }),
    quote:
      "At Yokai, we're building the foundational infrastructure for the emerging agentic era, where verifiable identity, seamless discovery, and secure communication are essential. By joining AGNTCY, we're committing to an open ecosystem where autonomous agents can collaborate securely across organizational boundaries.",
  },
];
