import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

import testemonial1 from "../assets/testemonial1.jpeg";
import testemonial2 from "../assets/testemonial2.jpeg";
import testemonial3 from "../assets/testemonial3.png";
import shroonies from "../assets/shroonies.png";
import oddplanet from "../assets/oddplanet.png";
import moozers from "../assets/moozers.png";
import moozersFront from "../assets/ezToknDapp.png";
import oddplanetFront from "../assets/oddplanetFrontend.png";
import shrooniesFront from "../assets/shrooniesFrontend.png";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Solidity Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Shroonies",
    icon: shroonies,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Stress testing various scenarios to ensure ultimate efficiency & optimization for end users upon interacting with the smart contract",
    ],
  },
  {
    title: "Solidity Developer",
    company_name: "Moozers",
    icon: moozers,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing 3 separate NFT related smart contracts, one for the mint, one to serve as a reward system token & a staking mechanism for loyal holders to earn rewards",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full Stack Web3 Developer",
    company_name: "Odd Planet",
    icon: oddplanet,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining a functional smart contract serving as a token for an upcoming P2E crypto gaming project.",
      "Developing in house presale Dapp for raising capital. Full stack decentralized application interacting on chain using a user friendly UI",
      "Stress testing various scenarios to ensure ultimate efficiency & optimization for end users upon interacting with the smart contract",
    ],
  },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "Truly a one stop shop with Rudeboy, efficient delivery of 3 smart contracts along with their respective outstanding Dapps. Re purchased a total remake of our current website and im excited to see whats coming.",
    name: "SOM3ON3",
    designation: "Founder",
    company: "Moozers NFT",
    image: testemonial1,
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rudeboy does. Front-end website + mint Dapp + smart contract was PERFECT. Also got free help for metadata and art generation.",
    name: "Desetrix",
    designation: "Founder",
    company: "Shroonies Pastel",
    image: testemonial2,
  },
  {
    testimonial:
      "Raised over $140 000 in under a minute using Rudeboy's smart contract for our NFT mint without a single hick up, front-end design and development was equally outstanding!",
    name: "Aymandefi",
    designation: "Founder",
    company: "Pepeland",
    image: testemonial3,
  },
];

const projects = [
  {
    name: "EzTokn",
    description:
      "The one stop shop for no code smart contract deployments. Perfectly curated for founders, start ups & aspiring entrepreneurs looking to bring their products to market and skip the dev!",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "solidity",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: moozersFront,
    source_code_link: "",
    //https://app.eztokn.io
  },
  {
    name: "Odd Planet",
    description:
      "New modern front-end website with decentralized web app integrated to raise funds via token presale for an upcoming P2E crypto gaming project.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: oddplanetFront,
    source_code_link: "",
    //https://oddplanet.io
  },
  {
    name: "Shroonies",
    description:
      "Welcome to Shroonieville, a collection of 2 000 Shroonies living on the blockchain beautifully represented by the front-end website made for this specific community",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "solidity",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: shrooniesFront,
    source_code_link: "https://shroonies.xyz",
    //https://shroonies.xyz
  },
];

export { services, technologies, experiences, testimonials, projects };
