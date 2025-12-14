<template>
  <nav class="header-nav">
    <button class="icon"><IconExpand /></button>
    <a>Главная</a>
    <a>Каталог</a>
    <a>Корзина</a>
  </nav>
</template>

<script setup>
import IconExpand from '@/icons/IconExpand.vue'

</script>

<style lang="scss">
.header-nav {
  position: fixed;
  top: 0;
  left: calc(50% - 250px);
  width: 500px;
  z-index: 1;
  background-color: var(--white);
  display: flex;
  flex-direction: column;
  left: calc(50% - 210px);
  width: 420px;
  gap: 35px;
  padding: 19px 0 113px 0;
  font-family: Forum;
  font-size: 34px;
  align-items: center;
  a {
    color: var(--black);
    &:first-child {
      margin-top: 5px;
    }
  }
  button.icon svg {
    color: var(--black) !important;
    transform: rotate(180deg);
  }
}
</style>
