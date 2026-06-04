<template>
  <div class="h-full flex flex-col group/card">
    <!-- Section label -->
    <div class="section-label mb-3 stagger-item" :style="{ '--item-index': 0 }">Connect</div>

    <!-- Contact Info with hover effects -->
    <div class="space-y-2.5 mb-4">
      <div class="flex items-center gap-3 text-sm px-2 -mx-2 py-1.5 rounded-xl transition-all duration-300 hover:bg-white/[0.03] hover:pl-3 group/item">
        <Icon name="lucide:mail" class="w-4 h-4 text-text-muted2 shrink-0 transition-all duration-300 group-hover/item:text-blue group-hover/item:scale-110" />
        <button
          @click="copyToClipboard"
          class="text-text/70 hover:text-text transition-colors cursor-pointer truncate"
          title="Click to copy"
        >
         <NuxtLink :to="'mailto:' + email" class="text-text/70">E-mail </NuxtLink>
        </button>
        <Icon name="lucide:copy" class="w-3 h-3 text-text-muted2/0 ml-auto transition-all duration-300 group-hover/item:text-text-muted2/70 group-hover/item:opacity-100 shrink-0" />
      </div>

      <div class="flex items-center gap-3 text-sm px-2 -mx-2 py-1.5 rounded-xl transition-all duration-300 hover:bg-white/[0.03] hover:pl-3 group/item">
        <Icon name="lucide:map-pin" class="w-4 h-4 text-text-muted2 shrink-0 transition-all duration-300 group-hover/item:text-orange group-hover/item:scale-110" />
        <span class="text-text/70">{{ profile?.location || 'Venezuela' }}</span>
      </div>
      <div class="flex items-center gap-3 text-sm px-2 -mx-2 py-1.5 rounded-xl transition-all duration-300 hover:bg-white/[0.03] hover:pl-3 group/item">
        <Icon name="lucide:briefcase" class="w-4 h-4 text-text-muted2 shrink-0 transition-all duration-300 group-hover/item:text-green group-hover/item:scale-110" />
        <span class="text-text/70">Full Stack Developer</span>
      </div>
    </div>

    <!-- Divider -->
    <div class="h-px bg-border my-3"></div>

    <!-- Social Links -->
    <div class="section-label mb-3 stagger-item" :style="{ '--item-index': 1 }">Social</div>
    <div class="space-y-1.5 stagger-item" :style="{ '--item-index': 2 }">
      <NuxtLink
        v-for="link in socialLinks"
        :key="link.label"
        :to="link.url"
        target="_blank"
        class="flex items-center gap-3 px-3 py-2 rounded-xl text-sm text-text-muted hover:text-text hover:bg-white/[0.03] transition-all duration-200 group/link"
      >
        <Icon :name="link.icon" class="w-4 h-4 shrink-0 transition-all duration-300 group-hover/link:scale-110 group-hover/link:text-white" />
        <span class="transition-all duration-300 group-hover/link:translate-x-0.5">{{ link.label }}</span>
        <Icon name="lucide:external-link" class="w-3 h-3 ml-auto text-text-muted2 shrink-0 transition-all duration-300 group-hover/link:translate-x-0.5 group-hover/link:text-text-muted" />
      </NuxtLink>
    </div>

    <!-- Spacer -->
    <div class="flex-1"></div>

    <!-- Repository link -->
    <div class="mt-4 pt-3 border-t border-border stagger-item" :style="{ '--item-index': 3 }">
      <NuxtLink
        to="https://github.com/siplhes/siplhes"
        target="_blank"
        class="flex items-center gap-2 text-xs text-text-muted2 hover:text-text-muted transition-colors font-mono group/repo"
      >
        <Icon name="lucide:code-2" class="w-3 h-3 transition-all duration-300 group-hover/repo:rotate-12" />
        <span>View source</span>
        <Icon name="lucide:external-link" class="w-3 h-3 ml-auto transition-all duration-300 group-hover/repo:translate-x-0.5" />
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { usePortfolioData } from "~/composables/usePortfolioData";

const { $toast } = useNuxtApp();
const { profile, social } = usePortfolioData();

const socialLinks = computed(() => {
  if (!social.value) return [];
  return Object.entries(social.value).map(([key, link]) => ({
    label: link.label,
    url: link.url,
    icon: mapIcon(link.icon),
  }));
});

function mapIcon(icon: string): string {
  // Convert uil: prefix to lucide: for the icon component
  if (icon.startsWith("uil:")) return icon.replace("uil:", "lucide:");
  return icon;
}

const email = computed(() => {
  if (profile.value?.email) return profile.value.email;
  return atob("c2lwbGhlc0BnbWFpbC5jb20=");
});

const copyToClipboard = () => {
  navigator.clipboard.writeText(email.value);
  $toast.success("Email copied to clipboard");
};
</script>
