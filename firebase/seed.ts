import { set, ref } from "firebase/database";
import { getDb } from "./config";
import { projects as staticProjects } from "~/data/projects";

const techCategories = [
  {
    label: "Frontend",
    items: [
      { label: "Vue.js", slug: "vuejs" },
      { label: "Nuxt", slug: "nuxt" },
      { label: "Inertia.js", slug: "inertiajs" },
      { label: "Tailwind CSS", slug: "tailwind-css" },
      { label: "Alpine.js", slug: "alpinejs" },
    ],
    descriptions: {
      "vuejs":        { years: "3yr", desc: "Progressive JS framework for building reactive UIs with a component-based architecture." },
      "nuxt":         { years: "3yr", desc: "Vue.js meta-framework offering SSR, SSG, auto-imports, and file-based routing." },
      "inertiajs":    { years: "2yr", desc: "Build single-page apps using classic server-side routing with modern client-side reactivity." },
      "tailwind-css": { years: "3yr", desc: "Utility-first CSS framework for rapid, consistent custom designs without leaving HTML." },
      "alpinejs":     { years: "2yr", desc: "Lightweight JS framework for adding reactive behavior directly in HTML markup." },
    },
  },
  {
    label: "Backend",
    items: [
      { label: "Laravel", slug: "laravel" },
      { label: "Node.js", slug: "nodejs" },
      { label: "Express", slug: "express" },
      { label: "Fastify", slug: "fastify" },
      { label: "PHP", slug: "php" },
    ],
    descriptions: {
      "laravel":  { years: "4yr", desc: "PHP framework with elegant syntax, ORM (Eloquent), artisan CLI, and robust ecosystem." },
      "nodejs":   { years: "5yr", desc: "JS runtime for building fast, scalable server-side and CLI applications." },
      "express":  { years: "3yr", desc: "Minimal and flexible Node.js web framework for building APIs and web apps." },
      "fastify":  { years: "2yr", desc: "Fast and low-overhead Node.js framework with schema-based validation and plugins." },
      "php":      { years: "5yr", desc: "General-purpose scripting language especially suited to server-side web development." },
    },
  },
  {
    label: "Database",
    items: [
      { label: "MySQL", slug: "mysql" },
      { label: "PostgreSQL", slug: "postgresql" },
      { label: "Firebase", slug: "firebase" },
      { label: "MongoDB", slug: "mongodb" },
    ],
    descriptions: {
      "mysql":      { years: "5yr", desc: "Relational database management system with ACID compliance and wide ecosystem support." },
      "postgresql": { years: "2yr", desc: "Advanced open-source RDBMS with JSON support, MVCC, and strong data integrity." },
      "firebase":   { years: "2yr", desc: "Google's app development platform with real-time DB, auth, hosting, and serverless functions." },
      "mongodb":    { years: "2yr", desc: "NoSQL document database with flexible schemas, horizontal scaling, and rich querying." },
    },
  },
  {
    label: "DevOps & Tools",
    items: [
      { label: "Git", slug: "git" },
      { label: "Docker", slug: "docker" },
      { label: "AWS", slug: "aws" },
      { label: "Figma", slug: "figma" },
      { label: "Stripe", slug: "stripe" },
      { label: "TypeScript", slug: "typescript" },
    ],
    descriptions: {
      "git":        { years: "7yr", desc: "Distributed version control system for tracking changes and collaborative development." },
      "docker":     { years: "2yr", desc: "Containerization platform for consistent, reproducible environments across dev and prod." },
      "aws":        { years: "3yr", desc: "Cloud platform offering compute, storage, databases, and serverless services at scale." },
      "figma":      { years: "3yr", desc: "Collaborative interface design tool for prototyping, design systems, and handoff." },
      "stripe":     { years: "2yr", desc: "Payment processing platform with APIs for subscriptions, invoices, and checkout flows." },
      "typescript": { years: "3yr", desc: "Typed superset of JavaScript for scalable, maintainable codebases." },
    },
  },
];

export async function seedDatabase() {
  const rootRef = ref(getDb(), "portfolio");

  const profile = {
    name: "Joseph Hurtado",
    email: "siplhes@gmail.com",
    location: "Venezuela",
    description: "Web Developer with 7+ years of experience. Over 3 years building things with Laravel and in love with Vue.js for 2 years.",
    image: "https://i.imgur.com/ZhPz5xP.png",
    available: true,
  };

  const social = {
    github: { url: "https://github.com/siplhes", label: "github", icon: "uil:github" },
    linkedin: { url: "https://www.linkedin.com/in/siplhes/", label: "linkedin", icon: "uil:linkedin" },
    whatsapp: { url: "https://wa.me/584127698781", label: "whatsapp", icon: "uil:whatsapp-alt" },
    behance: { url: "https://behance.com/siplhes", label: "behance", icon: "uil:behance" },
  };

  const tech = { categories: techCategories };

  // Build projects map from static data
  const projectsMap: Record<string, any> = {};
  for (const p of staticProjects) {
    projectsMap[p.slug] = p;
  }

  const data = { profile, social, tech, projects: projectsMap };

  await set(rootRef, data);
  return data;
}
