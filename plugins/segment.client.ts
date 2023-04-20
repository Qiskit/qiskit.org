export default defineNuxtPlugin(() => {
  const router = useRouter();
  const { trackPage } = useSegment();

  router.afterEach((to) => {
    trackPage(to.name, to.meta.fullTitle);
  });
});
