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
      testimonial:
        "Me encantó la aplicación de Rick and Morty, es muy fácil de usar y me permite buscar a mis personajes favoritos y agregarlos a mi lista de favoritos. También me gusta que pueda filtrar los personajes por ciertas características. Definitivamente la recomendaría a cualquier fan de la serie.",
      name: "Amelie Lens",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "La aplicación de refugio de animales es una iniciativa increíble. Me encanta la forma en que facilita la adopción de perros a través de la búsqueda y el filtrado de perfiles de perros en adopción. Además, la sección de e-commerce es genial ya que me permite comprar productos para ayudar al refugio a mejorar su infraestructura. Definitivamente, me alegra ver proyectos como este y espero que más personas los apoyen en su noble causa.",
      name: "Agustin Garnero",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "La aplicación de recetas de restaurante es una herramienta increíblemente útil para cualquiera que quiera cocinar comidas saludables y sabrosas en casa. Me gusta mucho la función de filtrado para buscar recetas según mi tipo de dieta y nivel de salud. Además, la opción de crear, editar y borrar mis propias recetas es una característica excelente. Definitivamente seguiré usando esta aplicación para mis próximos experimentos culinarios.",
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
        "Este proyecto es una aplicación web o móvil de búsqueda y filtrado de personajes de la serie animada Rick and Morty. Los usuarios pueden buscar y filtrar personajes por características específicas, agregarlos a una lista de favoritos, editar sus valores e incluso eliminarlos. Es una herramienta útil para que los fanáticos de la serie exploren y conozcan mejor a los personajes.",
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
        "La aplicación de restaurante que he desarrollado permite a los usuarios buscar, explorar y filtrar recetas culinarias según su tipo de dieta, nivel de salud de la comida, ingredientes y más. Los usuarios pueden crear, editar y borrar sus propias recetas y ordenarlas para encontrar rápidamente las más populares o nuevas. Es una herramienta ideal para aquellos que buscan una variedad de recetas saludables y sabrosas que se adapten a sus necesidades dietéticas únicas.",
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
        "este proyecto es una aplicación web que facilita la adopción de perros a través de la búsqueda y filtrado de perfiles de perros en adopción. También incluye una sección de e-commerce cuyos ingresos se destinan a mejorar la infraestructura del refugio. Es una herramienta importante para ayudar a los perros necesitados y fomentar la adopción responsable de mascotas.",
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