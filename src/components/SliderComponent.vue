<template>
  <div class="slider">
    <div class="container">
      <h2>горячие новинки</h2>
      <Splide
        :options="options"
        :has-track="false"
        ref="splide"
        @splide:moved="(_, index) => track(index)"
        @splide:mounted="
          () => {
            goto(current)
            track(current)
          }
        "
      >
        <div class="custom-wrapper">
          <SplideTrack>
            <SplideSlide v-for="slide in slides" v-bind="slide" :key="slide.id">
              <CardComponent v-bind="slide" />
            </SplideSlide>
          </SplideTrack>
        </div>
        <div class="splide__arrows">
          <button class="splide__arrow splide__arrow--prev icon"><IconLeft /></button>
          <ul id="thumbnails" class="thumbnails" v-if="!hasTrack">
            <li
              class="thumbnail"
              v-for="(slide, index) in slides"
              @click="goto(index)"
              :class="index === current ? 'active' : ''"
            ></li>
          </ul>
          <button class="splide__arrow splide__arrow--next icon"><IconRight /></button>
        </div>
      </Splide>
    </div>
  </div>
</template>

<script setup>
import IconRight from '@/icons/IconRight.vue'
import IconLeft from '@/icons/IconLeft.vue'
import CardComponent from '@/components/CardComponent.vue'
import {Splide, SplideSlide, SplideTrack} from '@splidejs/vue-splide'
import {ref, onMounted, onBeforeUnmount, computed} from 'vue'
const slides = [
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
]

const current = ref(0)
const splide = ref('splide')
const hasTrack = ref(false)

const options = ref({
  perPage: 3,
})
function changeSlidesCount() {
  const width = document.documentElement.offsetWidth
  if (width > 1024) {
    options.value.perPage = 3
  } else if (width > 768) {
    options.value.perPage = 2
  } else {
    options.value.perPage = 1
  }
}
function checkIfHasTrack() {
  hasTrack.value = document.documentElement.offsetWidth <= 768
}
onMounted(() => {
  changeSlidesCount()
  checkIfHasTrack()
  window.addEventListener('resize', changeSlidesCount)
  window.addEventListener('resize', checkIfHasTrack)
})
onBeforeUnmount(() => {
  window.removeEventListener('resize', changeSlidesCount)
  window.removeEventListener('resize', checkIfHasTrack)
})

function goto(index) {
  splide.value.go(index)
}
function track(index) {
  current.value = index
}
</script>

<style lang="scss">
.slider {
  overflow: hidden;
  h2 {
    text-align: center;
    margin-top: 142px;

    @media screen and (max-width: 768px) {
      margin-top: 69px;
      font-size: 48px;
    }
    @media screen and (max-width: 400px) {
      margin-top: 48px;
      font-size: 30px;
    }
  }
  .splide {
    margin-top: 74px;

    @media screen and (max-width: 768px) {
      margin-top: 21px;
    }
    @media screen and (max-width: 400px) {
      margin-top: 17px;
    }
  }

  .splide__arrows {
    display: flex;
    justify-content: center;
    margin-top: 73px;
    gap: 75px;
    align-items: center;

    .icon {
      color: var(--black);
      transform: scale(1.15);
    }
    @media screen and (max-width: 768px) and (min-width: 401px) {
      .splide__arrow {
        position: absolute;
        top: 50%;
        transform: translateY(-165%) scale(2);
        z-index: 1;
        &--prev {
          right: 95%;
          @media screen and (max-width: 500px) {
            right: 100%;
            transform: translateY(-100%) scale(1);
          }
        }
        &--next {
          left: 95%;
          @media screen and (max-width: 500px) {
            left: 100%;
            transform: translateY(-100%) scale(1);
          }
        }
      }
    }
    @media screen and (max-width: 400px) {
      gap: 35vw;
      margin-top: 9px;
      .icon {
        transform: scale(0.9);
      }
    }
  }
  .thumbnails {
    display: flex;
    justify-content: space-between;
    margin-top: -21px;
    padding: 0;
    gap: 54px;
    align-items: top;
  }
  .thumbnail {
    width: 32px;
    height: 32px;
    border: 3px solid var(--black);
    border-radius: 50%;
    list-style-type: none;
    cursor: pointer;
    &.active {
      background-color: var(--black);
    }
  }
}
</style>
