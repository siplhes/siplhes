import { ref as vueRef } from "vue";
import {
  getProfile,
  getSocial,
  getTech,
  getProjects,
  type Profile,
  type SocialLink,
  type TechCategory,
  type Project,
} from "~/firebase/portfolioService";

// ─── Singleton cache ─────────────────────────

const profile = vueRef<Profile | null>(null);
const social = vueRef<Record<string, SocialLink> | null>(null);
const tech = vueRef<{ categories: TechCategory[] } | null>(null);
const projects = vueRef<Record<string, Project> | null>(null);
const loaded = vueRef(false);
const loading = vueRef(false);

export function usePortfolioData() {
  async function loadAll() {
    if (loaded.value || loading.value) return;
    loading.value = true;
    try {
      const [p, s, t, pr] = await Promise.all([
        getProfile(),
        getSocial(),
        getTech(),
        getProjects(),
      ]);
      if (p) profile.value = p;
      if (s) social.value = s;
      if (t) tech.value = t;
      if (pr) projects.value = pr;
      loaded.value = true;
    } catch (err) {
      console.error("Failed to load portfolio data:", err);
    } finally {
      loading.value = false;
    }
  }

  return {
    profile,
    social,
    tech,
    projects,
    loaded,
    loading,
    loadAll,
  };
}
