<template>
  <div class="card">
    <div class="image">
      <img :src="src" :alt="title" />
    </div>
    <div class="title">{{ title }}</div>
    <div class="genre additional-text">{{ genre }}</div>
    <div class="footer">
      <div class="price">{{ price }} р.</div>
      <button>купить</button>
    </div>
  </div>
</template>

<script setup>
const {src, title, genre, price} = defineProps(['src', 'title', 'genre', 'price'])
</script>

<style lang="scss">
.card {
  margin-left: 20px;
  width: 420px;
  height: 650px;
  padding: 22px 23px;
  border: 3px solid var(--black);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  @media screen and (max-width: 768px) {
    width: 340px;
    height: 585px;
    padding: 21px 17px;
  }
  @media screen and (max-width: 400px) {
    width: 291px;
    height: 500px;
    padding: 28px 22px;
  }
  .image {
    display: grid;
    place-items: center;
    @media screen and (max-width: 400px) {
      img {
        width: 66%;
      }
    }
  }

  .title {
    font-size: 25px;
    text-align: center;
    line-height: 1.45;
    letter-spacing: 0.8px;
    @media screen and (max-width: 768px) {
      font-size: 17px;
      letter-spacing: 1.5px;
      line-height: 1.5;
    }
    @media screen and (max-width: 400px) {
      margin-top: 23px;
    }
  }
  .genre {
    margin-top: 20px;
    @media screen and (max-width: 768px) {
      margin-top: 10px;
      font-size: 15px;
    }
    @media screen and (max-width: 400px) {
      margin-top: 14px;
    }
  }
  .footer {
    margin-top: 38px;
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;
    @media screen and (max-width: 768px) {
      margin-top: 31px;
    }
    @media screen and (max-width: 400px) {
      margin-top: 16px;
    }
  }
  button {
    font-size: 30px;
    line-height: 1.5;
    color: var(--black);
    border: 3px solid var(--black);
    background: transparent;
    padding: 12px 25px;
    @media screen and (max-width: 768px) {
      font-size: 24px;
      padding: 10px 19px;
      line-height: 1;
    }
    @media screen and (max-width: 400px) {
      padding: 10px 7px;
    }

    &:hover {
      background-color: #cdcdcd;
    }
    &:active {
      background: var(--blue);
    }
  }
  .price {
    padding-left: 41px;
    @media screen and (max-width: 768px) {
      padding-left: 37px;
    }
    @media screen and (max-width: 400px) {
      padding-left: 26px;
      font-size: 23px;
    }
  }
}
</style>
