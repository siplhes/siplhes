import { ref, set, get, update, remove } from "firebase/database";
import { getDb } from "./config";

// ─── Types ──────────────────────────────────

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

export interface Profile {
  name: string
  email: string
  location: string
  description: string
  image: string
  available: boolean
}

export interface SocialLink {
  url: string
  label: string
  icon: string
}

export interface TechItem {
  label: string
  slug: string
}

export interface TechCategory {
  label: string
  items: TechItem[]
  descriptions: Record<string, { years: string; desc: string }>
}

export interface PortfolioData {
  profile: Profile
  social: Record<string, SocialLink>
  tech: { categories: TechCategory[] }
  projects: Record<string, Project>
}

// ─── Helpers ─────────────────────────────────

const ROOT = "portfolio";

function dbRef(path: string) {
  return ref(getDb(), `${ROOT}/${path}`);
}

// ─── Profile ─────────────────────────────────

export async function getProfile(): Promise<Profile | null> {
  const snap = await get(dbRef("profile"));
  return snap.val();
}

export async function updateProfile(data: Partial<Profile>): Promise<void> {
  await update(dbRef("profile"), data);
}

// ─── Social ──────────────────────────────────

export async function getSocial(): Promise<Record<string, SocialLink> | null> {
  const snap = await get(dbRef("social"));
  return snap.val();
}

export async function updateSocial(key: string, data: SocialLink): Promise<void> {
  await set(dbRef(`social/${key}`), data);
}

export async function deleteSocial(key: string): Promise<void> {
  await remove(dbRef(`social/${key}`));
}

export async function createSocial(key: string, data: SocialLink): Promise<void> {
  await set(dbRef(`social/${key}`), data);
}

// ─── Tech ────────────────────────────────────

export async function getTech(): Promise<{ categories: TechCategory[] } | null> {
  const snap = await get(dbRef("tech"));
  return snap.val();
}

export async function updateTech(data: { categories: TechCategory[] }): Promise<void> {
  await set(dbRef("tech"), data);
}

// ─── Projects ────────────────────────────────

export async function getProjects(): Promise<Record<string, Project> | null> {
  const snap = await get(dbRef("projects"));
  return snap.val();
}

export async function getProject(slug: string): Promise<Project | null> {
  const snap = await get(dbRef(`projects/${slug}`));
  return snap.val();
}

export async function createProject(slug: string, data: Project): Promise<void> {
  await set(dbRef(`projects/${slug}`), data);
}

export async function updateProject(slug: string, data: Partial<Project>): Promise<void> {
  await update(dbRef(`projects/${slug}`), data);
}

export async function deleteProject(slug: string): Promise<void> {
  await remove(dbRef(`projects/${slug}`));
}

// ─── Full data snapshot ──────────────────────

export async function getAllPortfolioData(): Promise<PortfolioData | null> {
  const snap = await get(ref(getDb(), ROOT));
  return snap.val();
}
