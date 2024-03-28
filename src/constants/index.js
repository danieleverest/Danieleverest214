import {
  react,
  node,
  nextjs,
  javaScript,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  nextJs,
  redux,
  tailwind,
  angular,
  nodejs,
  mongodb,
  mysql,
  git,
  oaknetwork,
  ryan,
  outcraftagency,
  // proximus,
  aptihealthWeb,
  aptihealthApp,
  zealWeb,
  zealApp,
  rollWeb,
  rollApp,
  linkedin,
  github,
  telegram,
  skype,
  carrent,
  jobit,
  tripguide,
  // threejs,
  // figma,
  // docker,
} from "../assets";

const navigationPaths = {
  home: "/",
  about: "about",
  work: "work",
  contact: "contact",
};

export const navLinks = [
  {
    id: navigationPaths.about,
    title: "Overview",
  },
  {
    id: navigationPaths.work,
    title: "Projects",
  },
  {
    id: navigationPaths.contact,
    title: "Contact",
  },
];

const services = [
  {
    title: "React Developer",
    icon: react,
  },
  {
    title: "Next.js Developer",
    icon: nextjs,
  },
  {
    title: "NodeJs Developer",
    icon: node,
  },
  {
    title: "Javascript Developer",
    icon: javaScript,
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
    name: "Next JS",
    icon: nextJs,
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
    name: "Angular",
    icon: angular,
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
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "GitHub",
    icon: github,
  },
  // {
  //   name: "Threejs",
  //   icon: threejs,
  // },
  // {
  //   name: "Figma",
  //   icon: figma,
  // },
  // {
  //   name: "Docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "Next.js/React Developer",
    company_name: "OAK Network",
    company_website: "https://oak.tech/",
    icon: oaknetwork,
    iconBg: "#E6DEDD",
    date: "Apr 2022 - Dec 2023",
    points: [
      "Contributed to the conception, development, and testing of technology solutions tailored to meet business needs and objectives.",
      "Designed and developed multiple front-end and back-end applications including an e-commerce platform utilizing React, Angular.js, Node.js, Spring Boot, GraphQL, and Docker.",
      "Contributed to migrating applications to microservices architecture, enhancing scalability and performance.",
      "Improved code quality by migrating the legacy codebase to TypeScript.",
      "Developed interactive 3D graphics feature using Three.js, boosting user engagement.",
      "Optimized platform performance through load balancing and Redis caching techniques, resulting in an impressive 70% enhancement in speed and responsiveness metrics.",
      "Proficient in Agile methodologies to ensure efficient project management, collaboration, and iterative development."
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Ryan, LLC",
    company_website: "https://ryan.com/",
    icon: ryan,
    iconBg: "#E6DEDD",
    date: "Mar 2020 - Mar 2021",
    points: [
      "Developed feature-rich e-commerce platforms using React, Spring Boot, and Node.js.",
      "Created responsive user interfaces with React, delivering intuitive and engaging learning experiences for users on multiple devices, resulting in a significant increase in user engagement.",
      "Prototyped new data processing capabilities for system integration.",
      "Optimized page load speeds for improved performance.",
      "Transformed website design and functionality through the seamless integration of responsive frameworks and interactive components.",
    ],
  },
  {
    title: "Front-end Developer",
    company_name: "Outcraft Agency",
    company_website: "https://outcraft.agency/",
    icon: outcraftagency,
    iconBg: "#E6DEDD",
    date: "Apr 2019 - Feb 2020",
    points: [
      "Translated Figma designs into pixel-perfect web applications using HTML5, CSS3, Material UI, and Bootstrap.",
      "Spearheaded the implementation of a new front-end development system, reducing development time and enhancing performance.",
      "Utilizing React, Redux, Tailwind CSS, and D3.js, developed data analysis charts and diagrams for an E-commerce platform, enhancing data visualization and insights.",
      "Improved code quality through TypeScript migration and automated testing."
    ],
  }
];

const projects = [
  {
    name: "Aptihealth Web",
    description:
      "Revolutionizing mental healthcare in New York State with a user-friendly platform for personalized therapy and progress tracking. Provides the digital gateway to comprehensive behavioral healthcare.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "nodejs",
        color: "pink-text-gradient",
      },
    ],
    image: aptihealthWeb,
    hosted_link: "https://www.aptihealth.com/",
  },
  {
    name: "Aptihealth App",
    description:
      "Access top-notch mental healthcare anytime, anywhere in New York State with our innovative app. Track your progress, schedule appointments, and connect with expert therapists for personalized care.",
    tags: [
      {
        name: "react-native",
        color: "blue-text-gradient",
      },
      {
        name: "sendbird",
        color: "green-text-gradient",
      },
      {
        name: "twilio",
        color: "pink-text-gradient",
      },
    ],
    image: aptihealthApp,
    hosted_link: "https://apps.apple.com/us/app/aptihealth/id1477170874",
  },
  {
    name: "Zeal Web",
    description:
      "The Zeal website elevates the experience of enjoying activities with trusted friends, fostering connections and making every interaction exciting.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "firebase",
        color: "pink-text-gradient",
      },
    ],
    image: zealWeb,
    hosted_link: "https://getzeal.co/",
  },
  {
    name: "Zeal App",
    description:
      "Discover a world of activities with friends through Zeal, an engaging platform. Create events, post updates, chat, and enjoy in-person activities hassle-free. Boost your social life with Zeal!",
    tags: [
      {
        name: "react-native",
        color: "blue-text-gradient",
      },
      {
        name: "sendgrid",
        color: "green-text-gradient",
      },
      {
        name: "typescript",
        color: "pink-text-gradient",
      },
    ],
    image: zealApp,
    hosted_link:
      "https://apps.apple.com/us/app/zeal-activities-with-friends/id6446917140",
  },
  {
    name: "Roll Web",
    description:
      "The Roll website is the gateway to the future of decentralized communities and digital assets. It allows users to seamlessly earn, redeem, send, and trade social tokens.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "formik",
        color: "pink-text-gradient",
      },
    ],
    image: rollWeb,
    hosted_link: "https://app.tryroll.com/",
  },
  {
    name: "Roll App",
    description:
      "Join the future of decentralized communities and digital assets with Roll. Earn, redeem, send, and trade social tokens on this innovative platform. Experience transparent transactions and captivating UI design.",
    tags: [
      {
        name: "react-native-web",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "storybook",
        color: "pink-text-gradient",
      },
    ],
    image: rollApp,
    hosted_link:
      "https://play.google.com/store/apps/details?id=com.roll&hl=en_GB",
  },
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

const personalInfo = {
  name: "Daniel",
  fullName: "Daniel Everest",
  email: "danieleverest0214@gmail.com",
  role: "Experienced Full Stack Developer",
  about: `I'm a skilled web developer with experience in TypeScript and
  JavaScript, and expertise in frameworks like React.Js, Next.js,
  Node.js etc. I'm a quick learner and collaborate closely with clients to
  create efficient, scalable, and user-friendly solutions that solve
  real-world problems. Let's work together to bring your ideas to life!`,
  projectsIntro: `Following projects showcases my skills and experience through
  real-world examples of my work. Each project is briefly described with
  live demos. It reflects my ability to solve complex problems, work
  with different technologies, and manage projects effectively.`
};

const publicUrls = {
  resume:
    "https://drive.google.com/file/d/1K1sE3S1Knxm__K0-STEXgPiesnf79pTl/view?usp=sharing",
  socialProfiles: {
    github: {
      title: "github",
      link: "https://github.com/danieleverest",
      icon: github,
    },
    linkedin: {
      title: "linkedin",
      link: "https://linkedin.com/in/danieleverest0214",
      icon: linkedin,
    },
    telegram: {
      title: "telegram",
      link: "https://t.me/devgenius0214",
      icon: telegram,
    },
    skype: {
      title: "skype",
      link: "https://join.skype.com/invite/gZFuoNEpP5hG",
      icon: skype,
    },
  },
};

export {
  services,
  technologies,
  experiences,
  projects,
  navigationPaths,
  personalInfo,
  publicUrls,
};
