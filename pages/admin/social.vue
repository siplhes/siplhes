<script setup lang="ts">
import { getSocial, updateSocial, deleteSocial, createSocial } from "~/firebase/portfolioService";

definePageMeta({ middleware: "admin" });

const loading = ref(true);
const saving = ref<string | null>(null);
const message = ref("");
const isError = ref(false);

const links = ref<Record<string, { url: string; label: string; icon: string }>>({});

const newKey = ref("");
const newLabel = ref("");
const newUrl = ref("");
const newIcon = ref("");

onMounted(async () => {
  try {
    const data = await getSocial();
    if (data) links.value = data;
  } catch (e) {
    console.error(e);
  } finally {
    loading.value = false;
  }
});

async function saveLink(key: string) {
  saving.value = key;
  message.value = "";
  isError.value = false;
  try {
    await updateSocial(key, links.value[key]);
    message.value = "✓ Social link updated";
  } catch (e: any) {
    message.value = "Error: " + (e.message || e);
    isError.value = true;
  } finally {
    saving.value = null;
  }
}

async function removeLink(key: string) {
  if (!confirm(`Delete "${key}"?`)) return;
  try {
    await deleteSocial(key);
    const { [key]: _, ...rest } = links.value;
    links.value = rest;
  } catch (e: any) {
    alert("Error: " + (e.message || e));
  }
}

async function handleCreate() {
  if (!newKey.value.trim()) return;
  try {
    const data = { url: newUrl.value, label: newLabel.value, icon: newIcon.value };
    await createSocial(newKey.value.trim(), data);
    links.value[newKey.value.trim()] = data;
    newKey.value = "";
    newLabel.value = "";
    newUrl.value = "";
    newIcon.value = "";
    message.value = "✓ Social link created";
    isError.value = false;
  } catch (e: any) {
    message.value = "Error: " + (e.message || e);
    isError.value = true;
  }
}
</script>

<template>
  <AdminShell
    terminal-title="admin@panel:~$"
    command="./social --edit"
    back-to="/admin"
    :loading="loading"
    :message="message"
    :is-error="isError"
  >
    <template #body>
      <div class="social-editor">
        <div v-for="(link, key) in links" :key="key" class="link-block">
          <div class="link-header">
            <span class="prompt">$</span>
            <span class="link-key">{{ key }}:</span>
            <button class="rm-btn" @click="removeLink(key)" title="Delete">[rm]</button>
          </div>
          <div class="link-fields">
            <div class="field">
              <span class="prompt">&gt;</span>
              <span class="label-sm">label:</span>
              <input v-model="link.label" class="term-input" placeholder="GitHub" />
            </div>
            <div class="field">
              <span class="prompt">&gt;</span>
              <span class="label-sm">url:</span>
              <input v-model="link.url" class="term-input" placeholder="https://..." />
            </div>
            <div class="field">
              <span class="prompt">&gt;</span>
              <span class="label-sm">icon:</span>
              <input v-model="link.icon" class="term-input" placeholder="uil:github" />
              <span class="icon-hint">Icon set prefix: uil:</span>
            </div>
            <div class="field save-line">
              <button class="term-btn-small" @click="saveLink(key)" :disabled="saving === key">
                {{ saving === key ? "saving..." : "save" }}
              </button>
            </div>
          </div>
        </div>

        <div class="divider">─── create new ───</div>

        <div class="create-section">
          <div class="field">
            <span class="prompt">$</span>
            <span class="label-sm">key:</span>
            <input v-model="newKey" class="term-input" placeholder="twitter" />
          </div>
          <div class="field">
            <span class="prompt">&gt;</span>
            <span class="label-sm">label:</span>
            <input v-model="newLabel" class="term-input" placeholder="Twitter" />
          </div>
          <div class="field">
            <span class="prompt">&gt;</span>
            <span class="label-sm">url:</span>
            <input v-model="newUrl" class="term-input" placeholder="https://twitter.com/..." />
          </div>
          <div class="field">
            <span class="prompt">&gt;</span>
            <span class="label-sm">icon:</span>
            <input v-model="newIcon" class="term-input" placeholder="uil:twitter" />
          </div>
          <button class="term-btn" @click="handleCreate">
            <span class="prompt">$</span>
            create
          </button>
        </div>
      </div>
    </template>
  </AdminShell>
</template>

<style scoped>
.social-editor {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.link-block {
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 6px;
  padding: 0.75rem;
}

.link-header {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 0.5rem;
}

.link-key {
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.8rem;
  font-weight: bold;
  text-transform: lowercase;
}

.rm-btn {
  background: transparent;
  border: none;
  color: rgba(255, 100, 100, 0.4);
  font-family: inherit;
  font-size: 0.7rem;
  cursor: pointer;
  margin-left: auto;
  transition: color 0.2s;
}

.rm-btn:hover {
  color: rgba(255, 100, 100, 0.8);
}

.link-fields {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.field {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 0.75rem;
}

.label-sm {
  color: rgba(255, 255, 255, 0.3);
  min-width: 40px;
  flex-shrink: 0;
}

.icon-hint {
  color: rgba(255, 255, 255, 0.12);
  font-size: 0.6rem;
  white-space: nowrap;
}

.term-input {
  flex: 1;
  background: #111;
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.8);
  padding: 5px 8px;
  font-family: 'JetBrains Mono', 'Fira Code', Consolas, Monaco, monospace;
  font-size: 0.75rem;
  border-radius: 3px;
  outline: none;
  transition: border-color 0.2s;
}

.term-input:focus {
  border-color: rgba(255, 255, 255, 0.3);
  color: #fff;
}

.save-line {
  justify-content: flex-end;
}

.term-btn-small {
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.4);
  padding: 3px 10px;
  font-family: inherit;
  font-size: 0.7rem;
  border-radius: 3px;
  cursor: pointer;
  transition: all 0.2s;
}

.term-btn-small:hover:not(:disabled) {
  border-color: rgba(255, 255, 255, 0.25);
  color: rgba(255, 255, 255, 0.7);
}

.term-btn-small:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.divider {
  color: rgba(255, 255, 255, 0.1);
  font-size: 0.65rem;
  text-align: center;
  margin: 0.5rem 0;
}

.create-section {
  border: 1px dashed rgba(255, 255, 255, 0.08);
  border-radius: 6px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.term-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.15);
  color: rgba(255, 255, 255, 0.6);
  padding: 6px 14px;
  font-family: inherit;
  font-size: 0.75rem;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s;
  align-self: flex-start;
}

.term-btn:hover {
  border-color: rgba(255, 255, 255, 0.3);
  color: #fff;
}

.prompt {
  color: rgba(255, 255, 255, 0.4);
  font-weight: bold;
  flex-shrink: 0;
}
</style>
