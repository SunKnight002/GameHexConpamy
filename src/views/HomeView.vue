<script>
  import Header from '@/components/Header.vue';
  import Card from '@/components/Card.vue';
  import gsap from 'gsap';

    // Import Swiper Vue.js components
    import { Swiper, SwiperSlide } from 'swiper/vue';
    import { onMounted, onBeforeUnmount,ref } from 'vue';
    import { useRouter } from 'vue-router';
    // Import Swiper styles
    import 'swiper/css';
    import 'swiper/scss/navigation';
    import 'swiper/scss/pagination';
      // import required modules
    import { Navigation, Pagination, Autoplay } from 'swiper/modules';

    import 'swiper/css';
    import 'swiper/scss/navigation';
    import 'swiper/scss/pagination';

    export default {
        components: {
            Swiper,
            SwiperSlide,
            Header,
            Card,
        },
        setup() {
            const router = useRouter();
            const GameSlogan = ref(null);
            onMounted(() => {
              gsap.fromTo(
                GameSlogan.value,
                { opacity: 0, y: 50 }, // 開始狀態：透明度為 0，y 位移 50px
                { opacity: 1, y: 0, duration: 1.5, ease: 'power2.out' } // 結束狀態：透明度 1，y 位移 0，動畫時間 1.5秒
      );
    });

            // 卡片
            const cards = [
              {
                  imgSrc: "/img/Card_HolyPoem.png",
                  title: "TRANPSPORTE",
                  platforms: [
                      { imgSrc: "/img/Card_Info_IOSICON.png", alt: "iOS Icon" },
                      { imgSrc: "/img/Card_Info_ANDROIDICON.png", alt: "Android Icon" },
                      { imgSrc: "/img/Card_Info_PCICON.png", alt: "PC Icon" },
                  ],
              },
              {
                  imgSrc: "/img/Card_HolePoemBorn.png",
                  title: "HOLY POEM;BORN",
                  platforms: [
                      { imgSrc: "/img/Card_Info_IOSICON.png", alt: "iOS Icon" },
                      { imgSrc: "/img/Card_Info_ANDROIDICON.png", alt: "Android Icon" },
                  ],
              },
              {
                  imgSrc: "/img/Card_DragonHeart.png",
                  title: "DRAGON HEART",
                  platforms: [
                      { imgSrc: "/img/Card_Info_PCICON.png", alt: "PC Icon" },
                  ],
              },              {
                  imgSrc: "/img/Card_8inKey.png",
                  title: "8 IN KEY",
                  platforms: [
                      { imgSrc: "/img/Card_Info_IOSICON.png", alt: "iOS Icon" },
                      { imgSrc: "/img/Card_Info_ANDROIDICON.png", alt: "Android Icon" },
                  ],
              },
          ];

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

            return { cards,onSwiper, onSlideChange, Navigation, Pagination, Autoplay,GameSlogan };
        }
    }
</script>

<template>
    <main>
        <!-- 標頭 -->
        <Header/>
        <!-- 首頁第一層輪播，播放歷年作品 -->
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

        <!-- 首頁第二層歷年產品圖卡 -->
        <section class="GameHex_Index_Card">
          <h1>Product</h1>
          <img src="/img/Span_Light.png" alt="發光橘色條">
          <Swiper
              class="mySwiperCard"
              :modules="[Navigation, Pagination, Autoplay]"
              :navigation="true"
              :pagination="{ clickable: true, type: 'bullets' }"
              :slides-per-view="3"
              :space-between="30"
              :autoplay="{ delay: 3000, disableOnInteraction: false }"
          >
              <SwiperSlide v-for="(card, index) in cards" :key="index">
                  <Card :card-data="card" />
              </SwiperSlide>
          </Swiper>
          <p ref="GameSlogan">More than 20 Games are available on Google Play And IOS Store!</p>
        </section>

        <!-- 首頁第三層公司提供服務 -->
        <section class="GameHex_Index_Services">
          <div class="Page_Title">
            <p>Product</p>
            <img src="/img/Span_Light.png" alt="發光橘色條">
          </div>


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

  /* 自定義導航按鈕樣式 1*/
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

// 第二區塊
.GameHex_Index_Card {
  padding: 140px 140px 66px 140px;
  background-color:#10110C;
  font-family: "Odibee Sans", sans-serif;
  font-weight: 400;
  font-style: normal;
  color: #fff;

  h1{
    font-size: 32px;
    margin: 0 auto;
    text-align: center;
  }

  p{
    font-size: 40px;
    margin: 0 auto;
    text-align: center;
    margin-top: 36px;
    opacity: 0;
    transform: translateY(50px);
  }

  img{
    text-align: center;
    display: block;
    margin: 20px auto 15px auto;
  }
}

.mySwiperCard {
  width: 70%;
  height: 70vh;
  margin: 0 auto;
  position: relative;


  .swiper-slide {
    width: 100%;
    height: 60vh;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 60px;
    background-color: transparent;

    &:hover::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(60px);
      border-radius: 60px;
      z-index: 1;
    }
  }
}

/* 調整圓點的位置 */
.swiper-pagination {
  position: absolute;
  bottom: 10px;  /* 調整圓點的位置 */
  width: 100%;
  text-align: center;
  z-index: 5;
}

.swiper-pagination-bullet {
  width: 12px;
  height: 12px;
  margin: 0 4px;
  background-color: #fff;
  border-radius: 50%;
  opacity: 0.5;
  transition: opacity 0.3s;
}

.swiper-pagination-bullet-active {
  opacity: 1;
}

//公司提供服務GameHex_Index_Services

.GameHex_Index_Services{
  width: 100%;
  height: 100vh;
  padding: 80px 0 80px 0;
  background-image: url('@/assets/img/BG_Index_Bussiness.jpg');
  background-repeat: no-repeat;
  background-size: cover;
}

.Page_Title{
  font-family: "Odibee Sans", sans-serif;
  font-weight: 400;
  font-style: normal;
  color: #fff;
  margin-left: 40px;
  margin-top: 140px;

  p{
    font-size: 40px;
  }
}

</style>