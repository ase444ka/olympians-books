<template>
  <nav class="header-nav">
    <button class="icon" @click="hide"><IconExpand :class="rotate ? 'rotate' : ''" /></button>
    <a>Главная</a>
    <a>Каталог</a>
    <a>Корзина</a>
  </nav>
</template>

<script setup>
import {ref, onBeforeUnmount} from 'vue'
import IconExpand from '@/icons/IconExpand.vue'
const emit = defineEmits(['close'])

const rotate = ref(false)

function hide() {
  console.log('hide')
  rotate.value = true
  setTimeout(() => {
    emit('close')
  }, 50)
  setTimeout(() => {
    rotate.value = false
  }, 2000)
}

onBeforeUnmount(() => {
  rotate.value = true
  setTimeout(() => {
    rotate.value = false
  }, 2000)
})
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
  @media screen and (max-width: 768px) {
    left: calc(50% - 168px);
    width: 336px;
    gap: 26px;
    padding: 0px 0 72px 0;
  }
  @media screen and (max-width: 400px) {
    left: 0;
    width: 100vw;
    gap: 25px;
    padding: 0 0 76px 0;
    font-size: 25px;
  }

  a {
    color: var(--black);
    cursor: pointer;
    &:first-child {
      margin-top: 5px;
    }
    &:hover,
    &:active {
      color: var(--grey);
    }
    @media screen and (max-width: 768px) {
      font-size: 26px;
    }
  }
  button.icon {
    color: var(--black);
    &:hover,
    &:active {
      color: var(--grey);
    }

    svg {
      transform: rotate(180deg);
      transition: transform 100ms ease;
      &.rotate {
        transform: rotate(0deg);
      }
      @media screen and (max-width: 400px) {
        transform: scale(0.5);
      }
    }
  }
}
</style>
