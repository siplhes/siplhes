<script setup lang="ts">
import { getTech, updateTech, type TechCategory, type TechItem } from "~/firebase/portfolioService";

definePageMeta({ middleware: "admin" });

const loading = ref(true);
const saving = ref(false);
const message = ref("");
const isError = ref(false);

const categories = ref<TechCategory[]>([]);
const newCatLabel = ref("");

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_]+/g, "-")
    .replace(/^-+|-+$/g, "")
}

onMounted(async () => {
  try {
    const data = await getTech();
    if (data?.categories) {
      categories.value = data.categories.map((cat) => ({
        label: cat.label || "",
        items: (cat.items || []).map((item: any) =>
          typeof item === "string" ? { label: item, slug: slugify(item) } : item
        ) as TechItem[],
        descriptions: cat.descriptions || {},
      }));
    }
  } catch (e) {
    message.value = "Failed to load tech data";
    isError.value = true;
  } finally {
    loading.value = false;
  }
});

function addCategory() {
  const label = newCatLabel.value.trim();
  if (!label) return;
  categories.value.push({ label, items: [], descriptions: {} });
  newCatLabel.value = "";
}

function removeCategory(index: number) {
  categories.value.splice(index, 1);
}

function addTechItem(cat: TechCategory) {
  cat.items.push({ label: "", slug: "" });
}

function removeTechItem(cat: TechCategory, index: number) {
  const slug = cat.items[index]?.slug;
  cat.items.splice(index, 1);
  // Clean up description for removed item
  if (slug) delete cat.descriptions[slug];
}

function autoSlug(cat: TechCategory, index: number) {
  const item = cat.items[index];
  if (item.label && !item.slug) {
    item.slug = slugify(item.label);
  }
}

function ensureDesc(cat: TechCategory, slug: string) {
  if (!cat.descriptions[slug]) {
    cat.descriptions[slug] = { years: "", desc: "" };
  }
}

async function handleSave() {
  saving.value = true;
  message.value = "";
  isError.value = false;
  try {
    // Remove empty items and orphaned descriptions
    for (const cat of categories.value) {
      cat.items = cat.items.filter((item) => item.label.trim() && item.slug.trim());
      const validSlugs = new Set(cat.items.map((i) => i.slug));
      for (const key of Object.keys(cat.descriptions)) {
        if (!validSlugs.has(key)) delete cat.descriptions[key];
      }
    }
    await updateTech({ categories: categories.value });
    message.value = "✓ Tech stack updated";
  } catch (e: any) {
    message.value = "Error: " + (e.message || e);
    isError.value = true;
  } finally {
    saving.value = false;
  }
}
</script>

<template>
  <AdminShell
    terminal-title="admin@panel:~$"
    command="./tech --edit"
    back-to="/admin"
    :loading="loading"
    :message="message"
    :is-error="isError"
  >
    <template #body>
      <div class="tech-editor">
        <!-- Add category -->
        <div class="add-cat-row">
          <span class="prompt">$</span>
          <input
            v-model="newCatLabel"
            class="term-input cat-name-input"
            placeholder="New category name..."
            @keydown.enter="addCategory"
          />
          <button class="term-btn-small" @click="addCategory" :disabled="!newCatLabel.trim()">
            + add category
          </button>
        </div>

        <!-- Categories -->
        <div v-for="(cat, ci) in categories" :key="ci" class="category-block">
          <div class="category-header">
            <span class="prompt">$</span>
            <input v-model="cat.label" class="term-input cat-label-input" placeholder="Category name" />
            <button class="rm-btn" @click="removeCategory(ci)" title="Remove category">[rm]</button>
          </div>

          <!-- Tech items -->
          <div class="items-section">
            <span class="prompt">&gt;</span>
            <span class="field-label">techs:</span>
            <div class="items-editor">
              <div v-for="(item, ti) in cat.items" :key="ti" class="item-row">
                <span class="item-index">{{ ti + 1 }}.</span>
                <input
                  v-model="item.label"
                  class="term-input item-label-input"
                  placeholder="Display name"
                  @input="autoSlug(cat, ti)"
                />
                <span class="slug-sep">→</span>
                <input
                  v-model="item.slug"
                  class="term-input item-slug-input"
                  placeholder="slug-id"
                />
                <button class="item-rm-btn" @click="removeTechItem(cat, ti)" title="Remove">&times;</button>
              </div>
              <button class="add-item-btn" @click="addTechItem(cat)">+ Add tech</button>
            </div>
          </div>

          <!-- Descriptions -->
          <div class="descriptions-section">
            <div v-for="(item, ti) in cat.items" :key="ti" class="desc-row" @click="item.slug && ensureDesc(cat, item.slug)">
              <span class="prompt">&gt;</span>
              <span class="tech-label">{{ item.slug || item.label || `item ${ti + 1}` }}</span>
              <div class="desc-fields">
                <div class="desc-field">
                  <span class="years-hint">@</span>
                  <input
                    :value="cat.descriptions[item.slug]?.years || ''"
                    @input="(e: any) => { if (!item.slug) return; ensureDesc(cat, item.slug); cat.descriptions[item.slug].years = e.target.value }"
                    class="term-input years-input"
                    placeholder="3yr"
                  />
                  <span class="desc-hint">yr</span>
                </div>
                <div class="desc-field desc-field-wide">
                  <textarea
                    :value="cat.descriptions[item.slug]?.desc || ''"
                    @input="(e: any) => { if (!item.slug) return; ensureDesc(cat, item.slug); cat.descriptions[item.slug].desc = e.target.value }"
                    class="term-input desc-input"
                    rows="1"
                    placeholder="Short description..."
                  ></textarea>
                </div>
              </div>
            </div>
            <div v-if="(cat.items?.length ?? 0) === 0" class="empty-hint">
              <span class="prompt">&gt;</span>
              <span class="empty-text">No techs added yet</span>
            </div>
          </div>
        </div>

        <!-- Empty state -->
        <div v-if="categories.length === 0 && !loading" class="empty-state">
          <span class="prompt">$</span>
          <span class="empty-text">No categories. Create one above.</span>
        </div>
      </div>
    </template>

    <template #actions>
      <button class="term-btn" @click="handleSave" :disabled="saving">
        <span class="prompt">$</span>
        {{ saving ? "saving..." : "./save --tech" }}
      </button>
    </template>
  </AdminShell>
</template>

<style scoped>
.tech-editor {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.add-cat-row {
  display: flex;
  align-items: center;
  gap: 8px;
}

.cat-name-input {
  flex: 1;
  font-size: 0.8rem;
}

.category-block {
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 6px;
  padding: 0.85rem;
}

.category-header {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 0.5rem;
}

.cat-label-input {
  flex: 1;
  font-size: 0.85rem;
  font-weight: bold;
}

.rm-btn {
  background: transparent;
  border: none;
  color: rgba(255, 100, 100, 0.4);
  font-family: inherit;
  font-size: 0.7rem;
  cursor: pointer;
  transition: color 0.2s;
}
.rm-btn:hover { color: rgba(255, 100, 100, 0.8); }

.items-section {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  margin-bottom: 0.75rem;
}

.field-label {
  color: rgba(255, 255, 255, 0.25);
  font-size: 0.7rem;
  min-width: 40px;
  flex-shrink: 0;
  margin-top: 6px;
}

.items-editor {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.item-row {
  display: flex;
  align-items: center;
  gap: 6px;
}

.item-index {
  color: rgba(255, 255, 255, 0.15);
  font-size: 0.65rem;
  min-width: 18px;
  font-family: 'JetBrains Mono', 'Fira Code', Consolas, Monaco, monospace;
}

.item-label-input {
  flex: 1;
  font-size: 0.75rem;
  padding: 4px 8px;
}

.slug-sep {
  color: rgba(255, 255, 255, 0.15);
  font-size: 0.65rem;
}

.item-slug-input {
  width: 120px;
  font-size: 0.7rem;
  padding: 4px 8px;
  color: rgba(255, 255, 255, 0.5);
  font-family: 'JetBrains Mono', 'Fira Code', Consolas, Monaco, monospace;
}

.item-rm-btn {
  background: transparent;
  border: 1px solid rgba(255, 100, 100, 0.2);
  color: rgba(255, 100, 100, 0.4);
  width: 24px;
  height: 24px;
  border-radius: 3px;
  cursor: pointer;
  font-size: 0.85rem;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.15s;
}
.item-rm-btn:hover {
  background: rgba(255, 100, 100, 0.15);
  color: rgba(255, 100, 100, 0.8);
  border-color: rgba(255, 100, 100, 0.4);
}

.add-item-btn {
  background: transparent;
  border: 1px dashed rgba(255, 255, 255, 0.08);
  color: rgba(255, 255, 255, 0.25);
  padding: 4px 10px;
  font-family: inherit;
  font-size: 0.65rem;
  border-radius: 3px;
  cursor: pointer;
  transition: all 0.15s;
  text-align: center;
  width: 100%;
}
.add-item-btn:hover {
  border-color: rgba(255, 255, 255, 0.2);
  color: rgba(255, 255, 255, 0.5);
  background: rgba(255, 255, 255, 0.02);
}

.descriptions-section {
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding-left: 20px;
}

.desc-row {
  display: flex;
  align-items: flex-start;
  gap: 6px;
  padding: 6px 8px;
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.02);
  transition: background 0.15s;
}
.desc-row:hover {
  background: rgba(255, 255, 255, 0.04);
}

.tech-label {
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.7rem;
  min-width: 80px;
  flex-shrink: 0;
  padding-top: 2px;
  font-family: 'JetBrains Mono', 'Fira Code', Consolas, Monaco, monospace;
}

.desc-fields {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  flex: 1;
}

.desc-field {
  display: flex;
  align-items: center;
  gap: 4px;
}

.desc-field-wide {
  flex: 1;
  min-width: 120px;
}

.years-hint {
  color: rgba(255, 255, 255, 0.2);
  font-size: 0.7rem;
}

.years-input {
  width: 50px;
  flex: none;
  padding: 3px 6px;
  font-size: 0.7rem;
}

.desc-hint {
  color: rgba(255, 255, 255, 0.15);
  font-size: 0.6rem;
}

.desc-input {
  flex: 1;
  resize: vertical;
  min-height: 26px;
  padding: 3px 6px;
  font-size: 0.7rem;
}

.term-input {
  background: #111;
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.8);
  padding: 6px 10px;
  font-family: 'JetBrains Mono', 'Fira Code', Consolas, Monaco, monospace;
  border-radius: 4px;
  outline: none;
  transition: border-color 0.2s;
}

.term-input:focus {
  border-color: rgba(255, 255, 255, 0.3);
  color: #fff;
}

.term-btn-small {
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.4);
  padding: 5px 12px;
  font-family: inherit;
  font-size: 0.7rem;
  border-radius: 3px;
  cursor: pointer;
  transition: all 0.2s;
  white-space: nowrap;
}
.term-btn-small:hover:not(:disabled) {
  border-color: rgba(255, 255, 255, 0.25);
  color: rgba(255, 255, 255, 0.7);
}
.term-btn-small:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

.empty-hint,
.empty-state {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 4px 0;
}

.empty-text {
  color: rgba(255, 255, 255, 0.15);
  font-size: 0.7rem;
}

.term-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.15);
  color: rgba(255, 255, 255, 0.6);
  padding: 8px 16px;
  font-family: inherit;
  font-size: 0.8rem;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s;
}
.term-btn:hover:not(:disabled) {
  border-color: rgba(255, 255, 255, 0.3);
  color: #fff;
}
.term-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.prompt {
  color: rgba(255, 255, 255, 0.4);
  font-weight: bold;
  font-size: 0.75rem;
  flex-shrink: 0;
}
</style>
