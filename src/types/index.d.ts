type Resource = {
  title: string;
  description: string;
  contributor: string;
  contributorLink: string;
  resourceLink: string;
  featureImage: FeatureImage;
  isAvailable: string;
  approved: string;
  isFeatured: boolean;
};


type ResourcesResponse = {
  data: Resource[];
};

type FeatureImage = {
  src: string,
  width: number,
  height: number,
}