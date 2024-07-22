import { IProjectItem, ProjectType, RepoType } from "@/types";

const projects: IProjectItem[] = [
  {
    id: "social-media-app-flutter",
    title: "ACTIVE BISTRO",
    description:
      "Welcome to Active Bistro, your premier online platform for discovering top dining options! Our site uses cutting-edge technology for a seamless user experience. Key technologies include Next.js for fast front-end performance, NestJS for robust back-end management.",
    icon: "/skills/nextjs.png",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/ranaabdullahdev",
    // url: "https://www.nixlab.co.in/projects/com.nixlab.rippl",
    url: "https://activebistro.co.uk/",
    tags: [
      "NEXT",
      "NEST",
      "NODE",
      "SQL",
      "JAVASCRIPT",
      "TYPESCRIPT",
      "GITHUB",
      "AWS",
    ],
    sceenshots: [""],
  },
  {
    id: "e-commerce-app-mern",
    title: "VEYETALS",
    description:
      "Veyetals App offers a contactless, AI-powered app for tracking vital signs through user video scans. It measures biomarkers like heart rate, blood pressure, breathing, oxygen levels, stress, emotions, and glucose.",
    icon: "/skills/react.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/ranaabdullahdev",
    url: "https://veyetals.com/",
    tags: [
      "REACT",
      "MUI",
      "REDUX",
      "NODE",
      "SQL",
      "JAVASCRIPT",
      "TYPESCRIPT",
      "GITHUB",
      "AWS",
    ],
  },
  {
    id: "video-calling-app-flutter",
    title: "HIREDROID",
    description:
      "Hiredroid is your platform for connecting skilled freelancers with businesses in need of top-tier talent. Whether you're looking for expert developers, designers, or other professionals, Hiredroid ensures you find the right match for your project needs.",
    icon: "/skills/react.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/ranaabdullahdev",
    url: "https://hiredroid.com/",
    tags: [
      "REACT",
      "MUI",
      "REDUX",
      "NODE",
      "SQL",
      "JAVASCRIPT",
      "TYPESCRIPT",
      "GITHUB",
      "AWS",
    ],
  },
  {
    id: "social-media-api-nodejs",
    title: "DENTIST RANKED",
    description:
      "Dentists Ranked is an online platform that aims to simplify the process of finding the right dentist or dental clinic for patients. Our extensive database provides detailed information about each dental clinic and dentist, along with ratings and reviews from previous patients.",
    icon: "/skills/nextjs.png",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    url: "https://www.dentistsranked.com/",
    githubUrl: "https://github.com/ranaabdullahdev",
    tags: [
      "NEXT",
      "NEST",
      "NODE",
      "SQL",
      "JAVASCRIPT",
      "TYPESCRIPT",
      "GITHUB",
      "AWS",
    ],
  },
  {
    id: "grocery-list-maker-app-flutter",
    title: "ELITE CAR",
    description:
      "Elite Cab Driver is an application for drivers in Dallas, USA who want to make some money providing safe and reliable rides.Elite Cab Driver eases you into your first rides and is designed to meet your needs on every moment of your trips.",
    icon: "/skills/reactNative.png",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/ranaabdullahdev",
    url: "https://play.google.com/store/apps/details?id=us.elite.cab.service.dallas.texas.conductor",
    tags: [
      "REACT NATIVE",
      "REDUX",
      "GOOGLE APIS ",
      "MAPS APIS",
      "GITHUB",
      "THIRD PART INTEGRAION",
      "STRIPE",
    ],
  },
  {
    id: "e-commerce-api-nodejs",
    title: "YOBRO",
    description:
      "Yobro aims at building a community that promotes a shared economy, did u know 80% of the products we own are more or less useless to us, though can be useful to others this thought gave birth to our philosophy of SHARE, DON’T BUY!",
    icon: "/skills/flutter.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/ranaabdullahdev",
    url: "https://play.google.com/store/apps/details?id=com.yobro",
    tags: [
      "FLUTTER",
      "GOOGLE APIS ",
      "MAPS APIS",
      "GITHUB",
      "STRIPE",
      "THIRD PART INTEGRAION",
    ],
  },
];

export default projects;

export function getProjectName(id: string) {
  const item = projects.find((e) => e.id === id);

  if (!item) return null;

  return item.title;
}

export function getProjectDetails(id: string): IProjectItem | null {
  const item = projects.find((e) => e.id === id);

  if (!item) return null;

  return item;
}
