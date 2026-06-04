<template>
  <div v-if="isAdmin" class="admin-fab-container">
    <!-- Toggle button -->
    <button
      class="admin-fab-toggle"
      :class="{ open: isOpen }"
      @click="isOpen = !isOpen"
      title="Admin shortcuts"
    >
      <Icon :name="isOpen ? 'lucide:x' : 'lucide:settings'" class="w-4 h-4" />
    </button>

    <!-- Expanded panel -->
    <Transition name="admin-panel">
      <div v-if="isOpen" class="admin-fab-panel">
        <div class="admin-fab-header">
          <span class="text-[10px] font-mono uppercase tracking-widest text-green/70">Admin</span>
        </div>
        <div class="admin-fab-links">
          <NuxtLink to="/admin" class="admin-fab-link" @click="isOpen = false">
            <Icon name="lucide:layout-dashboard" class="w-3.5 h-3.5" />
            <span>Dashboard</span>
          </NuxtLink>
          <NuxtLink to="/admin/projects" class="admin-fab-link" @click="isOpen = false">
            <Icon name="lucide:folder-kanban" class="w-3.5 h-3.5" />
            <span>Projects</span>
          </NuxtLink>
          <NuxtLink to="/admin/projects/create" class="admin-fab-link" @click="isOpen = false">
            <Icon name="lucide:plus" class="w-3.5 h-3.5" />
            <span>New Project</span>
          </NuxtLink>
          <NuxtLink to="/admin/profile" class="admin-fab-link" @click="isOpen = false">
            <Icon name="lucide:user" class="w-3.5 h-3.5" />
            <span>Profile</span>
          </NuxtLink>
          <NuxtLink to="/admin/tech" class="admin-fab-link" @click="isOpen = false">
            <Icon name="lucide:cpu" class="w-3.5 h-3.5" />
            <span>Tech Stack</span>
          </NuxtLink>
          <NuxtLink to="/admin/social" class="admin-fab-link" @click="isOpen = false">
            <Icon name="lucide:share-2" class="w-3.5 h-3.5" />
            <span>Social Links</span>
          </NuxtLink>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useIsAdmin } from "~/composables/useIsAdmin";

const { isAdmin } = useIsAdmin();
const isOpen = ref(false);
</script>

<style scoped>
.admin-fab-container {
  position: fixed;
  bottom: 1.5rem;
  right: 1.5rem;
  z-index: 9999;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.75rem;
}

.admin-fab-toggle {
  width: 40px;
  height: 40px;
  border-radius: 12px;
  border: 1px solid rgba(34, 197, 94, 0.2);
  background: rgba(10, 10, 10, 0.9);
  backdrop-filter: blur(12px);
  color: rgba(34, 197, 94, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.25s ease;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
}

.admin-fab-toggle:hover {
  border-color: rgba(34, 197, 94, 0.4);
  color: rgba(34, 197, 94, 1);
  transform: scale(1.05);
  box-shadow: 0 4px 24px rgba(34, 197, 94, 0.1);
}

.admin-fab-toggle.open {
  border-color: rgba(255, 255, 255, 0.15);
  color: rgba(255, 255, 255, 0.6);
}

.admin-fab-panel {
  width: 200px;
  background: rgba(10, 10, 10, 0.95);
  backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5);
}

.admin-fab-header {
  padding: 10px 14px 6px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.04);
}

.admin-fab-links {
  padding: 6px;
  display: flex;
  flex-direction: column;
}

.admin-fab-link {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 10px;
  border-radius: 8px;
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.5);
  text-decoration: none;
  font-family: 'JetBrains Mono', 'Fira Code', Consolas, Monaco, monospace;
  transition: all 0.15s ease;
}

.admin-fab-link:hover {
  background: rgba(255, 255, 255, 0.05);
  color: rgba(255, 255, 255, 0.9);
}

/* Panel transition */
.admin-panel-enter-active {
  transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
}
.admin-panel-leave-active {
  transition: all 0.15s ease-in;
}
.admin-panel-enter-from {
  opacity: 0;
  transform: translateY(8px) scale(0.95);
}
.admin-panel-leave-to {
  opacity: 0;
  transform: translateY(4px) scale(0.97);
}

@media (max-width: 640px) {
  .admin-fab-container {
    bottom: 1rem;
    right: 1rem;
  }
}
</style>
