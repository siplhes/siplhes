<script setup lang="ts">
import { getProjects, deleteProject } from "~/firebase/portfolioService";
import { useAdminAuth } from "~/composables/useAdminAuth";

definePageMeta({ middleware: "admin" });

const loading = ref(true);
const projects = ref<Record<string, any>>({});

onMounted(async () => {
  try {
    const data = await getProjects();
    if (data) projects.value = data;
  } catch (e) {
    console.error(e);
  } finally {
    loading.value = false;
  }
});

async function handleDelete(slug: string) {
  if (!confirm(`Delete project "${slug}"? This cannot be undone.`)) return;
  try {
    await deleteProject(slug);
    const { [slug]: _, ...rest } = projects.value;
    projects.value = rest;
  } catch (e: any) {
    alert("Error: " + (e.message || e));
  }
}

const entries = computed(() => Object.entries(projects.value));
</script>

<template>
  <AdminShell
    terminal-title="admin@panel:~$"
    command="ls -la ./projects/"
    back-to="/admin"
    :loading="loading"
  >
    <template #body>
      <div class="actions-bar">  
        <NuxtLink to="/admin/projects/create" class="term-btn new-btn">
          <span class="prompt">$</span> touch ./new-project/
        </NuxtLink>
      </div>

      <div class="ls-listing">
        <div class="ls-row ls-header">
          <span class="col-name">Name</span>
          <span class="col-techs">Techs</span>
          <span class="col-actions"></span>
        </div>

        <div v-for="([slug, proj]) in entries" :key="slug" class="ls-row ls-item">
          <NuxtLink :to="`/admin/projects/edit/${slug}`" class="col-name link">
            <span class="file-icon">📁</span> {{ proj.title || slug }}/
          </NuxtLink>
          <span class="col-techs">{{ (proj.techs?.length || 0) }} techs</span>
          <span class="col-actions">
            <button class="rm-btn" @click="handleDelete(slug)" title="Delete">[rm]</button>
          </span>
        </div>

        <div v-if="entries.length === 0 && !loading" class="empty-msg">
          No projects yet.
          <NuxtLink to="/admin/projects/create" class="link">Create one</NuxtLink>
        </div>
      </div>
    </template>

    <template #actions>
      <span class="footer-text">total {{ entries.length }} projects</span>
    </template>
  </AdminShell>
</template>

<style scoped>
.actions-bar {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 1rem;
}

.term-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.15);
  color: rgba(255, 255, 255, 0.6);
  padding: 6px 14px;
  font-family: 'JetBrains Mono', 'Fira Code', Consolas, Monaco, monospace;
  font-size: 0.75rem;
  border-radius: 4px;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.2s;
}

.term-btn:hover {
  border-color: rgba(255, 255, 255, 0.3);
  color: #fff;
}

.ls-listing {
  font-size: 0.75rem;
}

.ls-row {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 6px 8px;
  border-radius: 3px;
  transition: background 0.15s;
}

.ls-item:hover {
  background: rgba(255, 255, 255, 0.03);
}

.ls-header {
  color: rgba(255, 255, 255, 0.2);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  font-size: 0.65rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.col-name { flex: 1; }
.col-techs { width: 70px; color: rgba(255, 255, 255, 0.35); }
.col-actions { width: 50px; text-align: right; }

.file-icon { font-size: 0.7rem; margin-right: 4px; }

.link {
  color: rgba(255, 255, 255, 0.6);
  text-decoration: none;
  transition: color 0.2s;
}

.link:hover {
  color: #fff;
  text-decoration: underline;
}

.rm-btn {
  background: transparent;
  border: none;
  color: rgba(255, 100, 100, 0.3);
  font-family: inherit;
  font-size: 0.7rem;
  cursor: pointer;
  padding: 2px 4px;
  opacity: 0;
  transition: all 0.2s;
}

.ls-item:hover .rm-btn { opacity: 1; }
.rm-btn:hover { color: rgba(255, 100, 100, 0.8); }

.empty-msg {
  color: rgba(255, 255, 255, 0.2);
  padding: 1rem 0;
  font-size: 0.75rem;
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
