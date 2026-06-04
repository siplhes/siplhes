<template>
  <NuxtLink
    :to="`/tech/${slug}`"
    class="tech-tag"
    :class="{
      'tech-tag-xs': size === 'xs',
      'tech-tag-sm': size === 'sm',
      'tech-tag-md': size === 'md',
    }"
    @click.stop
  >
    <slot>{{ label }}</slot>
  </NuxtLink>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  slug: string
  label: string
  size?: 'xs' | 'sm' | 'md'
}>(), {
  size: 'sm',
})
</script>

<style scoped>
.tech-tag {
  display: inline-flex;
  align-items: center;
  gap: 0.375rem;
  padding: 0.25rem 0.625rem;
  font-family: 'JetBrains Mono', 'Fira Code', Consolas, monospace;
  border-radius: 0.375rem;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.06);
  color: rgba(255, 255, 255, 0.55);
  transition: all 0.2s ease;
  cursor: pointer;
  text-decoration: none;
}

.tech-tag:hover {
  background: rgba(255, 255, 255, 0.06);
  border-color: rgba(255, 255, 255, 0.12);
  color: rgba(255, 255, 255, 0.85);
  transform: scale(1.05) translateY(-1px);
}

.tech-tag:active {
  transform: scale(0.98);
}

.tech-tag-xs {
  font-size: 0.6rem;
  padding: 0.125rem 0.375rem;
}

.tech-tag-sm {
  font-size: 0.7rem;
  padding: 0.25rem 0.5rem;
}

.tech-tag-md {
  font-size: 0.8rem;
  padding: 0.375rem 0.75rem;
}

.tech-tag::after {
  content: '#';
  font-size: 0.65em;
  opacity: 0.35;
  transition: opacity 0.2s;
}

.tech-tag:hover::after {
  opacity: 0.7;
}
</style>
