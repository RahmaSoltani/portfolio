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
  
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "education",
    title: "education",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Backend Developement",
  },
  {
    title: "Frontend Integration",
  },
  {
    title: "Database Management",
  },
  {
    title: " Software Engineering",
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


];

const experiences = [
  {
    title: "Secondary cycle in computer science",
    company_name: "Higher National School of Computer Science-Algiers",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jun 2023 - present",
    points: [
      "Progressed seamlessly to the secondary cycle of my studies, underpinned by a strong academic foundation and unwavering commitment..",

    ],
  },
  {
    title: "preparatory cycle in computer science",
    company_name: "Higher National School of Computer Science-Algiers",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Oct 2021 - Jun 2023",
    points: [
      "Excelled in foundational computer science coursework, mastering programming languages, algorithms, and data structures to build a strong technical foundation.",
      "Diversified skillset beyond coding by delving into the basics of graphic design, combining creativity with technical expertise to craft visually appealing solutions.",
    
 
    ],
  },
 
  {
    title: "Baccalaureate degree",
    company_name: "Mahfoud Saad High School -Bir El Ater-Tebessa",
    iconBg: "#383E56",
    date: "Sep 2018 - Jun 2021",
    points: [
      "Graduated with an average of 18.34 in the scientific stream, showcasing a strong commitment to academic excellence.",
      "Demonstrated a keen aptitude for mathematics, consistently achieving top scores in challenging math courses.",
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
    name: "E-commerce website",
    description:
      "Web-based platform that allows users to search and buy Laptops , Smartphones, Tablets and accessories",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "django-rest-framework",
        color: "green-text-gradient",
      },
      {
        name: "postgresql",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Association website",
    description:
      "A charitable association website is a digital platform that informs visitors about the organization's cause, encourages donations, and facilitates volunteer engagement.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "django-rest-framework",
        color: "green-text-gradient",
      },
      {
        name: "mysql",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: " Scientific Article Search Platform",
    description:
      "A streamlined web platform for quick keyword-based searching of scientific articles. Instant access to a wide range of academic resources.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "django-rest-framework",
        color: "green-text-gradient",
      },
      {
        name: "mysql",
        color: "pink-text-gradient",
      },
      {
        name: "elasticsearch",
        color: "text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
