type Resource = {
  title: string;
  description: string;
  contributor: string;
  contributorLink: string;
  resourceLink: string;
  featureImage?: FeatureImage;
  isAvailable: string;
  approved: string;
  isFeatured: boolean;
  source?:
    | "Outshift"
    | "AGNTCY Blog"
    | "Dell"
    | "WSJ for Business"
    | "VentureBeat"
    | "Galileo";
  category?:
    | "Technical Blog"
    | "Dell Blog"
    | "Outshift by Cisco Blog"
    | "External Articles";
  date?: string;
};

type Release = {
  id: number;
  heading:string;
  subheading: string;
  description: string;
  tag_name: string;
  name: string;
  draft: boolean;
  prerelease: boolean;
  published_at: string;
  html_url: string;
  repo: string; // we'll add this field manually
  body: string;
  assets: Array;
  commitData?: CommitData;
};

type CommitData = {
  sha: string;
  url: string;
  html_url: string;
  commit: {
    message: string;
    author: {
      name: string;
      email: string;
      date: string;
    };
  };
};

type FeatureImage = {
  src: string,
  width: number,
  height: number,
};
