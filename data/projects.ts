export interface Project {
  slug: string
  title: string
  description: string
  url: string
  logo: {
    type: 'image' | 'component'
    src?: string
    component?: string
    className?: string
  }
  images: string[]
  primaryImageIndex: number
  seoTitle: string
  purpose: string
  objective: string
  approach: string
  role: string
  duration: string
  characteristics?: string[]
  futureEnhancements?: string[]
  hasCharacteristics?: boolean
  techs?: string[]
}

export const projects: Project[] = [
  {
    ///AdoptaZulia
    slug: 'adoptazulia',
    title: 'Adopta Zulia',
    description:
      'Personal project: Platform to streamline pet adoption. I used Nuxt.js and Tailwind CSS for the front–end and Firebase and AWS for the backend.',
    url: 'https://adoptazulia.org.ve',
    logo: {
      type: 'image',
      src: '/images/az.webp',
      className: 'project-image'
    },
    images: ['/images/az1.webp', '/images/az2.webp', '/images/az3.webp', '/images/az4.webp', '/images/az5.webp'],
    primaryImageIndex: 0,
    seoTitle: 'az Clothes Project by Joseph Hurtado',
    purpose:
      'The main purpose was inspired by a real experience: a homeless kitten arrived at my house, and since I already have many pets, I wanted to put it up for adoption. That\'s when I decided to create a platform to help homeless animals by expediting the process, making adoptions more effective in my city, which greatly needs it due to a growing demand from animals seeking homes.',
    objective:
      'The primary objective—aside from offering a great user experience—is to learn and practice skills with different frameworks and libraries through this personal project, thereby improving our knowledge.',
    approach:
      'The main approach was to develop a platform using CRUD operations with Firebase Realtime Database efficiently.',
    duration:
      'I have been working on this project for approximately 1 month.',
    role:
      'As my personal project, I was responsible for everything: from planning and design to development and testing.',
    characteristics: [
      'User authentication provided by Firebase Auth, allowing account creation and sign–in.',
      'Users can create and manage the pets they have for adoption, including a profile photo, name, adoption stories, and comments.'
    ],
    futureEnhancements: [
      'Improve performance, authentication, security, and user experience.',
      'Build a chat system to enable communication between users.',
      'Enhance SEO and implement a tagging system.'
    ],
    hasCharacteristics: true
  },
  ///BookAChoose
  {
    slug: 'bookachoose',
    title: 'Book-a-Choose',
    description:
      'Personal project about a Social platform for writers and readers to share their stories, i worked with Nuxt.JS and Tailwind CSS for Front-end working with Node.js and Express + MySql for back-end RESTApi.',
    url: 'https://bookachoose.vercel.app',
    logo: {
      type: 'image',
      src: '/images/BookAChoose.svg',
      className: 'w-1/2'
    },
    images: [
      '/images/bac/1.webp',
      '/images/bac/2.webp',
      '/images/bac/3.webp',
      '/images/bac/4.webp',
      '/images/bac/5.webp'
    ],
    primaryImageIndex: 0,
    seoTitle: 'Book-a-Choose Project by Joseph Hurtado',
    purpose:
      'Principal purpose of develop this project was give a platform to writers and readers to share their stories and learn how this kind of platforms works, giving the user a superb experience supported by our own experience in others platforms and user\'s suggestions.',
    objective:
      'The main objective besides brings a great experience to users is learn and practice our skills in different frameworks and libraries via this personal project, to improve our knowledge.',
    approach:
      'REST API was the main approach to develop this project, using Node.js and Fastify as a backend.',
    duration: 'I\'ve worked on this project for about +7 months.',
    role: 'This is my personal project, so I was responsible for everything from planning and design to development and testing.',
    characteristics: [
      'User authentication provided by Firebase Auth, allowing users to create accounts and log in.',
      'Users can create and manage their own profiles, including profile picture, username, and bio.',
      'Users can clearly create and manage their stories(books) and the chapters of these books, with a title, content, and cover image.'
    ],
    futureEnhancements: [
      'Improve performance, auth, security and user experience.',
      'Add more social tools for users to connect with other writers and readers.',
      'Build a chat feature to enable users to communicate with other writers and readers.',
      'Improve SEO and build a tag system to allow users to find their stories easily.',
      'Add a search engine to make it easier for users to find their stories.',
      'Implementing a responsive design to ensure that the website looks and functions well on different devices and screen sizes.',
      'Adding a subscription system to allow users to support writers and readers and profit from their content.'
    ],
    hasCharacteristics: true
  },
  ///NSFW Clothes
  {
    slug: 'nsfwclothes',
    title: 'NSFW Clothes',
    description:
      'SPA for a clothing brand: I was responsible for the entire development of the site, building it with Nuxt.js and Vue.js for the front-end, styled with Tailwind CSS. The back-end was powered by a REST API built with Node.js and Fastify.',
    url: 'https://nsfwclothes.vercel.app/',
    logo: {
      type: 'component',
      component: 'NSFWLogo',
      className: 'nsfwlogo'
    },
    images: ['/images/nsfw1.webp'],
    primaryImageIndex: 0,
    seoTitle: 'NSFW Clothes Project by Joseph Hurtado',
    purpose:
      'Create a website that allows customers to explore and appreciate the wide range of designs and products offered by NSFW Clothes in an engaging and user-friendly way. Customers can easily browse the site, discover products, and seamlessly proceed with their purchases.',
    objective:
      'Develop a fully functional application that meets all the requirements set by the client for their website.',
    approach:
      'I gained valuable experience in building an application that handles referential products. I implemented two different approaches to fetching product data—one by extracting information from a JSON file hosted on AWS and another by making API requests to a MySQL database.',
    duration:
      'The Nuxt.js version of the project took me a little over two weeks to complete.',
    role: 'Since this is a relatively simple project, I handled the entire development process on my own.',
    futureEnhancements: [
      'Integrating a payment gateway for secure transactions.',
      'Implementing a cart system to enable users to add products to their cart and proceed with the checkout process.',
      'Adding a user authentication system to enable users to create accounts and log in to the website.',
      'Implementing a search feature to make it easier for users to find specific products.',
      'Adding a user profile page to enable users to view their order history, manage their account information, and update their billing information.',
      'Implementing a responsive design to ensure that the website looks and functions well on different devices and screen sizes.',
      'Adding a contact form to enable users to get in touch with the website\'s support team.'
    ]
  },
  ///SKPRT
  {
    slug: 'skprt',
    title: 'SKPRT',
    description:
      'Multi-tenant SaaS e-commerce platform built with Nuxt.js, PostgreSQL, and Stripe. Designed to let multiple businesses run their online stores from a single, shared infrastructure with full tenant isolation.',
    url: '#',
    logo: {
      type: 'image',
      src: '',
      className: ''
    },
    images: [],
    primaryImageIndex: 0,
    seoTitle: 'SKPRT — Multi-tenant SaaS E-commerce by Joseph Hurtado',
    purpose:
      'Provide a scalable, multi-tenant e-commerce solution that enables multiple businesses to launch and manage their online stores from a single platform, reducing overhead and simplifying maintenance.',
    objective:
      'Build a production-ready SaaS platform with complete tenant isolation, shared core infrastructure, customizable storefronts, and seamless payment processing.',
    approach:
      'Architected with database-level tenant isolation, tenant-aware middleware, and a shared API gateway. Each tenant receives a fully customizable storefront backed by the same battle-tested core modules — auth, catalog, cart, checkout, and payments.',
    duration: 'In active development.',
    role: 'Full-stack developer and architect — responsible for system design, multi-tenant architecture, front-end, API, and deployment.',
    characteristics: [
      'Multi-tenant architecture with isolated data per tenant.',
      'Customizable storefronts per tenant using a shared component library.',
      'Integrated Stripe payments with subscription billing.'
    ],
    futureEnhancements: [
      'Admin dashboard with per-tenant analytics and reporting.',
      'Multi-currency and multi-language support.',
      'Inventory management with real-time stock tracking.',
      'Automated onboarding flow for new tenants.',
      'Plugin marketplace for extending storefront capabilities.',
      'Headless API mode for custom front-end integrations.',
      'Performance optimizations and CDN-based asset delivery.'
    ],
    techs: [
      'nuxt',
      'vuejs',
      'typescript',
      'tailwind-css',
      'postgresql',
      'stripe',
      'docker',
      'aws'
    ]
  }
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find(p => p.slug === slug)
}
