import LoginPage from "@/routes/Auth/LoginPage.svelte";
import RoutesLoading from "@/routes/Loading/RoutesLoading.svelte";
import { wrap } from "svelte-spa-router/wrap";

const routes = {
  // Exact path
  "/": LoginPage,
  "/explorer/": wrap({
    asyncComponent: () => import("../routes/Explorer/Explorer.svelte") as any,
    loadingComponent: RoutesLoading as any,
  }),
  // Catch-all
  // This is optional, but if present it must be the last
  "*": wrap({
    asyncComponent: () => import("../routes/NotFound/NotFound.svelte") as any,
    loadingComponent: RoutesLoading as any,
  }),
};

export { routes };
