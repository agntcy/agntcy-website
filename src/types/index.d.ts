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
  repo: string; // we’ll add this field manually
  body: string;
  assets: Array;
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

type ResourcesResponse = {
  data: Resource[];
};

type FeatureImage = {
  src: string,
  width: number,
  height: number,
};

type Logo = {
  name: string,
  src: string,
  width: number,
  height: number,
  type: string,
  featured: boolean,
};

type Quotes = {
  name: string,
  img: Logo,
  authorName: string
  authorTitle: string,
  blurb: string
};