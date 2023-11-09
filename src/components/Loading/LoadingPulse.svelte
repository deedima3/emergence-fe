<script lang="ts">
  import DarkBackground from "@/components/Modal/DarkBackground.svelte";

  export let isLoading: boolean;
  export let onClose: () => void = () => {};
</script>

{#if isLoading}
  <DarkBackground {onClose}>
    <img
      src="/SplashLogo.png"
      alt="Logo Emergence"
      class="w-40 h-40 animate-pulse"
    />
  </DarkBackground>
{/if}
