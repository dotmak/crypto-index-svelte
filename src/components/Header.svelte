<script>
  const imgUrl = new URL("../lib/images/crypto.png", import.meta.url).href;
</script>

<header class="header w-full fixed top-0 left-0">
  <div
    class="max-w-[1660px] flex flex-row justify-between items-center mx-auto py-4"
  >
    <div class="site-logo">
      <a href="/">
        <img
          src={imgUrl}
          alt="Crypto index logo"
          class="w-[50px]"
          loading="lazy"
        />
      </a>
    </div>

    <div class="menu text-white">
      <ul>
        <li><a href="/">HOME</a></li>
      </ul>
    </div>
  </div>
</header>

<style>
  .site-logo {
    filter: invert(100%) sepia(1%) saturate(2%) hue-rotate(286deg)
      brightness(110%) contrast(100%);
  }
</style>
