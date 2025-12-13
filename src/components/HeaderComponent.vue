<template>
  <header class="header">
    <div class="container">
      <div class="logo">olympians books</div>
      <h1>Книги, которые вознесут вас на Олимп</h1>
      <button class="header-button">узнать больше</button>
      <button class="icon expand">
        <IconExpand />
      </button>
      <button class="icon cart">
        <IconCart />
      </button>
    </div>
  </header>
</template>

<script setup>
import IconCart from '@/icons/IconCart.vue'
import IconExpand from '@/icons/IconExpand.vue'
</script>
<style lang="scss">
.header {
  background-color: var(--blue);
  height: 940px;
  background-repeat: no-repeat;
  padding-top: 13px;
  .container {
    background-image: url('/images/apollo.png');
    height: 100%;
    position: relative;
  }

  * {
    color: var(--white);
  }
  .logo {
    font-family: Archeologicaps;
    font-size: 24px;
    line-height: 36px;
    text-indent: 5px;
    width: 200px;
    letter-spacing: 0px;
  }

  h1 {
    width: 60%;
    margin-top: 84px;
    line-height: 1.5;
    letter-spacing: 6px;
  }

  .header-button {
    margin-top: 71px;
  }
  .expand {
    position: absolute;
    top: 9px;
    left: calc(50% - 32px);
  }
  .cart {
    position: absolute;
    top: 7px;
    right: 74px;
  }
}
</style>
