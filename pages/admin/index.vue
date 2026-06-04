<script setup lang="ts">
import { useAdminAuth } from "~/composables/useAdminAuth";

definePageMeta({ middleware: "admin" });

const { logout, user } = useAdminAuth();
const seeding = ref(false);

async function handleSeed() {
  if (!confirm("This will overwrite all existing data with the static defaults. Continue?")) return;
  seeding.value = true;
  try {
    const { seedDatabase } = await import("~/firebase/seed");
    await seedDatabase();
    alert("✓ Database seeded successfully!");
  } catch (e: any) {
    alert("Error seeding database: " + (e.message || e));
  } finally {
    seeding.value = false;
  }
}

async function handleLogout() {
  await logout();
  navigateTo("/admin/login");
}

const sections = [
  { path: "/admin/profile", label: "Profile", icon: "◆", desc: "Edit personal info & availability" },
  { path: "/admin/projects", label: "Projects", icon: "●", desc: "CRUD portfolio projects" },
  { path: "/admin/tech", label: "Tech Stack", icon: "◇", desc: "Manage technologies & descriptions" },
  { path: "/admin/social", label: "Social Links", icon: "○", desc: "Edit social network links" },

];
</script>

<template>
  <AdminShell
    terminal-title="admin@panel:~$"
    command="./dashboard --show"
    message=""
  >
    <template #header-right>
      <button class="logout-btn" @click="handleLogout">[logout]</button>
    </template>

    <template #body>
      <h1 class="dashboard-title">
        <span class="text-white">ADMIN DASHBOARD</span>
        <span class="text-dim"> ─── </span>
        <span class="text-muted">{{ user?.email }}</span>
      </h1>

      <div class="divider">━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━</div>

      <div class="cards-grid">
        <NuxtLink
          v-for="(s, i) in sections"
          :key="s.path"
          :to="s.path"
          class="card-link"
          :style="{ '--stagger': i }"
        >
          <div class="card-window">
            <div class="card-header">
              <span class="card-dot"></span>
              <span class="card-dot"></span>
              <span class="card-dot"></span>
              <span class="card-label">{{ s.label }}</span>
            </div>
            <div class="card-body">
              <span class="card-icon">{{ s.icon }}</span>
              <span class="card-desc">{{ s.desc }}</span>
            </div>
          </div>
        </NuxtLink>
      </div>

      <div class="divider">━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━</div>

      <div class="seed-section">
        <button class="term-btn seed-btn" @click="handleSeed" :disabled="seeding">
          <span class="prompt">$</span>
          {{ seeding ? "seeding..." : "./seed --database" }}
        </button>
        <span class="seed-hint">Initialize Firebase with default static data</span>
      </div>
    </template>

    <template #actions>
      <span class="footer-text">Portfolio CMS v1.0 — Firebase RTDB</span>
    </template>
  </AdminShell>
</template>

<style scoped>
.logout-btn {
  margin-left: auto;
  background: transparent;
  border: none;
  color: rgba(255, 255, 255, 0.3);
  font-family: 'JetBrains Mono', 'Fira Code', Consolas, Monaco, monospace;
  font-size: 0.7rem;
  cursor: pointer;
  padding: 2px 6px;
  transition: color 0.2s;
  position: relative;
  z-index: 1;
}

.logout-btn:hover {
  color: rgba(255, 100, 100, 0.7);
}

.dashboard-title {
  font-size: 1rem;
  font-weight: normal;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
}

.text-white {
  color: rgba(255, 255, 255, 0.85);
}

.text-dim {
  color: rgba(255, 255, 255, 0.2);
  font-size: 0.7rem;
}

.text-muted {
  color: rgba(255, 255, 255, 0.5);
  font-size: 0.8rem;
}

.divider {
  color: rgba(255, 255, 255, 0.08);
  font-size: 0.6rem;
  margin: 1rem 0;
  letter-spacing: -1px;
}

.cards-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  margin-bottom: 1rem;
}

@media (min-width: 640px) {
  .cards-grid {
    grid-template-columns: 1fr 1fr;
  }
}

.card-link {
  text-decoration: none;
  display: block;
}

.card-window {
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 6px;
  overflow: hidden;
  transition: all 0.25s ease;
  opacity: 0;
  transform: translateY(12px);
  animation: cardEnter 0.4s ease forwards;
  animation-delay: calc(var(--stagger, 0) * 0.08s);
}

@keyframes cardEnter {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.card-window:hover {
  border-color: rgba(255, 255, 255, 0.15);
  background: rgba(255, 255, 255, 0.02);
}

.card-header {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 6px 10px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.04);
  background: rgba(0, 0, 0, 0.2);
}

.card-dot {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
}

.card-label {
  margin-left: auto;
  font-size: 0.65rem;
  color: rgba(255, 255, 255, 0.25);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.card-body {
  padding: 1rem;
  display: flex;
  align-items: flex-start;
  gap: 10px;
}

.card-icon {
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.3);
  flex-shrink: 0;
  line-height: 1;
}

.card-desc {
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.5);
  line-height: 1.4;
}

.seed-section {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
}

.term-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.5);
  padding: 6px 14px;
  font-family: 'JetBrains Mono', 'Fira Code', Consolas, Monaco, monospace;
  font-size: 0.75rem;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s;
}

.term-btn:hover:not(:disabled) {
  border-color: rgba(255, 255, 255, 0.25);
  color: #fff;
}

.term-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.seed-hint {
  color: rgba(255, 255, 255, 0.2);
  font-size: 0.65rem;
}

.footer-text {
  color: rgba(255, 255, 255, 0.15);
  font-size: 0.65rem;
}

.prompt {
  color: rgba(255, 255, 255, 0.4);
  font-weight: bold;
}
</style>
