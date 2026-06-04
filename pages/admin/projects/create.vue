<script setup lang="ts">
import { createProject } from "~/firebase/portfolioService";

definePageMeta({ middleware: "admin" });

const router = useRouter();

const saving = ref(false);
const message = ref("");
const isError = ref(false);

async function handleSave(data: any) {
  saving.value = true;
  message.value = "";
  isError.value = false;
  try {
    await createProject(data.slug, data);
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
    terminal-title="admin@panel:~$"
    command="touch ./new-project/"
    back-to="/admin/projects"
    :message="message"
    :is-error="isError"
  >
    <template #body>
      <AdminProjectForm @save="handleSave" :saving="saving" />
    </template>
  </AdminShell>
</template>
