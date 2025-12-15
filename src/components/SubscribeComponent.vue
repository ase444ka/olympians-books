<template>
  <div class="subscribe">
    <div class="container">
      <div class="wrapper">
        <h3>Хотите знать о книгах все?</h3>
        <p>Подпишитесь на нашу новостную рассылку</p>
        <form @submit.prevent="send">
          <input type="text" />
          <button type="submit">Отправить</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
  function send() {
    console.log('sent')
  }
</script>

<style lang="scss">
.subscribe {
  margin-top: 140px;
  .wrapper {
    width: 75%;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  p {
    margin-top: 8px;
    font-size: 24px;
    letter-spacing: 6%;
    margin-top: 14px;
    font-family: Raleway;
  }
  form {
    margin-top: 59px;
    display: flex;
    width: 100%;
    gap: 20px;
    margin-top: 55px;
    input {
      display: inline-block;
      height: 60px;
      flex-grow: 1;
      border: 3px solid var(--black);
      font-size: 40px;
      font-family: Forum;
      font-style: italic;
      padding-left: 40px;
      &:focus {
        outline: none;
        border-color: var(--blue);
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
    }
  }
}
</style>
