<template>
  <div class="container">
    <div class="info">
      <div class="wrapper">
        <div class="img">
          <img src="@/assets/images/book.png" alt="book" />
        </div>
        <div class="text">
          <h2>О нас</h2>
          <p>
            Книжное наследие от мыслителей Древней Греции и до людей современности. Это не просто
            магазин, а настоящий клуб любителей книги, который объединяет в своем культурном
            пространстве людей самых разных интересов.
          </p>
        </div>
        <div class="text">
          <h2>Гармония</h2>
          <p>
            Наш проект «Гармония» объединяет читателей и авторов в реальности и в интернете. Каждую
            неделю проводятся встречи онлайн и вживую. Из наших регулярных рубрик вы узнаете много
            нового о книгах и писателях.
          </p>
        </div>
        <div class="img">
          <img src="@/assets/images/bust.png" alt="book" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss">
.info {
  margin-top: 52px;
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 125px;
  @media screen and (max-width: 768px) {
    margin-top: 60px;
  }
  .wrapper {
    display: grid;
    grid-template-columns: repeat(2, 650px);
    grid-template-rows: repeat(2, 590px);
    @media screen and (max-width: 1350px) {
      grid-template-columns: repeat(2, 500px);
    }
    @media screen and (max-width: 1024px) {
      grid-template-columns: repeat(2, 350px);
    }
    @media screen and (max-width: 768px) {
      grid-template-rows: repeat(2, 550px);
    }
    @media screen and (max-width: 710px) {
      grid-template-columns: 90vw;
    }
    .text {
      background-color: var(--blue);
      color: var(--white);
      padding: 62px 123px;
      display: flex;
      flex-direction: column;
      align-items: center;
      &:nth-child(2) {
        @media screen and (max-width: 710px) {
          order: -1;
        }
      }
      @media screen and (max-width: 1350px) {
        padding: 40px 80px;
      }
      @media screen and (max-width: 768px) {
        padding: 25px 48px;
      }
      h2 {
        @media screen and (max-width: 1024px) {
          font-size: 48px;
        }
      }
      p {
        font-size: 24px;
        text-align: center;
        line-height: 1.8;
        @media screen and (max-width: 1250px) {
          font-size: 18px;
        }
      }
    }
    .img {
      overflow: hidden;
      display: flex;
      justify-content: center;

      img {
        object-fit: contain;
      }
    }
  }
}
</style>
