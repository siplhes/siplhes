import type { TechCategory, TechItem, Project } from "~/firebase/portfolioService";

/**
 * Normalize tech categories from Firebase:
 * - items[] might be old string[] format → convert to TechItem[]
 * - descriptions might be keyed by label → migrate to slug-keyed
 */
function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "") // remove special chars
    .replace(/[\s_]+/g, "-")  // spaces/underscores → hyphens
    .replace(/^-+|-+$/g, "")  // trim hyphens
}

export function normalizeTech(data: { categories: TechCategory[] } | null): { categories: TechCategory[] } | null {
  if (!data) return null;
  return {
    categories: data.categories.map((cat) => {
      const rawItems = (cat.items || []) as any[];
      // Convert string[] to TechItem[] if needed
      const items: TechItem[] = rawItems.map((item) => {
        if (typeof item === "string") {
          return { label: item, slug: slugify(item) };
        }
        return item as TechItem;
      });
      // Build slug→label mapping from migrated items
      const slugToLabel: Record<string, string> = {};
      for (const item of items) {
        slugToLabel[item.slug] = item.label;
      }

      // Migrate descriptions: if keys match labels (old format), re-key by slug
      const descs = cat.descriptions || {};
      const migratedDescs: Record<string, { years: string; desc: string }> = {};
      for (const [key, val] of Object.entries(descs)) {
        const slug = slugify(key);
        // Check if the key looks like a label (exists in slugToLabel) or is already a slug
        if (slugToLabel[slug]) {
          migratedDescs[slug] = val;
        } else if (items.some((i) => i.slug === key)) {
          // already a slug
          migratedDescs[key] = val;
        } else {
          // Try slugifying the key and check again
          migratedDescs[slug] = val;
        }
      }

      return { ...cat, items, descriptions: migratedDescs };
    }),
  };
}

/**
 * Build a flat index of all tech items across categories:
 * { [slug]: { label, slug, category, description } }
 */
function buildTechIndex(categories: TechCategory[]): Record<string, {
  label: string
  slug: string
  category: string
  description?: { years: string; desc: string }
}> {
  const index: Record<string, any> = {};
  for (const cat of categories) {
    for (const item of cat.items) {
      index[item.slug] = {
        label: item.label,
        slug: item.slug,
        category: cat.label,
        description: cat.descriptions?.[item.slug],
      };
    }
  }
  return index;
}

export function useTechData() {
  const { tech, projects } = usePortfolioData();

  /** Normalized tech categories (handles old string[] format) */
  const normalizedTech = computed(() => normalizeTech(tech.value));

  /** Flat tech index: slug → { label, category, description } */
  const techIndex = computed<Record<string, { label: string; slug: string; category: string; description?: { years: string; desc: string } }>>(() => {
    if (!normalizedTech.value?.categories) return {};
    return buildTechIndex(normalizedTech.value.categories);
  });

  /** All tech items as a flat array */
  const allTechItems = computed(() => Object.values(techIndex.value));

  /** Resolve a single tech slug to its display info */
  function getTechBySlug(slug: string) {
    return techIndex.value[slug] || null;
  }

  /** Resolve multiple tech slugs to their labels (for display) */
  function resolveTechSlugs(slugs: string[]): { label: string; slug: string }[] {
    return slugs
      .map((slug) => {
        const found = techIndex.value[slug];
        return found ? { label: found.label, slug: found.slug } : { label: slug, slug };
      });
  }

  /** Get all projects that use a given tech slug */
  function getProjectsByTech(slug: string): Project[] {
    if (!projects.value) return [];
    return Object.values(projects.value).filter((p) => p.techs?.includes(slug));
  }

  /** Convert old display-name techs to slugs (for migration) */
  function labelsToSlugs(labels: string[]): string[] {
    // Build reverse map: label → slug
    const labelToSlug: Record<string, string> = {};
    for (const item of allTechItems.value) {
      labelToSlug[item.label.toLowerCase()] = item.slug;
    }
    return labels.map((l) => labelToSlug[l.toLowerCase()] || slugify(l));
  }

  return {
    normalizedTech,
    techIndex,
    allTechItems,
    getTechBySlug,
    resolveTechSlugs,
    getProjectsByTech,
    labelsToSlugs,
    slugify,
  };
}
