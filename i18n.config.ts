export default defineI18nConfig(() => ({
  legacy: false,
  globalInjection: true,
  locale: "en",
  fallbackLocale: "en",
  messages: {
    en: {
      projects: "Projects",
      hello: "Hello there, i'm",
      description:
        "   Web Developer with 7+ years of experience. Over 3 years building things with Laravael and in love with Vue.js for 2 years.",
      nav_title: "Home",
      projects_title: "Projects",
      visit: "Visit",
      learn_more: "Learn more",
      back_button: "Go back",
      purpose: "Purpose",
      objective: "Objective",
      Technologies: "Technologies",
      approach: "Approach",
      project_duration: "Duration",
      future_enhancements: "Future Enhancements",
      role: "Role",
      my_cv: "CV",
      nsfw_future_enhancements: {
        title: "  Planned future improvements:",
        item1: "Integrating a payment gateway for secure transactions.",
        item2:
          "Implementing a cart system to enable users to add products to their cart and proceed with the checkout process.",
        item3:
          "Adding a user authentication system to enable users to create accounts and log in to the website.",
        item4:
          "Implementing a search feature to make it easier for users to find specific products.",
        item5:
          "Adding a user profile page to enable users to view their order history, manage their account information, and update their billing information.",
        item6:
          "Implementing a responsive design to ensure that the website looks and functions well on different devices and screen sizes.",
        item7:
          "Adding a contact form to enable users to get in touch with the website's support team.",
      },
      final_product: "Final Product",
      Description: "Description",
      Repository: "Repository",
      Live: "Live",
      /*
       * Projects
       */
      nsfw: {
        title: "NSFW Clothes",
        description:
          "SPA for a clothing brand: I was responsible for the entire development of the site, building it with Nuxt.js and Vue.js for the front-end, styled with Tailwind CSS. The back-end was powered by a REST API built with Node.js and Fastify.",

        purpose:
          "Create a website that allows customers to explore and appreciate the wide range of designs and products offered by NSFW Clothes in an engaging and user-friendly way. Customers can easily browse the site, discover products, and seamlessly proceed with their purchases.",
        objective:
          "Develop a fully functional application that meets all the requirements set by the client for their website.",

        approach:
          "I gained valuable experience in building an application that handles referential products. I implemented two different approaches to fetching product data—one by extracting information from a JSON file hosted on AWS and another by making API requests to a MySQL database.",

        duration:
          "   The Nuxt.js version of the project took me a little over two weeks to complete.",
        role: "     Since this is a relatively simple project, I handled the entire development process on my own.",
        future_enhancements: {
          title: "Planned future improvements:",
          item1: "Integrating a payment gateway for secure transactions.",
          item2:
            "Implementing a cart system to enable users to add products to their cart and proceed with the checkout process.",
          item3:
            "Adding a user authentication system to enable users to create accounts and log in to the website.",
          item4:
            "Implementing a search feature to make it easier for users to find specific products.",
          item5:
            "Adding a user profile page to enable users to view their order history, manage their account information, and update their billing information.",
          item6:
            "Implementing a responsive design to ensure that the website looks and functions well on different devices and screen sizes.",
          item7:
            "Adding a contact form to enable users to get in touch with the website's support team.",
        },
      },
      bac: {
        title: "Book-a-Choose",
        description:
          "Personal project about a Social platform for writers and readers to share their stories, i worked with Nuxt.JS and Tailwind CSS for Front-end working with Node.js and Express + MySql for back-end RESTApi.",
        purpose:
          "Principal purpose of develop this project was give a platform to writers and readers to share their stories and learn how this kind of platforms works, giving the user a superb experience supported by our own experience in others platforms and user's suggestions.",
        objective:
          "The main objective besides brings a great experience to users is learn and practice our skills in different frameworks and libraries via this personal project, to improve our knowledge.",
        approach:
          "REST API was the main approach to develop this project, using Node.js and Fastify as a backend.",
        duration: "I've worked on this project for about +7 months.",
        role: "This is my personal project, so I was responsible for everything from planning and design to development and testing.",
        characteristics: {
          title: "Project characteristics:",
          item1:
            "User authentication provided by Firebase Auth, allowing users to create accounts and log in.",
          item2:
            "Users can create and manage their own profiles, including profile picture, username, and bio, ",
          item3:
            "Users can clearly create and manage their stories(books) and the chapters of these books, with a title, content, and cover image.",
        },
        future_enhancements: {
          title: "Planned future improvements:",
          item1: "Improve performance, auth, security and user experience.",
          item2:
            "Add more social tools for users to connect with other writers and readers.",
          item3:
            "Build a chat feature to enable users to communicate with other writers and readers.",
          item4:
            "Improve SEO and build a tag system to allow users to find their stories easily.",
          item5:
            "Add a search engine to make it easier for users to find their stories.",
          item6:
            "Implementing a responsive design to ensure that the website looks and functions well on different devices and screen sizes.",
          item7:
            "Adding a subscription system to allow users to support writers and readers and profit from their content.",
        },
      },
      az: {
        title: "Adopta Zulia",
        description:
          "Personal project: Platform to streamline pet adoption. I used Nuxt.js and Tailwind CSS for the front–end and Firebase and AWS for the backend.",
        purpose:
          "The main purpose was inspired by a real experience: a homeless kitten arrived at my house, and since I already have many pets, I wanted to put it up for adoption. That’s when I decided to create a platform to help homeless animals by expediting the process, making adoptions more effective in my city, which greatly needs it due to a growing demand from animals seeking homes.",
        objective:
          "The primary objective—aside from offering a great user experience—is to learn and practice skills with different frameworks and libraries through this personal project, thereby improving our knowledge.",
        approach:
          "The main approach was to develop a platform using CRUD operations with Firebase Realtime Database efficiently.",
        duration:
          "I have been working on this project for approximately 1 month.",
        role:
          "As my personal project, I was responsible for everything: from planning and design to development and testing.",
        characteristics: {
          title: "Project features:",
          item1:
            "User authentication provided by Firebase Auth, allowing account creation and sign–in.",
          item2:
            "Users can create and manage the pets they have for adoption, including a profile photo, name, adoption stories, and comments."
        },
        future_enhancements: {
          title: "Planned future improvements:",
          item1:
            "Improve performance, authentication, security, and user experience.",
          item2:
            "Build a chat system to enable communication between users.",
          item3:
            "Enhance SEO and implement a tagging system."
        }
      }
    },
    es: {
      projects: "Proyectos",
      hello: "Hola, soy",
      description:
        "Desarrollador Web con más de 7 años de experiencia. Más de 3 años construyendo proyectos con Laravel y enamorado de Vue.js durante los últimos 2 años.",
      nav_title: "Inicio",
      projects_title: "Proyectos",
      visit: "Visitar",
      learn_more: "Más detalles",
      back_button: "Volver atrás",
      purpose: "Propósito",
      objective: "Objetivo",
      Technologies: "Tecnologías",
      approach: "Enfoque",
      project_duration: "Duración",
      future_enhancements: "Mejoras Futuras",
      role: "Rol",
      my_cv: "CV",
      nsfw_future_enhancements: {
        title: "Mejoras futuras planeadas:",
        item1:
          "Integración de una pasarela de pagos para transacciones seguras.",
        item2:
          "Implementación de un sistema de carrito para permitir a los usuarios agregar productos y finalizar la compra.",
        item3:
          "Adición de un sistema de autenticación de usuarios para crear cuentas y acceder al sitio.",
        item4:
          "Implementación de un sistema de búsqueda para facilitar la localización de productos específicos.",
        item5:
          "Creación de un perfil de usuario para ver historial de pedidos, gestionar información de cuenta y datos de facturación.",
        item6:
          "Implementación de un diseño responsivo para garantizar un funcionamiento óptimo en todos los dispositivos y tamaños de pantalla.",
        item7:
          "Incorporación de un formulario de contacto para comunicación con el equipo de soporte.",
      },
      final_product: "Producto Final",
      Description: "Descripción",
      Repository: "Repositorio",
      Live: "En Vivo",
      nsfw: {
        title: "NSFW Clothes",
        description:
          "SPA para una marca de ropa: Responsable del desarrollo completo del sitio, construido con Nuxt.js y Vue.js en el front-end, estilizado con Tailwind CSS. El back-end fue alimentado por una API REST construida con Node.js y Fastify.",
        purpose:
          "Crear un sitio web que permita a los clientes explorar y apreciar la amplia gama de diseños y productos ofrecidos por NSFW Clothes de manera atractiva y fácil de usar. Los clientes pueden navegar fácilmente por el sitio, descubrir productos y proceder de manera fluida con sus compras.",
        objective:
          "Desarrollar una aplicación completamente funcional que cumpla con todos los requisitos establecidos por el cliente para su sitio web.",
        approach:
          "Obtuve experiencia valiosa construyendo una aplicación que maneja productos referenciales. Implementé dos enfoques diferentes para obtener datos de productos: uno extrayendo información de un archivo JSON alojado en AWS y otro realizando peticiones a una API conectada a una base de datos MySQL.",
        duration:
          "La versión en Nuxt.js del proyecto me tomó un poco más de dos semanas completar.",
        role: "Al ser un proyecto relativamente simple, gestioné todo el proceso de desarrollo de manera independiente.",
        future_enhancements: {
          title: "Mejoras futuras planeadas:",
          item1:
            "Integración de una pasarela de pagos para transacciones seguras.",
          item2:
            "Implementación de un sistema de carrito para permitir a los usuarios agregar productos y completar la compra.",
          item3:
            "Adición de un sistema de autenticación de usuarios para crear cuentas y acceder al sitio.",
          item4:
            "Implementación de un sistema de búsqueda para facilitar la localización de productos específicos.",
          item5:
            "Creación de un perfil de usuario para ver historial de pedidos, gestionar información de cuenta y datos de facturación.",
          item6:
            "Implementación de un diseño responsivo para garantizar un funcionamiento óptimo en todos los dispositivos.",
          item7:
            "Incorporación de un formulario de contacto para comunicación con el equipo de soporte.",
        },
      },
      bac: {
        title: "Book-a-Choose",
        description:
          "Proyecto personal: Plataforma social para escritores y lectores compartir sus historias. Utilicé Nuxt.js y Tailwind CSS para el front-end, trabajando con Node.js y Express + MySQL para la API REST del back-end.",
        purpose:
          "El propósito principal de desarrollar este proyecto fue proporcionar una plataforma para que escritores y lectores compartan sus historias y entender cómo funcionan este tipo de plataformas, ofreciendo una experiencia excepcional apoyada en nuestra propia experiencia y sugerencias de usuarios.",
        objective:
          "El objetivo principal, además de ofrecer una gran experiencia a los usuarios, es aprender y practicar habilidades con diferentes frameworks y bibliotecas mediante este proyecto personal, para mejorar nuestro conocimiento.",
        approach:
          "El enfoque principal fue desarrollar una API REST utilizando Node.js y Fastify como back-end.",
        duration:
          "He trabajado en este proyecto durante aproximadamente más de 7 meses.",
        role: "Al ser mi proyecto personal, fui responsable de todo: desde la planificación y diseño hasta el desarrollo y pruebas.",
        characteristics: {
          title: "Características del proyecto:",
          item1:
            "Autenticación de usuarios proporcionada por Firebase Auth, permitiendo crear cuentas e iniciar sesión.",
          item2:
            "Los usuarios pueden crear y gestionar sus perfiles, incluyendo foto de perfil, nombre de usuario y biografía.",
          item3:
            "Los usuarios pueden crear y gestionar claramente sus historias (libros) y los capítulos de estos, con título, contenido e imagen de portada.",
        },
        future_enhancements: {
          title: "Mejoras futuras planeadas:",
          item1:
            "Mejorar rendimiento, autenticación, seguridad y experiencia de usuario.",
          item2:
            "Añadir más herramientas sociales para que los usuarios se conecten con otros escritores y lectores.",
          item3:
            "Construir un sistema de chat para permitir la comunicación entre usuarios.",
          item4:
            "Mejorar el SEO e implementar un sistema de etiquetas para facilitar la búsqueda de historias.",
          item5:
            "Añadir un motor de búsqueda para facilitar la localización de historias.",
          item6:
            "Implementar un diseño responsivo que funcione bien en diferentes dispositivos y tamaños de pantalla.",
          item7:
            "Añadir un sistema de suscripciones para permitir a los usuarios apoyar a los escritores y obtener beneficios de su contenido.",
        },
      }, 
      az: {
        title: "Adopta Zulia",
        description:
          "Proyecto personal:Plataforma para agilizar la adopcion de mascotas. Utilicé Nuxt.js y Tailwind CSS para el front-end y Firebase y AWS para backend.",
        purpose:
          "Como proposito principal tomamos una experiencia real pues a mi casa llego un gatito sin hogar y como ya tengo muchos, quize darlo en adopcion y ahi fue que pense en crear una plataforma para ayudar a los animalitos sin hogar, agilizando el proceso para que sea mas efectiva las adopciones en mi ciudad, que tanto necesita pues hay una creciente demanda de animalitos en busca de hogar.",
        objective:
          "El objetivo principal, además de ofrecer una gran experiencia a los usuarios, es aprender y practicar habilidades con diferentes frameworks y bibliotecas mediante este proyecto personal, para mejorar nuestro conocimiento.",
        approach:
          "El enfoque principal fue desarrollar una plataforma usando CRUD con Firebase Realtime Database de manera efectiva.",
        duration:
          "He trabajado en este proyecto aproximadamente 1 mes.",
        role: "Al ser mi proyecto personal, fui responsable de todo: desde la planificación y diseño hasta el desarrollo y pruebas.",
        characteristics: {
          title: "Características del proyecto:",
          item1:
            "Autenticación de usuarios proporcionada por Firebase Auth, permitiendo crear cuentas e iniciar sesión.",
          item2:
            "Los usuarios pueden crear y gestionar las mascotas que tienen en adopcion, incluyendo foto de perfil, nombre de usuario, historias de adopcion y comentarios.",
        },
        future_enhancements: {
          title: "Mejoras futuras planeadas:",
          item1:
            "Mejorar rendimiento, autenticación, seguridad y experiencia de usuario.",
          item2:
            "Construir un sistema de chat para permitir la comunicación entre usuarios.",
          item3:
            "Mejorar el SEO e implementar un sistema de etiquetas.",
        },
      },
    },
  },
}));
