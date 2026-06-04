import { getProjects } from "~/firebase/portfolioService";

const SITE_URL = "https://siplhes.com";

export default defineEventHandler(async () => {
  const projects = await getProjects();
  const projectSlugs = projects ? Object.keys(projects) : [];

  const staticPages = [
    { loc: "/", priority: "1.0", changefreq: "weekly" },
    { loc: "/about", priority: "0.8", changefreq: "monthly" },
    { loc: "/cv", priority: "0.6", changefreq: "monthly" },
  ];

  const projectPages = projectSlugs.map((slug) => ({
    loc: `/project/${slug}`,
    priority: "0.7",
    changefreq: "monthly",
  }));

  const allPages = [...staticPages, ...projectPages];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages
  .map(
    (page) => `  <url>
    <loc>${SITE_URL}${page.loc}</loc>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600",
    },
  });
});
