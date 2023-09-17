<script>
  import Header from "../components/Header.svelte";
  import "../app.css";
</script>

<div class="app">
  <div class="app-wrapper gradient min-h-screen">
    <Header />
    <div class="container max-w-[1660px] mx-auto">
      <main>
        <div class="main-wrapper pt-[120px]">
          <slot />
        </div>
      </main>

      <footer />
    </div>
  </div>
</div>
