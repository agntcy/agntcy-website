type Resource = {
  timestamp: string;
  author: string;
  title: string;
  url: string;
  topics: string;
  approved: string;
  category: string;
};

type ResourcesResponse = {
  data: Resource[];
};
