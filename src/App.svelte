<script lang="ts">
  import "./styles.css";
  import "tippy.js/dist/tippy.css";

  import { QueryClient, QueryClientProvider } from "@tanstack/svelte-query";
  import { Toaster } from "svelte-french-toast";
  import Router from "svelte-spa-router";
  import { routes } from "./constant/routes";
  import { invoke } from "@tauri-apps/api/tauri";
  import { onMount } from "svelte";

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: 3,
      },
    },
  });

  onMount(() => {
    invoke("close_splashscreen");
  });
</script>

<QueryClientProvider client={queryClient}>
  <Router {routes} />
</QueryClientProvider>
<Toaster />
