<template>
  <div class="subscribe">
    <div class="container">
      <div class="wrapper">
        <h3>Хотите знать о книгах все?</h3>
        <p>Подпишитесь на нашу новостную рассылку</p>
        <form @submit.prevent="send" :disabled="!isValid">
          <input
            type="text"
            v-model="email"
            @blur="isDirty = true"
            @focus="isDirty = false"
            :class="hasError ? 'error' : ''"
          />
          <button type="submit" :disabled="!isValid">Отправить</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref, computed} from 'vue'
const email = ref('')
const isDirty = ref(false)
const isValid = computed(() => {
  return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email.value)
})

const hasError = computed(() => isDirty.value && !isValid.value)
function send() {
  isDirty.value = false
  email.value = ''
  console.log('sent')
}
function setDirty() {
  isDirty.value = true
}
</script>

<style lang="scss">
.subscribe {
  margin-top: 140px;
  @media screen and (max-width: 1024px) {
    margin-top: 90px;
  }
  @media screen and (max-width: 610px) {
    margin-top: 67px;
  }
  .wrapper {
    width: 75%;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media screen and (max-width: 1024px) {
      width: 83%;
    }
  }
  h3 {
    @media screen and (max-width: 1024px) {
      font-size: 32px;
      letter-spacing: 4%;
    }
    @media screen and (max-width: 610px) {
      line-height: 1.3;
      text-align: center;
    }
  }
  p {
    margin-top: 8px;
    font-size: 24px;
    letter-spacing: 6%;
    margin-top: 14px;
    font-family: Raleway;
    @media screen and (max-width: 1024px) {
      font-size: 19px;
      letter-spacing: 3%;
    }
    @media screen and (max-width: 610px) {
      margin-top: 6px;
      text-align: center;
    }
  }
  form {
    margin-top: 59px;
    display: flex;
    justify-content: center;
    width: 100%;
    gap: 20px;
    margin-top: 55px;
    @media screen and (max-width: 1024px) {
      margin-top: 42px;
    }
    @media screen and (max-width: 610px) {
      margin-top: 33px;
      gap: 10px;
      flex-direction: column;
      align-items: center;
    }
    input {
      display: inline-block;
      height: 60px;
      flex-grow: 1;
      border: 3px solid var(--black);
      font-size: 35px;
      font-family: Raleway;
      padding: 0 12px 7px 12px;
      font-style: italic;
      &:focus {
        outline: none;
        border-color: var(--blue);
      }
      &.error {
        background-color: rgb(252, 207, 207);
        border-color: rgb(100, 47, 47);
      }
      @media screen and (max-width: 1024px) {
        height: 50px;
        flex-grow: 0;
        width: 248px;
        font-size: 20px;
        padding: 5px;
      }
      @media screen and (max-width: 610px) {
        width: 91vw;
      }
    }
    button {
      border-color: var(--black);
      height: 60px;
      font-size: 30px;
      padding: 0px 67px;
      &:focus {
        border-color: var(--blue);
      }
      @media screen and (max-width: 1024px) {
        height: 50px;
        font-size: 24px;
        line-height: 45px;
        padding: 0 7px;
      }
      @media screen and (max-width: 610px) {
        width: 60vw;
      }
    }
  }
}
</style>
