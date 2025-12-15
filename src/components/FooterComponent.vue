<template>
  <footer>
    <div class="container">
      <div class="wrapper">
        <div class="logo">olympians books</div>
        <a href="tel:+30922040281">+30922040281</a>
        <nav>
          <a>Главная</a>
          <a>Каталог</a>
          <a>Корзина</a>
        </nav>
      </div>
    </div>
  </footer>
</template>

<script setup></script>

<style lang="scss">
footer {
  background-color: var(--blue);
  color: var(--white);
  margin-top: 135px;
  .wrapper {
    display: flex;
    padding: 21px;
    align-items: center;
    justify-content: space-between;
  }
  .logo {
    font-family: Archeologicaps;
    font-size: 29px;
    line-height: 45px;
    text-indent: 1px;
    width: 241px;
    letter-spacing: 2.8px;
  }
  nav {
    display: flex;
    gap: 150px;
  }

  a {
    font-size: 26px;
    letter-spacing: 1px;
  }
}
</style>
