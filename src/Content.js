// import images


import figma from "./assets/images/Skills/R.png";
import sketch from "./assets/images/Skills/OIP.jfif";
import ps from "./assets/images/Skills/R (1).png";
import reactjs from "./assets/images/Skills/react.png";
import nodejs from "./assets/images/Skills/R (2).png";
import python from "./assets/images/Skills/R (3).png";

import services_logo1 from "./assets/images/Services/logo1.png";
import services_logo2 from "./assets/images/Services/logo2.png";
import services_logo3 from "./assets/images/Services/employee (1).png";

import project1 from "../src/assets/images/Projects/Dashboard.png";
import project2 from "../src/assets/images/Projects/e-commerce.png";
import project3 from "../src/assets/images/Projects/Greensock.png";


import avatar1 from "./assets/images/Testimonials/avatar6.png";
import avatar2 from "./assets/images/Testimonials/avatar5.png";
import avatar3 from "./assets/images/Testimonials/avatar6.png";
import avatar4 from "./assets/images/Testimonials/avatar5.png";

import Hireme_person from "./assets/images/Hireme/person.png";
import Hireme_person2 from "./assets/images/Hireme/person2.png";

// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
import { BsGithub } from "react-icons/bs";
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";

export const content = {
  nav: [
    {
      link: "#home",
      icon: TbSmartHome,
    },
    {
      link: "#skills",
      icon: BiUser,
    },
    {
      link: "#services",
      icon: RiServiceLine,
    },
    {
      link: "#projects",
      icon: RiProjectorLine,
    },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],
  hero: {
    title: "Frontend Developer",
    firstName: "Mazen",
    LastName: "Mohamed",
    btnText: "My CV",
    
    hero_content: [
      {
        count: "3+",
        text: "Years of Experinse in Web development",
      },
      {
        count: "20+",
        text: "Projects Worked in my career",
      },
    ],
  },


  skills: {
    title: "Skills",
    subtitle: "MY TOP SKILLS",
    skills_content: [
      {
        name: "Redux",
        para: "Redux Toolkit",
        logo: figma,
        mySkills1: "I have two years of experience in Redux",
        mySkills3: "I worked out on two projects at the previous company",
        mySkills2: "I used it in a accounts system and E-commerce Project",
      },
      {
        name: "Next.js",
        para: "The React Framework for Production",
        logo: nodejs,
         mySkills1: "I have two years of experience in Next.js",
        mySkills3: "I used it in many projects",
        mySkills2: "I used it in a google map, e-commerce, hospital system and more ",
      },
      {
        name: "Firebase",
        para: "App Development Platform",
        logo: ps,
         mySkills1: "I have one year experience",
        mySkills3: "I used it on chat app, blockchain app, blogs app",
        mySkills2: "i have more to learn about firebase",
      },
      {
        name: "React js",
        para: "JavaScript library for building user interfaces",
        logo: reactjs,
         mySkills1: "I have three years of experience",
        mySkills3: "I used it in many projects",
        mySkills2: "I used it in a dashboard, E-commerce, pharmacy system, media app and more",
      },
      {
        name: "GraphQL",
        para: "query language for API",
        logo: sketch,
         mySkills1: "I have one year of experience",
        mySkills3: "I worked out on three projects at the previous company",
        mySkills2: "I used it in a CURD api , E-commerce, blogs app",
      },
      {
        name: "TypeScript",
        para: "strongly typed programming",
        logo: python,
         mySkills1: "I have one year of experience",
        mySkills3: "I used now in all react app",
        mySkills2: "I used it in a blogs app, E-commerce and more",
      },
    ],
    icon: MdArrowForward,
  },
  services: {
    title: "Services",
    subtitle: "WHAT I OFFER",
    service_content: [
      {
        title: "Frontend Web Development",
        para: "I’ve been working as a front-end web developer at Ooredoo and X-team for 3+ years, and now seek a new challenge. I think my experience and skills in React,Next,JavaScript, HTML, and CSS make me perfect for this role. I’ve worked in large development teams that have sharpened my technical skills, improved my communication, and made me understand what it takes to meet tight deadlines.",
        logo: services_logo1,
      },
      {
        title: "Digital Marketing",
        para: "With tow years of experience in social media, email marketing, and graphic design, I am excited to move on new  Company as a Digital Marketing and help create unforgettable marketing campaigns.  As a Marketing  I grow our clients’ brands and engagement. In one of our recent projects, I helped create a comprehensive marketing campaign for a software company. I assisted in redesigning their branding, improving their social media presence",
        logo: services_logo2,
      },
      {
        title: "why select me",
        para: "I feel I would be an asset to your organization because I am have three years experience. I Also can learn quickly and under pressure, and I am confident that I will benefit your organization with my work and my commitment to deliver the required tasks on time.",
        logo: services_logo3,
      },
    ],
  },
  Projects: {
    title: "Projects",
    subtitle: "MY CREATION",
    project_content: [
      {
        title: "Dashboard web",
        image: project1,
        button: "Demo",
        url: "https://github.com/mazen-mohamed2/react-dashboard",
      },
      {
        title: "Sport E-commerce",
        image: project2,
        button: "Demo",
        url: "https://react-e-commerce-sport-o7edcwrci-mazen-mohamed2.vercel.app/",
      },
      {
        title: "Greensock",
        image: project3,
        button: "Demo",
        url: "https://greensock-mazen-mohamed2.vercel.app/",
      },
    ],
  },
  Testimonials: {
    title: "Testimonials",
    subtitle: "MY CLIENT REVIEWS",
    testimonials_content: [
      {
        review:
          "“Thank you for completing the project before the agreement date”",
        img: avatar1,
        name: "Mr.Mohamed",
      },
      {
        review:
          "“Mazen is disciplined while making code that can be reused in the future”",
        img: avatar2,
        name: "Eng.Hesham Ahmed",
      },
      {
        review:
          "Mazen is great at Adding new features to improve the user experience”",
        img: avatar3,
        name: "Mr.Raed Abdulrahman",
      },
      {
        review:
          "Mazen can skillfully work together with other team partners and stakeholders”",
        img: avatar4,
        name: "Eng.Mustafa",
      },
    ],
  },
  Hireme: {
    title: "Hire Me",
    subtitle: "FOR YOUR PROJECTS",
    image1: Hireme_person,
    image2: Hireme_person2,
    para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
    btnText: "Hire Me",
  },
  Contact: {
    title: "Contect Me",
    subtitle: "GET IN TOUCH",
    social_media: [
      {
        text: "mazenmohamedd73@gmail.com",
        icon: GrMail,
        link: "mailto:mazenmohamedd73@gmail.com",
      },
      {
        text: "+20 1119284548",
        icon: MdCall,
        link: "https://wa.me/+201119284548",
      },
      {
        text: "Mazen Mohamed",
        icon: BsGithub,
        link: "https://github.com/mazen-mohamed2",
      },
    ],
  },
  Footer: {
    text: "All © Copy Right Reserved 2022",
  },
};
