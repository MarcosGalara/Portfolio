import traslate from "../utils/i18n/i18n";
import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    git,
    figma,
    gitHub,
    patita,
    RandM,
    appFood,
    patitas,
    sql,
    rickAndMorty,
    burger,
    cloudinary,
    mp,
    google,
    scrum,
    postgreSQL,
    sequelize,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: traslate.t('nav.section1'),
    },
    {
      id: "work",
      title: traslate.t('nav.section2'),
    },
    {
      id: "contact",
      title: traslate.t('nav.section3'),
    },
  ];
  
  const services = [
    {
      title: traslate.t("service.title1"),
      icon: web,
    },
    {
      title: traslate.t("service.title2"),
      icon: mobile,
    },
    {
      title: traslate.t("service.title3"),
      icon: backend,
    },
    {
      title: traslate.t("service.title4"),
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
      name: "Cloudinary",
      icon: cloudinary,
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
      name: "MercadoPago",
      icon: mp,
    },
    {
      name: "Google",
      icon: google,
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
      name: "git hub",
      icon: gitHub,
    },
    {
      name: "postgreSQL",
      icon: postgreSQL,
    },
    {
      name: "SQL",
      icon: sql,
    },
    {
      name: "Scrum",
      icon: scrum,
    },
    {
      name: "sequelize",
      icon: sequelize,
    },
  ];
  
  const experiences = [
    {
      title: traslate.t("constants.experiences.one.title"),
      company_name: "Rick & Morty SPA",
      icon: rickAndMorty,
      iconBg: "#383E56",
      date: "01/02/2023 - 30/03/2023",
      points: [
        traslate.t("constants.experiences.one.point1"),
        traslate.t("constants.experiences.one.point2"),
        traslate.t("constants.experiences.one.point3"),
        traslate.t("constants.experiences.one.point4"),
      ],
    },
    {
      title: traslate.t("constants.experiences.two.title"),
      company_name: "Food SPA",
      icon: burger,
      iconBg: "#E6DEDD",
      date: "01/04/2023 - 15/04/2023",
      points: [
        traslate.t("constants.experiences.two.point1"),
        traslate.t("constants.experiences.two.point2"),
        traslate.t("constants.experiences.two.point3"),
        traslate.t("constants.experiences.two.point4"),
        traslate.t("constants.experiences.two.point5")
      ],
    },
    {
      title: traslate.t("constants.experiences.three.title"),
      company_name: "Patitas Felices",
      icon: patita,
      iconBg: "#383E56",
      date: "16/04/2023 - 04/05/2023",
      points: [
        traslate.t("constants.experiences.three.point1"),
        traslate.t("constants.experiences.three.point2"),
        traslate.t("constants.experiences.three.point3"),
        traslate.t("constants.experiences.three.point4"),
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial: traslate.t("constants.testimonials.test1"),
      name: "Amelie Lens",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial: traslate.t("constants.testimonials.test2"),
      name: "Agustin Garnero",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial: traslate.t("constants.testimonials.test3"),
      name: "Guadalupe Gonzalez",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Rick & Morty App",
      description:
      traslate.t("constants.works.project.one"),
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "redux",
          color: "green-text-gradient",
        },
        {
          name: "CSS",
          color: "pink-text-gradient",
        },
      ],
      image: RandM,
      source_code_link: "https://github.com/MarcosGalara/Rick---Morty",
    },
    {
      name: "Food App",
      description:
        traslate.t("constants.works.project.two"),
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "sequelize",
          color: "green-text-gradient",
        },
        {
          name: "postgreSQL",
          color: "pink-text-gradient",
        },
      ],
      image: appFood,
      source_code_link: "https://github.com/MarcosGalara/food-PI/tree/main/PI-Food-main",
    },
    {
      name: "Patitas Felices App",
      description:
      traslate.t("constants.works.project.three"),
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "material UI",
          color: "green-text-gradient",
        },
        {
          name: "Mercado Pago",
          color: "pink-text-gradient",
        },
        {
          name: "Redux Toolkit",
          color: "orange-text-gradient",
        },
      ],
      image: patitas,
      source_code_link: "https://patitas-felices.vercel.app/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };