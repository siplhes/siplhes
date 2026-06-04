import { computed } from "vue";
import { useAdminAuth } from "./useAdminAuth";

const ADMIN_EMAIL = "siplhes@gmail.com";

export function useIsAdmin() {
  const { user, loading } = useAdminAuth();

  const isAdmin = computed(() => {
    if (loading.value) return false;
    return user.value?.email === ADMIN_EMAIL;
  });

  return {
    isAdmin,
    loading,
  };
}
