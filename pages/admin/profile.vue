<script setup lang="ts">
import { getProfile, updateProfile, type Profile } from "~/firebase/portfolioService";

definePageMeta({ middleware: "admin" });

const loading = ref(true);
const saving = ref(false);
const message = ref("");
const isError = ref(false);

const form = reactive<Profile>({
  name: "",
  email: "",
  location: "",
  description: "",
  image: "",
  available: true,
});

onMounted(async () => {
  try {
    const data = await getProfile();
    if (data) Object.assign(form, data);
  } catch (e) {
    message.value = "Failed to load profile";
    isError.value = true;
  } finally {
    loading.value = false;
  }
});

async function handleSave() {
  saving.value = true;
  message.value = "";
  isError.value = false;
  try {
    await updateProfile({ ...form });
    message.value = "✓ Profile updated successfully";
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
    command="./profile --edit"
    back-to="/admin"
    :loading="loading"
    :message="message"
    :is-error="isError"
  >
    <template #body>
      <form @submit.prevent="handleSave" class="profile-form">
        <div class="field">
          <span class="prompt">$</span>
          <span class="label">name:</span>
          <input v-model="form.name" class="term-input" placeholder="Your name" />
        </div>
        <div class="field">
          <span class="prompt">$</span>
          <span class="label">email:</span>
          <input v-model="form.email" type="email" class="term-input" placeholder="you@example.com" />
        </div>
        <div class="field">
          <span class="prompt">$</span>
          <span class="label">location:</span>
          <input v-model="form.location" class="term-input" placeholder="City, Country" />
        </div>
        <div class="field textarea-field">
          <span class="prompt">$</span>
          <span class="label">description:</span>
          <textarea v-model="form.description" rows="3" class="term-input" placeholder="Short bio..."></textarea>
        </div>
        <div class="field field-vertical">
          <span class="prompt">$</span>
          <span class="label">image:</span>
          <div class="field-content">
            <AdminImageUploader v-model="form.image" label="avatar" />
          </div>
        </div>
        <div class="field checkbox-field">
          <span class="prompt">$</span>
          <span class="label">available:</span>
          <label class="checkbox-label">
            <span class="checkbox-custom">{{ form.available ? "[x]" : "[ ]" }}</span>
            <input type="checkbox" v-model="form.available" class="hidden-checkbox" />
            <span class="checkbox-text">{{ form.available ? "Available for work" : "Not available" }}</span>
          </label>
        </div>
      </form>
    </template>

    <template #actions>
      <button class="term-btn" @click="handleSave" :disabled="saving">
        <span class="prompt">$</span>
        {{ saving ? "saving..." : "./save --profile" }}
      </button>
    </template>
  </AdminShell>
</template>

<style scoped>
.profile-form {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.field {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.8rem;
}

.textarea-field {
  align-items: flex-start;
}

.textarea-field .term-input {
  min-height: 70px;
  resize: vertical;
}

.field-vertical {
  align-items: flex-start;
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
}

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

.hidden-checkbox {
  display: none;
}

.checkbox-text {
  color: rgba(255, 255, 255, 0.3);
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
  flex-shrink: 0;
}
</style>
