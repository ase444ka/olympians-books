<template>
  <footer>
    <div class="container">
      <div class="wrapper">
        <div class="logo">olympians books</div>
        <a class="phone" href="tel:+30922040281">+30922040281</a>
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
  @media screen and (max-width: 960px) {
    margin-top: 90px;
  }
  .wrapper {
    display: flex;
    padding: 21px;
    align-items: center;
    justify-content: space-between;
    @media screen and (max-width: 960px) {
      padding: 26px 0 30px;
    }
    @media screen and (max-width: 660px) {
display: grid;
grid-template-columns: 1fr 1fr;
grid-template-areas:
                'logo  nav'
                'phone nav';
}
  }
  .logo {
    font-family: Archeologicaps;
    font-size: 29px;
    line-height: 45px;
    text-indent: 1px;
    flex-basis: 241px;
    letter-spacing: 2.8px;
    grid-area: logo;
    @media screen and (max-width: 960px) {
      font-size: 20px;
      line-height: 32px;
      flex-basis: 155px;
      letter-spacing: 1.8px;
    }
  }
  .phone {
    grid-area: phone;
    @media screen and (max-width: 660px) {
text-align: start;
}
  }
  nav {
    display: flex;
    flex-grow: 2;
    justify-content: space-between;
    grid-area: nav;
    @media screen and (max-width: 660px) {
flex-direction: column;
}
  }

  a {
    font-size: 26px;
    letter-spacing: 1px;
    flex-grow: 1;
    text-align: center;
    @media screen and (max-width: 960px) {
      font-size: 19px;
    }
  }
}
</style>
