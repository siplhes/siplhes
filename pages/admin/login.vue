<template>
  <div class="min-h-screen flex items-center justify-center bg-background p-4">
    <div class="w-full max-w-sm">
      <!-- Terminal window card -->
      <div class="terminal-window">
        <div class="terminal-header">
          <span class="terminal-dot close"></span>
          <span class="terminal-dot minimize"></span>
          <span class="terminal-dot maximize"></span>
          <span class="terminal-title">auth:login</span>
        </div>
        <div class="terminal-body">
          <!-- Title -->
          <div class="mb-6">
            <p class="text-white font-mono text-sm mb-1">
              <span class="text-white-muted">$</span> siplhes admin
            </p>
            <p class="text-text-muted2 text-xs font-mono">Enter credentials to access the admin panel</p>
          </div>

          <!-- Error message -->
          <div
            v-if="error"
            class="mb-4 p-3 rounded-lg bg-red/10 border border-red/20 text-red text-xs font-mono"
          >
            ! {{ error }}
          </div>

          <!-- Form -->
          <form @submit.prevent="handleLogin" class="space-y-4">
            <div>
              <label class="block text-xs font-mono text-text-muted2 mb-1.5">email</label>
              <input
                v-model="email"
                type="email"
                placeholder="admin@siplhes.com"
                class="w-full px-3 py-2 bg-surface2 border border-border rounded-lg text-sm text-white font-mono placeholder:text-text-muted2/40 focus:outline-none focus:border-white/20 transition-colors"
                autocomplete="email"
              />
            </div>

            <div>
              <label class="block text-xs font-mono text-text-muted2 mb-1.5">password</label>
              <input
                v-model="password"
                type="password"
                placeholder="••••••••"
                class="w-full px-3 py-2 bg-surface2 border border-border rounded-lg text-sm text-white font-mono placeholder:text-text-muted2/40 focus:outline-none focus:border-white/20 transition-colors"
                autocomplete="current-password"
              />
            </div>

            <button
              type="submit"
              :disabled="loading"
              class="w-full py-2.5 rounded-lg bg-white/10 hover:bg-white/15 text-white text-sm font-mono transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed border border-white/10 hover:border-white/20"
            >
              <span v-if="!loading">$ ./login</span>
              <span v-else class="flex items-center justify-center gap-2">
                <span class="w-3 h-3 border border-white/30 border-t-white rounded-full animate-spin"></span>
                Authenticating...
              </span>
            </button>
          </form>

          <!-- Back link -->
          <div class="mt-6 text-center">
            <NuxtLink to="/" class="text-xs font-mono text-text-muted2 hover:text-text-muted transition-colors">
              cd .. && exit
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { getFirebaseAuth } from "~/firebase/config";

definePageMeta({
  layout: false,
});

const router = useRouter();

const email = ref("");
const password = ref("");
const error = ref("");
const loading = ref(false);

async function handleLogin() {
  if (!email.value || !password.value) {
    error.value = "Email and password are required";
    return;
  }

  loading.value = true;
  error.value = "";

  try {
    const { signInWithEmailAndPassword } = await import("firebase/auth");
    const auth = getFirebaseAuth();
    await signInWithEmailAndPassword(auth, email.value, password.value);
    router.push("/admin");
  } catch (err: any) {
    const code = err.code || "";
    if (code === "auth/user-not-found" || code === "auth/wrong-password" || code === "auth/invalid-credential") {
      error.value = "Invalid email or password";
    } else if (code === "auth/too-many-requests") {
      error.value = "Too many attempts. Try again later.";
    } else {
      error.value = err.message || "Authentication failed";
    }
  } finally {
    loading.value = false;
  }
}
</script>
