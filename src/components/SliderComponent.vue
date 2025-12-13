<template>
  <div class="slider">
    <div class="container">
      <h2>горячие новинки</h2>
      <Splide :options="options">
        <SplideSlide v-for="slide in slides" v-bind="slide" :key="slide.id">
          <CardComponent v-bind="slide" />
        </SplideSlide>
      </Splide>
    </div>
  </div>
</template>

<script setup>
import CardComponent from '@/components/CardComponent.vue'
import {ref, onMounted, onBeforeUnmount} from 'vue'
const slides = ref([
  {
    id: 1,
    src: '/images/books/1.png',
    title: 'Ж. Верн, “Двадцать тысяч лье под водой”',
    genre: 'Приключения',
    price: '168',
  },
  {
    id: 2,
    src: '/images/books/2.png',
    title: 'Н. Кун, “Легенды и мифы Древней Греции”',
    genre: 'Эпос и фольклор',
    price: '174',
  },
  {
    id: 3,
    src: '/images/books/3.png',
    title: 'Гомер, “Илиада”',
    genre: 'Эпос и фольклор',
    price: '155',
  },
])

const options=ref({
  perPage: 3,
})
function changeSlidesCount() {
  const width = document.documentElement.offsetWidth
  if (width > 1024) {
    options.value.perPage = 3
  } else if (width > 768) {
    options.value.perPage = 2
  }
  else {
    options.value.perPage = 1
  }
}
onMounted(() => window.addEventListener('resize', changeSlidesCount))
onBeforeUnmount(() => console.log('lol'))
</script>

<style lang="scss">
.slider {
  overflow: hidden;
  h2 {
    text-align: center;
  }
  .carousel {
    display: flex;
  }
}
</style>
