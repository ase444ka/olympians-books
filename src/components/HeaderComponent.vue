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

  @media screen and (max-width: 1024px) {
    padding-top: 0px;
    height: 783px;
  }
  @media screen and (max-width: 400px) {
    padding-top: 7px;
    height: 590px;
  }
  .container {
    background-image: url('/images/apollo.png');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center bottom;
    height: 100%;
    position: relative;
    @media screen and (max-width: 1024px) {
      background-size: 150% auto;
      background-position: center top;
    }
    @media screen and (max-width: 768px) {
      background-position: center bottom;
    }
    @media screen and (max-width: 400px) {
      background-size: 260% auto;
      background-position: -286px 18px;
    }
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
    @media screen and (max-width: 1024px) {
      font-size: 14px;
      width: 60px;
      line-height: 1.8;
      letter-spacing: 1px;
    }
    @media screen and (max-width: 400px) {
      font-size: 10px;
      width: 40px;
    }
  }

  h1 {
    width: 60%;
    line-height: 1.5;
    letter-spacing: 6px;
    @media screen and (max-width: 1024px) {
      font-size: 64px;
      width: 90%;
      letter-spacing: 5px;
      margin-top: 28px;
    }
    @media screen and (max-width: 710px) {
      width: 75%;
    }
    @media screen and (max-width: 400px) {
      font-size: 40px;
      letter-spacing: 3px;
      margin-top: 11px;
    }
  }

  .header-button {
    margin-top: 71px;
    @media screen and (max-width: 806px) {
      margin-top: 0;
    }
    @media screen and (max-width: 768px) {
      margin-top: 28px;
    }
    @media screen and (max-width: 700px) {
      margin-top: 0;
    }
    @media screen and (max-width: 400px) {
      margin-top: 5px;
    }
  }
  .expand {
    position: absolute;
    top: 9px;
    left: calc(50% - 32px);
    @media screen and (max-width: 1024px) {
      top: 14px;
    }
    @media screen and (max-width: 400px) {
      top: 6px;
    }
  }
  .cart {
    position: absolute;
    top: 7px;
    right: 74px;
    @media screen and (max-width: 1024px) {
      top: -8px;
      right: 22px;
    }
    @media screen and (max-width: 400px) {
      top: -15px;
      right: 8px;
    }
  }
}
</style>
