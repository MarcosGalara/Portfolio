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
    carrent,
    jobit,
    tripguide,
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
      title: "React Developer",
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
      title: "Bootcamp en Soy Henry",
      company_name: "Rick & Morty SPA",
      icon: rickAndMorty,
      iconBg: "#383E56",
      date: "01/02/2023 - 30/03/2023",
      points: [
        "Comencé el proyecto creando un plan detallado que incluía el diseño de la interfaz de usuario, la definición de las funcionalidades principales de la SPA y la determinación de los recursos necesarios. Esta fase me permitió tener una visión clara del alcance del proyecto y los recursos que necesitaría para llevarlo a cabo.",
        "Implementación del frontend: Una vez definido el plan, comencé a trabajar en la implementación del frontend utilizando HTML, CSS y JavaScript. Utilicé frameworks y librerías populares como React y Redux para crear componentes reutilizables y mantener una estructura organizada del código.",
        "Desarrollo del backend: Después de haber finalizado el frontend, me enfocqué en el desarrollo del backend utilizando Node.js y Express. Utilicé una base de datos como MySQL para almacenar los datos necesarios para el proyecto.",
        "Durante el proceso de creación de la SPA de Rick and Morty, fui evaluado continuamente por los instructores del bootcamp a través de exámenes y presentaciones paralelas del proyecto. Esto me permitió recibir retroalimentación valiosa sobre mi progreso y mejorar mis habilidades técnicas y de comunicación."
      ],
    },
    {
      title: "Proyecto Individual",
      company_name: "Food SPA",
      icon: burger,
      iconBg: "#E6DEDD",
      date: "01/04/2023 - 15/04/2023",
      points: [
        "Comencé el proyecto realizando una investigación detallada de la API externa que me brindó la academia. Utilicé esta información para crear un plan detallado que incluía el diseño de la interfaz de usuario y la definición de las funcionalidades principales de la aplicación.",
        "Después de haber definido el plan, comencé a trabajar en la implementación del frontend utilizando HTML, CSS y JavaScript. Utilicé frameworks y librerías populares como React y Redux para crear componentes reutilizables y mantener una estructura organizada del código.",
        "implementé la lógica para que el usuario pudiera seleccionar ciertas recetas, ver su detalle y crear, borrar o editar una receta.",
        "Una vez finalizado el frontend, me enfocqué en el desarrollo del backend utilizando Node.js y Express. Utilicé una base de datos MySQL para almacenar los datos de las recetas y la información del usuario.",
        "realicé pruebas exhaustivas para asegurarme de que la aplicación funcionara correctamente y cumpliera con todas las funcionalidades definidas en el plan."
      ],
    },
    {
      title: "Proyecto Final",
      company_name: "Patitas Felices",
      icon: patita,
      iconBg: "#383E56",
      date: "16/04/2023 - 04/05/2023",
      points: [
        "Planificación y diseño: Comenzamos el proyecto final planificando y diseñando el producto en conjunto utilizando las reglas SCRUM y Figma. Definimos las funcionalidades principales del producto y elaboramos historias de usuario. También establecimos una estructura de equipo para optimizar la eficiencia del trabajo en equipo.",
        "trabajé en la implementación del frontend en conjunto con otros miembros del equipo utilizando tecnologías nuevas como Auth0 para la autenticación de usuarios, Cloudinary para la gestión de la nube, Redux Toolkit para la gestión del estado de la aplicación y Mercado Pago para el procesamiento de pagos.",
        "Utilizamos frameworks y librerías populares como React y Material-UI para crear componentes reutilizables y mantener una estructura organizada del código.",
        "Pruebas y puesta en producción: Finalmente, realizamos pruebas exhaustivas para asegurarnos de que la aplicación funcionara correctamente y cumpliera con todas las funcionalidades definidas en las historias de usuario. Una vez que estuvimos satisfechos con los resultados, pusimos el producto en producción utilizando herramientas como Vercel y Render."
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
  
  export { services, technologies, experiences, testimonials, projects };