<script setup lang="ts">
import { getProject, updateProject } from "~/firebase/portfolioService";

definePageMeta({ middleware: "admin" });

const route = useRoute();
const slug = route.params.slug as string;
const router = useRouter();

const loading = ref(true);
const saving = ref(false);
const message = ref("");
const isError = ref(false);
const projectData = ref<any>(null);

onMounted(async () => {
  try {
    const data = await getProject(slug);
    if (data) projectData.value = data;
  } catch (e: any) {
    message.value = "Failed to load project";
    isError.value = true;
  } finally {
    loading.value = false;
  }
});

async function handleSave(data: any) {
  saving.value = true;
  message.value = "";
  isError.value = false;
  try {
    await updateProject(slug, data);
    router.push("/admin/projects");
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
    :terminal-title="`admin@panel:~$`"
    :command="`nano ./projects/${slug}/`"
    :back-to="'/admin/projects'"
    :loading="loading"
    :message="message"
    :is-error="isError"
  >
    <template #body>
      <AdminProjectForm
        v-if="projectData"
        :initial-data="projectData"
        :slug="slug"
        :saving="saving"
        @save="handleSave"
      />
      <div v-else-if="!loading" class="not-found">
        <span class="prompt">$</span>
        <span class="text-muted">Project "{{ slug }}" not found in Firebase</span>
      </div>
    </template>
  </AdminShell>
</template>

<style scoped>
.not-found {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 1rem 0;
}
.prompt {
  color: rgba(255, 255, 255, 0.4);
  font-weight: bold;
}
.text-muted {
  color: rgba(255, 255, 255, 0.3);
  font-size: 0.8rem;
}
</style>
