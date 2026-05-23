<template>
  <div class="h-full">
    <div class="terminal-window h-full">
      <div class="terminal-header">
        <span class="terminal-dot close"></span>
        <span class="terminal-dot minimize"></span>
        <span class="terminal-dot maximize"></span>
        <span class="terminal-title">~/contact.sh</span>
      </div>
      <div class="terminal-body">
        <div class="prompt-line mb-3">
          <span class="prompt-symbol"></span>
          <span class="text-text-muted text-sm">./contact.sh --system-info</span>
        </div>

        <!-- neofetch style grid -->
        <div class="grid grid-cols-[auto_1fr] gap-3 items-start mb-3">
          <!-- ASCII art person -->
          <pre v-pre class="neofetch-ascii select-none">
            {{{{{{{{{{{{
           {{{{{{{{{{{{{{{
          {{{{{{{{  {{{{{{{{
          {{{{{{      {{{{{{{
          {{{{{(       ){{{{{
          {{{{{{        {{{{{{
          {{{{{{       (({{{{{
          {{{{{{       {{{{{{
           {{{{{      {{{{{{
            {{{{{    {{{{{{
              {{{{{{{{{{{
               {{{{{{{{
                 {{{{
                  {{
                    </pre>
          <!-- Info panel -->
          <div class="space-y-0.5">
            <div class="neofetch-line">
              <span class="key">Joseph Hurtado</span>
            </div>
            <div class="neofetch-line">
              <span class="text-text-muted2">────────────────</span>
            </div>
            <div class="neofetch-line">
              <span class="key">OS</span><span class="sep">:</span><span class="value">Portfolio v1.0.0</span>
            </div>
            <div class="neofetch-line">
              <span class="key">Kernel</span><span class="sep">:</span><span class="value">JS/TS Full Stack</span>
            </div>
            <div class="neofetch-line">
              <span class="key">Uptime</span><span class="sep">:</span><span class="value">7+ years experience</span>
            </div>
            <div class="neofetch-line">
              <span class="key">Shell</span><span class="sep">:</span><span class="value">Vue.js / Nuxt.js</span>
            </div>
            <div class="neofetch-line">
              <span class="key">Email</span><span class="sep">:</span>
              <button
                @click="copyToClipboard"
                class="value hover:text-white transition-colors cursor-pointer underline decoration-dotted underline-offset-2"
                title="Click to copy"
              >
                siplhes@gmail.com
              </button>
              <span class="text-white-muted text-xs ml-1">[copy]</span>
            </div>
            <div class="neofetch-line">
              <span class="key">Location</span><span class="sep">:</span><span class="value">Venezuela</span>
            </div>
          </div>
        </div>

        <!-- Social links as directory listing -->
        <div class="prompt-line mb-2">
          <span class="prompt-symbol"></span>
          <span class="text-text-muted text-sm">ls -la ./social/</span>
        </div>
        <div class="ls-listing mb-1">
          <div class="ls-item">
            <span class="ls-permissions">drwxr-xr-x</span>
            <NuxtLink to="https://github.com/siplhes" target="_blank" class="ls-name link flex items-center gap-1">
              <Icon name="uil:github" class="w-3 h-3" /> github
            </NuxtLink>
          </div>
          <div class="ls-item">
            <span class="ls-permissions">drwxr-xr-x</span>
            <NuxtLink to="https://www.linkedin.com/in/siplhes/" target="_blank" class="ls-name link flex items-center gap-1">
              <Icon name="uil:linkedin" class="w-3 h-3" /> linkedin
            </NuxtLink>
          </div>
          <div class="ls-item">
            <span class="ls-permissions">drwxr-xr-x</span>
            <NuxtLink to="https://wa.me/584127698781" target="_blank" class="ls-name link flex items-center gap-1">
              <Icon name="uil:whatsapp-alt" class="w-3 h-3" /> whatsapp
            </NuxtLink>
          </div>
          <div class="ls-item">
            <span class="ls-permissions">drwxr-xr-x</span>
            <NuxtLink to="https://behance.com/siplhes" target="_blank" class="ls-name link flex items-center gap-1">
              <Icon name="uil:behance" class="w-3 h-3" /> behance
            </NuxtLink>
          </div>
        </div>
        <div class="text-text-muted2 text-xs ml-1">
          total 4 links — all accessible via internet
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  const { $toast } = useNuxtApp();

  const copyToClipboard = () => {
    navigator.clipboard.writeText("siplhes@gmail.com");
    $toast.success("Email copied to clipboard");
  };
</script>

<style scoped>
.neofetch-ascii {
  color: rgba(255, 255, 255, 0.5);
}
</style>
