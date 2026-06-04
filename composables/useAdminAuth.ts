import { ref } from "vue";
import {
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  type User,
} from "firebase/auth";
import { getFirebaseAuth } from "~/firebase/config";

const user = ref<User | null>(null);
const loading = ref(true);

let initialized = false;

function init() {
  if (initialized) return;
  initialized = true;

  // Firebase is only available client-side (plugins/firebase.client.ts)
  if (process.server) return;

  const auth = getFirebaseAuth();
  onAuthStateChanged(auth, (u) => {
    user.value = u;
    loading.value = false;
  });
}

export function useAdminAuth() {
  init();

  async function login(email: string, password: string) {
    const auth = getFirebaseAuth();
    await signInWithEmailAndPassword(auth, email, password);
  }

  async function logout() {
    const auth = getFirebaseAuth();
    await signOut(auth);
  }

  function checkAuth(): Promise<User | null> {
    return new Promise((resolve) => {
      const auth = getFirebaseAuth();
      const unsubscribe = onAuthStateChanged(auth, (u) => {
        unsubscribe();
        resolve(u);
      });
    });
  }

  return {
    user,
    loading,
    login,
    logout,
    checkAuth,
  };
}
