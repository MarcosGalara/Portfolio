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
      title: "Sobre mi",
    },
    {
      id: "work",
      title: "Experiencia",
    },
    {
      id: "contact",
      title: "Contacto",
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