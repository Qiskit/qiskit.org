export default defineNuxtRouteMiddleware((to) => {
  // Analytics must be executed only in client side
  if (process.client) {
    const { trackPage } = useSegment();
    trackPage(window, to.fullPath);
  }
});
