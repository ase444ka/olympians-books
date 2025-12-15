<template>
  <header class="header" @keyup.esc="showMenu = false" @click="processClick">
    <Transition>
      <HeaderNavComponent v-if="showMenu" @close="showMenu = false" />
    </Transition>
    <div class="container">
      <div class="logo">olympians books</div>
      <h1>Книги, которые вознесут вас на Олимп</h1>
      <button class="header-button">узнать больше</button>
      <button class="icon expand" @click="showMenu = true">
        <IconExpand :class="showMenu ? 'rotate' : ''" />
      </button>
      <button class="icon cart">
        <IconCart />
      </button>
    </div>
  </header>
</template>

<script setup>
import HeaderNavComponent from '@/components/HeaderNavComponent.vue'
import IconCart from '@/icons/IconCart.vue'
import IconExpand from '@/icons/IconExpand.vue'
import {ref} from 'vue'

const showMenu = ref(false)

function processClick(e) {
  if (!e.target.closest('.header-nav') && !e.target.closest('.expand')) {
    showMenu.value = false
  }
}
</script>
<style lang="scss">
.header {
  background-color: var(--blue);
  height: 940px;
  background-repeat: no-repeat;
  padding-top: 13px;
  color: var(--white);

  @media screen and (max-width: 1024px) {
    padding-top: 0px;
    height: 783px;
  }
  @media screen and (max-width: 820px) {
    height: 730px;
  }
  @media screen and (max-width: 400px) {
    padding-top: 7px;
    height: 590px;
  }
  @media screen and (max-width: 350px) {
      height: 540px;
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
      background-position: -373px 18px;
    }
    @media screen and (max-width: 370px) {
      background-size: 254% auto;
    background-position: -254px 47px;
    }
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
    @media screen and (max-width: 1060px) {
      width: 50%;
      font-size: 64px;
      letter-spacing: 5px;
      margin-top: 73px;
    }
    @media screen and (max-width: 1024px) {
      width: 70%;
      font-size: 54px;
      letter-spacing: 5px;
      margin-top: 73px;
    }
    @media screen and (max-width: 768px) {
      width: 67%;
      margin-top: 0;
    }

    @media screen and (max-width: 400px) {
      font-size: 40px;
      letter-spacing: 3px;
      margin-top: 11px;
    }
  }

  .header-button {
    margin-top: 71px;
    @media screen and (max-width: 1060px) {
      margin-top: 50px;
    }

    @media screen and (max-width: 1024px) {
      margin-top: 139px;
    }
    @media screen and (max-width: 850px) {
      margin-top: 90px;
    }
    @media screen and (max-width: 768px) {
      margin-top: 40px;
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
    svg {
      transition: transform 100ms ease;
      &.rotate {
        transform: rotate(180deg);
      }
    }
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

  .v-enter-active {
    animation: go-out 1s reverse;
  }

  .v-leave-active {
    animation: go-out 1s;
  }

  @keyframes go-out {
    0% {
      transform: translateY(0);
    }
    20% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-800px);
    }
  }
}
</style>
