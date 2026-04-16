export interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription?: string;
  tags: string[];
  link: string;
  repo: string;
  productPage?: string;
  image: string;
  images?: string[];
  category: "Web" | "Mobile" | "Robotics" | "Embedded" | "Infrastructure" | "AI/ML" | "Tools";
  featured?: boolean;
  status?: string;
}

export const PROJECTS: Project[] = [
  {
    "category": "Mobile",
    "description": "Fast-paced social deduction game with AI-backed generation API for custom word lists, on a single shared device.",
    "featured": false,
    "image": "https://raw.githubusercontent.com/Davidpereira2803/imposter-hunt/master/assets/icon.png",
    "link": "https://github.com/Davidpereira2803/imposter-hunt",
    "longDescription": "Imposter Hunt is a fast-pa:contentReference[oaicite:0]{index=0}er on a single shared device. Players receive a secret word except the Imposter, who must blend in and guess the word after surviving the voting rounds. The project features an AI-backed generation API that lets users create custom word lists from their own input.",
    "productPage": "https://pearlabs.dev/imposter-hunt",
    "repo": "https://github.com/Davidpereira2803/imposter-hunt",
    "slug": "imposter-hunt",
    "status": "production",
    "tags": [
      "React Native",
      "Expo",
      "Zustand",
      "AI API"
    ],
    "title": "Imposter Hunt",
    "images": null
  }
] as const;
