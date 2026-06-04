<script setup lang="ts">
import type { Project } from "~/firebase/portfolioService";
import { usePortfolioData } from "~/composables/usePortfolioData";
import { useTechData } from "~/composables/useTechData";

const props = withDefaults(defineProps<{
  initialData?: Partial<Project>
  slug?: string
  saving?: boolean
}>(), {
  saving: false,
})

const emit = defineEmits<{
  save: [data: Project]
}>()

// ─── Form state ──────────────────────────────

const form = reactive({
  slug: props.slug || "",
  title: props.initialData?.title || "",
  description: props.initialData?.description || "",
  url: props.initialData?.url || "",
  logoSrc: props.initialData?.logo?.src || "",
  images: props.initialData?.images || [] as string[],
  primaryImageIndex: props.initialData?.primaryImageIndex ?? 0,
  seoTitle: props.initialData?.seoTitle || "",
  purpose: props.initialData?.purpose || "",
  objective: props.initialData?.objective || "",
  approach: props.initialData?.approach || "",
  role: props.initialData?.role || "",
  duration: props.initialData?.duration || "",
  techs: props.initialData?.techs || [] as string[],
  hasCharacteristics: props.initialData?.hasCharacteristics || false,
  characteristics: props.initialData?.characteristics || [] as string[],
  futureEnhancements: props.initialData?.futureEnhancements || [] as string[],
})

const errors = reactive<Record<string, string>>({})
const newImageUrl = ref("")
const submitted = ref(false)

// ─── Section collapse state ──────────────────

const sections = reactive({
  basic: true,
  media: true,
  content: true,
  details: true,
  features: true,
})

function toggleSection(name: keyof typeof sections) {
  sections[name] = !sections[name]
}

// ─── Validation ──────────────────────────────

function clearError(field: string) {
  delete errors[field]
}

function validate(): boolean {
  let valid = true
  for (const key of Object.keys(errors)) delete errors[key]

  if (!form.slug.trim()) {
    errors.slug = "Slug is required"
    valid = false
  } else if (!/^[a-z0-9-]+$/.test(form.slug.trim())) {
    errors.slug = "Lowercase letters, numbers, and hyphens only"
    valid = false
  }

  if (!form.title.trim()) {
    errors.title = "Title is required"
    valid = false
  }

  return valid
}

// ─── Submit ──────────────────────────────────

function handleSubmit() {
  submitted.value = true
  if (!validate()) return

  const data: Project = {
    slug: form.slug.trim(),
    title: form.title.trim(),
    description: form.description.trim(),
    url: form.url.trim(),
    logo: {
      type: "image",
      src: form.logoSrc.trim() || undefined,
    },
    images: form.images.filter(Boolean),
    primaryImageIndex: form.primaryImageIndex,
    seoTitle: form.seoTitle.trim(),
    purpose: form.purpose.trim(),
    objective: form.objective.trim(),
    approach: form.approach.trim(),
    role: form.role.trim(),
    duration: form.duration.trim(),
    characteristics: form.characteristics.map(s => s.trim()).filter(Boolean),
    futureEnhancements: form.futureEnhancements.map(s => s.trim()).filter(Boolean),
    techs: form.techs,
    hasCharacteristics: form.hasCharacteristics,
  }
  emit("save", data)
}

// ─── Image helpers ───────────────────────────

function addImage() {
  const val = newImageUrl.value.trim()
  if (!val) return
  form.images.push(val)
  newImageUrl.value = ""
}

function removeImage(index: number) {
  form.images.splice(index, 1)
  if (form.primaryImageIndex === index) {
    form.primaryImageIndex = Math.min(0, form.images.length - 1)
  } else if (form.primaryImageIndex > index) {
    form.primaryImageIndex--
  }
}

function setPrimary(index: number) {
  form.primaryImageIndex = index
}

// ─── Dynamic list helpers ────────────────────

function addListItem(list: string[]) {
  list.push("")
}

function removeListItem(list: string[], index: number) {
  list.splice(index, 1)
}

// ─── Tech stack helpers ───────────────────────

const { loadAll } = usePortfolioData();
const { getTechBySlug, normalizedTech } = useTechData();

const techCategories = computed(() => normalizedTech.value?.categories || []);

function toggleTech(slug: string) {
  const idx = form.techs.indexOf(slug);
  if (idx >= 0) {
    form.techs.splice(idx, 1);
  } else {
    form.techs.push(slug);
  }
}

function removeTech(slug: string) {
  const idx = form.techs.indexOf(slug);
  if (idx >= 0) form.techs.splice(idx, 1);
}

onMounted(() => {
  loadAll();
});
</script>

<template>
  <form @submit.prevent="handleSubmit" class="project-form">
    <!-- ════════ SECTION: BASIC INFO ════════ -->
    <div class="section">
      <button type="button" class="section-header" @click="toggleSection('basic')">
        <span class="section-arrow">{{ sections.basic ? '▼' : '▶' }}</span>
        <span class="section-title">Basic Info</span>
        <span class="section-meta">slug · title · description · URL · SEO</span>
      </button>
      <div v-show="sections.basic" class="section-body">
        <!-- Slug -->
        <template v-if="slug">
          <div class="field">
            <span class="prompt">$</span>
            <span class="label">slug:</span>
            <span class="slug-display">{{ slug }}</span>
          </div>
        </template>
        <template v-else>
          <div class="field" :class="{ 'field-error': errors.slug }">
            <span class="prompt">$</span>
            <span class="label required">slug *:</span>
            <div class="field-content">
              <input v-model="form.slug" class="term-input" placeholder="my-project" required @input="clearError('slug')" />
              <span v-if="errors.slug" class="field-err">{{ errors.slug }}</span>
            </div>
          </div>
        </template>

        <!-- Title -->
        <div class="field" :class="{ 'field-error': errors.title }">
          <span class="prompt">$</span>
          <span class="label required">title *:</span>
          <div class="field-content">
            <input v-model="form.title" class="term-input" placeholder="My Awesome Project" @input="clearError('title')" />
            <span v-if="errors.title" class="field-err">{{ errors.title }}</span>
          </div>
        </div>

        <!-- Description -->
        <div class="field field-vertical">
          <span class="prompt">$</span>
          <span class="label">description:</span>
          <textarea v-model="form.description" class="term-input field-textarea" rows="2" placeholder="Short project description for the project card..." />
        </div>

        <!-- URL -->
        <div class="field">
          <span class="prompt">$</span>
          <span class="label">URL:</span>
          <input v-model="form.url" class="term-input" placeholder="https://..." />
        </div>

        <!-- SEO Title -->
        <div class="field">
          <span class="prompt">$</span>
          <span class="label">SEO title:</span>
          <input v-model="form.seoTitle" class="term-input" placeholder="Project by ..." />
        </div>
      </div>
    </div>

    <!-- ════════ SECTION: MEDIA ════════ -->
    <div class="section">
      <button type="button" class="section-header" @click="toggleSection('media')">
        <span class="section-arrow">{{ sections.media ? '▼' : '▶' }}</span>
        <span class="section-title">Media</span>
        <span class="section-meta">logo · images · primary photo</span>
      </button>
      <div v-show="sections.media" class="section-body">
        <!-- Logo -->
        <div class="field field-vertical">
          <span class="prompt">$</span>
          <span class="label">logo:</span>
          <div class="field-content">
            <AdminImageUploader v-model="form.logoSrc" label="logo" />
          </div>
        </div>

        <!-- Images -->
        <div class="field field-vertical">
          <span class="prompt">$</span>
          <span class="label">images:</span>
          <div class="field-content">
            <div class="images-add-row">
              <AdminImageUploader v-model="newImageUrl" label="new image" />
              <button v-if="newImageUrl" type="button" class="term-btn-small add-btn" @click="addImage">+ add</button>
            </div>

            <div v-if="form.images.length" class="image-grid">
              <div v-for="(img, i) in form.images" :key="i" class="image-card">
                <div class="image-card-badge" :class="{ primary: form.primaryImageIndex === i }">
                  <button type="button" class="badge-star" @click="setPrimary(i)" :title="form.primaryImageIndex === i ? 'Primary photo' : 'Set as primary'">
                    {{ form.primaryImageIndex === i ? '★' : '☆' }}
                  </button>
                  <span v-if="form.primaryImageIndex === i" class="badge-label">PRIMARY</span>
                </div>
                <button type="button" class="image-card-remove" @click="removeImage(i)" title="Remove">&times;</button>
                <AdminImagePreview :src="img" :label="`img ${i + 1}`" />
              </div>
            </div>
            <span v-else class="field-hint">No images yet. Upload one above.</span>
          </div>
        </div>
      </div>
    </div>

    <!-- ════════ SECTION: CONTENT ════════ -->
    <div class="section">
      <button type="button" class="section-header" @click="toggleSection('content')">
        <span class="section-arrow">{{ sections.content ? '▼' : '▶' }}</span>
        <span class="section-title">Content</span>
        <span class="section-meta">purpose · objective · approach</span>
      </button>
      <div v-show="sections.content" class="section-body">
        <div class="field field-vertical">
          <span class="prompt">$</span>
          <span class="label">purpose:</span>
          <textarea v-model="form.purpose" class="term-input field-textarea" rows="3" placeholder="Why this project exists..." />
        </div>

        <div class="field field-vertical">
          <span class="prompt">$</span>
          <span class="label">objective:</span>
          <textarea v-model="form.objective" class="term-input field-textarea" rows="3" placeholder="What this project aims to achieve..." />
        </div>

        <div class="field field-vertical">
          <span class="prompt">$</span>
          <span class="label">approach:</span>
          <textarea v-model="form.approach" class="term-input field-textarea" rows="3" placeholder="Technical approach and methodology..." />
        </div>
      </div>
    </div>

    <!-- ════════ SECTION: DETAILS ════════ -->
    <div class="section">
      <button type="button" class="section-header" @click="toggleSection('details')">
        <span class="section-arrow">{{ sections.details ? '▼' : '▶' }}</span>
        <span class="section-title">Details</span>
        <span class="section-meta">role · duration · tech stack</span>
      </button>
      <div v-show="sections.details" class="section-body">
        <div class="field">
          <span class="prompt">$</span>
          <span class="label">role:</span>
          <input v-model="form.role" class="term-input" placeholder="Full-stack developer" />
        </div>

        <div class="field">
          <span class="prompt">$</span>
          <span class="label">duration:</span>
          <input v-model="form.duration" class="term-input" placeholder="3 months" />
        </div>

        <div class="field field-vertical">
          <span class="prompt">$</span>
          <span class="label">techs:</span>
          <div class="field-content">
            <!-- Selected tech badges -->
            <div class="selected-techs">
              <span
                v-for="slug in form.techs"
                :key="slug"
                class="selected-tech-badge"
              >
                {{ getTechBySlug(slug)?.label || slug }}
                <button type="button" class="tech-remove-btn" @click="removeTech(slug)" title="Remove">&times;</button>
              </span>
              <span v-if="!form.techs.length" class="field-hint">No techs selected. Click techs below to add.</span>
            </div>

            <!-- Tech browser: categories with clickable items -->
            <div v-if="techCategories.length" class="tech-browser">
              <div
                v-for="cat in techCategories"
                :key="cat.label"
                class="tech-category-group"
              >
                <span class="tech-cat-label">{{ cat.label }}</span>
                <div class="tech-cat-items">
                  <button
                    v-for="item in cat.items"
                    :key="item.slug"
                    type="button"
                    class="tech-option"
                    :class="{ selected: form.techs.includes(item.slug) }"
                    @click="toggleTech(item.slug)"
                  >
                    {{ item.label }}
                  </button>
                </div>
              </div>
            </div>
            <div v-else class="field-hint">
              No tech stacks defined yet. Go to
              <NuxtLink to="/admin/tech" class="text-blue/70 hover:text-blue">Tech admin</NuxtLink>
              to create them.
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- ════════ SECTION: FEATURES ════════ -->
    <div class="section">
      <button type="button" class="section-header" @click="toggleSection('features')">
        <span class="section-arrow">{{ sections.features ? '▼' : '▶' }}</span>
        <span class="section-title">Features & Enhancements</span>
        <span class="section-meta">characteristics · future plans</span>
      </button>
      <div v-show="sections.features" class="section-body">
        <!-- Toggle -->
        <div class="field checkbox-field">
          <span class="prompt">$</span>
          <label class="checkbox-label">
            <span class="checkbox-custom">{{ form.hasCharacteristics ? "[x]" : "[ ]" }}</span>
            <input type="checkbox" v-model="form.hasCharacteristics" class="hidden-checkbox" />
            <span class="checkbox-text">Show features section on project page</span>
          </label>
        </div>

        <!-- Characteristics list -->
        <div v-if="form.hasCharacteristics" class="field field-vertical">
          <span class="prompt">$</span>
          <span class="label">features:</span>
          <div class="field-content">
            <div v-for="(item, i) in form.characteristics" :key="i" class="list-item-row">
              <input v-model="form.characteristics[i]" class="term-input" placeholder="Feature description..." />
              <button type="button" class="item-remove-btn" @click="removeListItem(form.characteristics, i)" title="Remove">&times;</button>
            </div>
            <button type="button" class="item-add-btn" @click="addListItem(form.characteristics)">+ Add feature item</button>
          </div>
        </div>

        <!-- Future Enhancements list -->
        <div class="field field-vertical">
          <span class="prompt">$</span>
          <span class="label">enhancements:</span>
          <div class="field-content">
            <div v-for="(item, i) in form.futureEnhancements" :key="i" class="list-item-row">
              <input v-model="form.futureEnhancements[i]" class="term-input" placeholder="Future enhancement..." />
              <button type="button" class="item-remove-btn" @click="removeListItem(form.futureEnhancements, i)" title="Remove">&times;</button>
            </div>
            <button type="button" class="item-add-btn" @click="addListItem(form.futureEnhancements)">+ Add enhancement</button>
          </div>
        </div>
      </div>
    </div>

    <!-- ════════ ACTIONS ════════ -->
    <div class="form-actions">
      <button type="submit" class="term-btn" :disabled="saving">
        <span class="prompt">$</span>
        {{ saving ? "working..." : "./save --project" }}
      </button>
    </div>
  </form>
</template>

<style scoped>
.project-form {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

/* ─── Section ─── */

.section {
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 4px;
  overflow: hidden;
}

.section-header {
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  padding: 8px 12px;
  background: rgba(255, 255, 255, 0.02);
  border: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.04);
  cursor: pointer;
  font-family: inherit;
  text-align: left;
  color: rgba(255, 255, 255, 0.6);
  transition: background 0.15s;
}

.section-header:hover {
  background: rgba(255, 255, 255, 0.04);
}

.section-arrow {
  font-size: 0.55rem;
  color: rgba(255, 255, 255, 0.25);
  width: 12px;
  flex-shrink: 0;
}

.section-title {
  font-size: 0.75rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.7);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.section-meta {
  margin-left: auto;
  font-size: 0.6rem;
  color: rgba(255, 255, 255, 0.15);
}

.section-body {
  padding: 10px 12px;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}

/* ─── Fields ─── */

.field {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.8rem;
}

.field-vertical {
  align-items: flex-start;
}

.field-vertical .field-content {
  flex: 1;
}

.field-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.label {
  color: rgba(255, 255, 255, 0.5);
  min-width: 90px;
  flex-shrink: 0;
  font-size: 0.75rem;
}

.field-err {
  color: rgba(255, 100, 100, 0.7);
  font-size: 0.65rem;
}

.field-hint {
  color: rgba(255, 255, 255, 0.12);
  font-size: 0.6rem;
}

.field-error .term-input {
  border-color: rgba(255, 100, 100, 0.4);
}

/* ─── Inputs ─── */

.term-input {
  flex: 1;
  background: #111;
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.8);
  padding: 8px 12px;
  font-family: 'JetBrains Mono', 'Fira Code', Consolas, Monaco, monospace;
  font-size: 0.8rem;
  border-radius: 4px;
  outline: none;
  transition: border-color 0.2s;
}

.term-input:focus {
  border-color: rgba(255, 255, 255, 0.3);
  color: #fff;
}

.field-textarea {
  resize: vertical;
  min-height: 50px;
}

.slug-display {
  color: rgba(255, 255, 255, 0.4);
  font-size: 0.8rem;
  padding: 8px 12px;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 4px;
  flex: 1;
}

/* ─── Images ─── */

.images-add-row {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.image-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 10px;
  margin-top: 6px;
}

.image-card {
  position: relative;
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 4px;
  overflow: hidden;
  transition: border-color 0.2s;
}

.image-card:hover {
  border-color: rgba(255, 255, 255, 0.12);
}

.image-card-badge {
  position: absolute;
  top: 4px;
  left: 4px;
  z-index: 2;
  display: flex;
  align-items: center;
  gap: 4px;
  background: rgba(0, 0, 0, 0.75);
  padding: 2px 6px;
  border-radius: 3px;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.image-card-badge.primary {
  border-color: rgba(255, 200, 50, 0.5);
  background: rgba(0, 0, 0, 0.85);
}

.badge-star {
  background: none;
  border: none;
  color: rgba(255, 200, 50, 0.4);
  cursor: pointer;
  font-size: 0.75rem;
  padding: 0;
  line-height: 1;
  transition: color 0.15s;
}

.badge-star:hover { color: rgba(255, 200, 50, 0.8); }
.image-card-badge.primary .badge-star { color: rgba(255, 200, 50, 1); }

.badge-label {
  font-size: 0.5rem;
  font-weight: 700;
  letter-spacing: 0.5px;
  color: rgba(255, 200, 50, 0.8);
}

.image-card-remove {
  position: absolute;
  top: 4px;
  right: 4px;
  z-index: 2;
  background: rgba(0, 0, 0, 0.7);
  border: 1px solid rgba(255, 100, 100, 0.3);
  color: rgba(255, 100, 100, 0.7);
  width: 22px;
  height: 22px;
  border-radius: 3px;
  cursor: pointer;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.15s;
}

.image-card-remove:hover {
  background: rgba(255, 100, 100, 0.2);
  color: rgba(255, 100, 100, 1);
}

/* ─── Dynamic item list ─── */

.list-item-row {
  display: flex;
  gap: 6px;
  align-items: center;
}

.list-item-row .term-input {
  flex: 1;
}

.item-remove-btn {
  background: transparent;
  border: 1px solid rgba(255, 100, 100, 0.2);
  color: rgba(255, 100, 100, 0.4);
  width: 28px;
  height: 28px;
  border-radius: 3px;
  cursor: pointer;
  font-size: 1rem;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.15s;
}

.item-remove-btn:hover {
  background: rgba(255, 100, 100, 0.15);
  color: rgba(255, 100, 100, 0.8);
  border-color: rgba(255, 100, 100, 0.4);
}

.item-add-btn {
  background: transparent;
  border: 1px dashed rgba(255, 255, 255, 0.08);
  color: rgba(255, 255, 255, 0.25);
  padding: 6px 12px;
  font-family: inherit;
  font-size: 0.7rem;
  border-radius: 3px;
  cursor: pointer;
  transition: all 0.15s;
  width: 100%;
  text-align: center;
}

.item-add-btn:hover {
  border-color: rgba(255, 255, 255, 0.2);
  color: rgba(255, 255, 255, 0.5);
  background: rgba(255, 255, 255, 0.02);
}

/* ─── Checkbox ─── */

.checkbox-field .label {
  min-width: 90px;
}

.checkbox-label {
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  user-select: none;
}

.checkbox-custom {
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.8rem;
}

.hidden-checkbox { display: none; }

.checkbox-text {
  color: rgba(255, 255, 255, 0.25);
  font-size: 0.65rem;
}

/* ─── Buttons ─── */

.form-actions {
  margin-top: 0.25rem;
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

.term-btn-small {
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.4);
  padding: 7px 12px;
  font-family: inherit;
  font-size: 0.75rem;
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

.prompt {
  color: rgba(255, 255, 255, 0.4);
  font-weight: bold;
  flex-shrink: 0;
}

/* ─── Tech stack selector ─── */

.selected-techs {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 8px;
}

.selected-tech-badge {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 3px 8px;
  font-size: 0.7rem;
  font-family: 'JetBrains Mono', 'Fira Code', Consolas, Monaco, monospace;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 4px;
  color: rgba(255, 255, 255, 0.7);
}

.tech-remove-btn {
  background: none;
  border: none;
  color: rgba(255, 100, 100, 0.4);
  cursor: pointer;
  font-size: 1rem;
  line-height: 1;
  padding: 0 2px;
  transition: color 0.15s;
}
.tech-remove-btn:hover {
  color: rgba(255, 100, 100, 0.9);
}

.tech-browser {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.tech-category-group {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.tech-cat-label {
  font-size: 0.6rem;
  font-family: 'JetBrains Mono', 'Fira Code', Consolas, Monaco, monospace;
  color: rgba(255, 255, 255, 0.2);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.tech-cat-items {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
}

.tech-option {
  padding: 3px 10px;
  font-size: 0.7rem;
  font-family: 'JetBrains Mono', 'Fira Code', Consolas, Monaco, monospace;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 4px;
  color: rgba(255, 255, 255, 0.4);
  cursor: pointer;
  transition: all 0.15s;
}

.tech-option:hover {
  background: rgba(255, 255, 255, 0.05);
  border-color: rgba(255, 255, 255, 0.12);
  color: rgba(255, 255, 255, 0.7);
}

.tech-option.selected {
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(255, 255, 255, 0.2);
  color: rgba(255, 255, 255, 0.9);
}
</style>
