<script>
  import Header from '@/components/Header.vue';

    // Import Swiper Vue.js components
    import { Swiper, SwiperSlide } from 'swiper/vue';
    import { onMounted, onBeforeUnmount } from 'vue';
    import { useRouter } from 'vue-router';
    // Import Swiper styles
    import 'swiper/css';
    import 'swiper/scss/navigation';
    import 'swiper/scss/pagination';
      // import required modules
    import { Navigation, Pagination, Autoplay } from 'swiper/modules';
    export default {
        components: {
            Swiper,
            SwiperSlide,
            Header,
        },
        setup() {
            const router = useRouter();

            const initSwiper = () => {
            // 您可以使用 Swiper 的 API 在這裡初始化或更新 Swiper
            if (swiperRef.value) {
                swiperRef.value.swiper.update();
            }
            };

            const onSwiper = (swiper) => {
                console.log(swiper);

                            // 將自定義按鈕綁定到 Swiper 的 API
            const nextButton = document.querySelector('.swiper-button-next-custom');
            const prevButton = document.querySelector('.swiper-button-prev-custom');

            if (nextButton && prevButton) {
                nextButton.addEventListener('click', () => swiper.slideNext());
                prevButton.addEventListener('click', () => swiper.slidePrev());
            }
            };
            const onSlideChange = () => {
                console.log('slide change');
            };

            onMounted(() => {
                router.afterEach(() => {
                    initSwiper();
                });
            });

            onBeforeUnmount(() => {
                // 清理事件監聽器
                router.afterEach(() => {});
            });

            return { onSwiper, onSlideChange, Navigation, Pagination, Autoplay };
        }
    }
</script>

<template>
    <main>
        <Header/>
        <section class="GameHex_Index_Swiper">
            <!-- Swiper -->
            <Swiper
                class="mySwiper"
                :modules="[Navigation, Pagination, Autoplay]"
                :pagination="{ clickable: true }"
                :autoplay="{ delay: 2500, disableOnInteraction: false }"
                @swiper="onSwiper"
                @slideChange="onSlideChange">
                <swiper-slide class="swiper-slide"><img src="@/assets/img/Banner_index_AIRFORCE.jpg" alt=""></swiper-slide>
                <swiper-slide class="swiper-slide"><img src="@/assets/img/Banner_index_SAGE.jpg" alt=""></swiper-slide>
                <swiper-slide class="swiper-slide"><img src="@/assets/img/Banner_index_SKY.jpg" alt=""></swiper-slide>
              </Swiper>
              <div class="autoplay-progress">
                  <svg viewbox="0 0 48 48">
                      <circle cx="24" cy="24" r="20"></circle>
                  </svg>
                  <span></span>
              </div>
              <!-- 自定義導航按鈕 -->
              <div class="swiper-button-next-custom"></div>
              <div class="swiper-button-prev-custom"></div>
        </section>
    </main>
</template>

<style lang="scss" scoped>
@use 'sass:map';
@use '../assets/sass/basic/_var' as var;
@use '../assets/sass/basic/_color' as color;
@use '../assets/sass/mixins/_minins' as minins;
@use '../assets/sass/basic/_animate' as animate;

$color_2: var(--swiper-theme-color);

  .GameHex_Index_Swiper {
      width: 100%;
      height: auto;
      display: flex;
      flex-direction: column;
      background-color:#C12636;
  }

  .swiper {
    width: 100%;
    height: 100vh;
    padding: 0;
    margin: 0;
  }

  .swiper-slide {
      text-align: center;
      font-size: 18px;
      background: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: contain;
      }
  }

  .autoplay-progress {
      position: absolute;
      right: 16px;
      bottom: 16px;
      z-index: 10;
      width: 48px;
      height: 48px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: bold;
      color: $color_2;
      svg {
          --progress: 0;
          position: absolute;
          left: 0;
          top: 0;
          z-index: 10;
          width: 100%;
          height: 100%;
          stroke-width: 4px;
          stroke: var(--swiper-theme-color);
          fill: none;
          stroke-dashoffset: calc(125.6px * (1 - var(--progress)));
          stroke-dasharray: 125.6;
          transform: rotate(-90deg);
          stroke: #eee;
      }
  }

  .swiper-button-next {
      --swiper-theme-color: #fff;

  }

  .swiper-button-prev {
      --swiper-theme-color: #fff;
  }

  /* 自定義導航按鈕樣式 */
.swiper-button-next-custom {
  width: 92px;
  height: 82px;
    background: url("@/assets/img/next-button.png") no-repeat;
    background-size: cover;
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    z-index: 10;
    cursor: pointer;
}
.swiper-button-prev-custom {
    width: 92px;
    height: 82px;
    background: url("@/assets/img/prev-button.png") no-repeat;
    background-size: cover;
    position: absolute;
    left: 10px;
    top: 50%;
    transform: translateY(-50%);
    opacity: 0.5;
    z-index: 10;
    cursor: pointer;
}
</style>