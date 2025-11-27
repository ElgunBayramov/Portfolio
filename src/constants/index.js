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
  git,
  figma,
  meta,
  starbucks,
  ricoMobile,
  its,
  asanService,
  brainvest,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  materialui,
  bootstrap,
  mssql,
  jquery,
  csharp,
  flutter,
  multiFilm,
  runnerGame,
  sportsApp,
  ecommerceApp,
} from "../assets";

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
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Flutter Developer",
    icon: mobile,
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
    name: "C#",
    icon: csharp,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Microsoft SQL Server",
    icon: mssql,
  },
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
  {
    name: "Flutter",
    icon: flutter,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Material UI",
    icon: materialui,
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
  },
  {
    name: "Jquery",
    icon: jquery,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Frontend Web Developer",
    company_name: "Rico Mobile",
    icon: ricoMobile,
    iconBg: "#fff",
    date: "Feb 2025 - Present",
    points: [
      "Contributing to the development of a modern web-based application using ReactJS.",
      "Converting Figma designs into responsive, user-friendly interfaces.",
      "Integrating APIs and optimizing application performance.",
      "Implementing and integrating a secure payment gateway system.",
    ],
  },
  {
    title: "Information Technology Intern",
    company_name:
      "The State Agency for Public Service and Social Innovations under the President of the Republic of Azerbaijan",
    icon: asanService,
    iconBg: "#fff",
    date: "Feb 2024 - May 2024",
    points: [
      "Supported system operations by logging citizen feedback and managing service queues.",
      "Provided helpdesk support, including troubleshooting hardware/software issues.",
      "Assisted in maintaining IT infrastructure and resolving network problems.",
      "Collaborated with IT staff during system updates and testing.",
    ],
  },
  {
    title: "Freelance Frontend Developer",
    company_name: "Brain Investment Center",
    icon: brainvest,
    iconBg: "#fff",
    date: "Feb 2024 - July 2024",
    points: [
      "Designed and developed the front-end of a business website using HTML5,CSS3, Bootstrap, and JavaScript.",
      "Focused on mobile responsiveness, cross-browser compatibility, and user experience.",
      "Integrated client feedback and debugged UI issues through iterative testing.",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "The State Agency on Mandatory Health Insurance",
    icon: its,
    iconBg: "#fff",
    date: "April 2023 - Sep 2023",
    points: [
      "Worked on the “Address Book” project using React, TypeScript, and Redux Toolkit.",
      "Implemented mockup-based UI components and styled them with SCSS/SASS.",
      "Fetched data from REST APIs and contributed to API integration.",
      "Gained exposure to real-world debugging, documentation writing, and collaborative version control.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Sports News & Gear Store",
    description:
      "Web-based platform offering sports news, live scores, and e-commerce features with basket, wishlist, and an admin panel. It also supports subscription and contact forms via SMTP, sending automated emails to users.",
    tags: [
      {
        name: "c#",
        color: "blue-text-gradient",
      },
      {
        name: "asp.Net Core MVC",
        color: "green-text-gradient",
      },
      {
        name: "mssql",
        color: "pink-text-gradient",
      },
    ],
    image: sportsApp,
    source_code_link: "https://github.com/ElgunBayramov/SokaProject",
  },
  {
    name: "Movie Organizer App",
    description:
      "A web-based application that allows users to search movies using real-time IMDb API data, view detailed information, and organize personalized movie lists within an user-friendly interface.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "rest api",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],

    image: multiFilm,
    source_code_link: "https://github.com/ElgunBayramov/Movie-Organizer",
  },
  {
    name: "Infinite Runner Game",
    description:
      "Endless runner game where players navigate a character through dynamic obstacles. Features score tracking and responsive gameplay for an engaging experience.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "p5.js",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: runnerGame,
    source_code_link: "https://github.com/ElgunBayramov/Runner-Game",
  },
  {
    name: "E-Commerce App",
    description:
      "A responsive e-commerce application that loads products from a fake store API and lets each user manage a personalized basket.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "material ui",
        color: "pink-text-gradient",
      },
    ],

    image: ecommerceApp,
    source_code_link:
      "https://github.com/ElgunBayramov/Advanced-E-Commerce-withReact-",
  },
];

export { services, technologies, experiences, testimonials, projects };
