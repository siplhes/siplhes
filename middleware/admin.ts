export default defineNuxtRouteMiddleware(async (to) => {
  // Only run client-side
  if (process.server) return;

  const { checkAuth } = useAdminAuth();
  const user = await checkAuth();

  if (!user && to.path !== "/admin/login") {
    return navigateTo("/admin/login");
  }

  if (user && to.path === "/admin/login") {
    return navigateTo("/admin");
  }
});
