export type HeroStructure = {
  title: string;
  subtitle: string;
  cta1: string;
  cta2: string;
};

export type Hero = {
  content: HeroStructure;
};

export const usePageContent: Hero = {
  content: {
    title: "Most Reliable plumbers in Columbus, Ohio",
    subtitle:
      "Looking for reliability, fast response and a clean efficient job? You've come to the right place",
    cta1: "Call us now",
    cta2: "Schedule a service",
  },
};
