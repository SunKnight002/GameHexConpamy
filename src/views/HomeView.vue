<script>
    import Header from '@/components/Header.vue';
    import Card from '@/components/Card.vue';
    // GSAP
    import gsap from 'gsap';
    import ScrollTrigger from 'gsap/ScrollTrigger';
    gsap.registerPlugin(ScrollTrigger); // 註冊 ScrollTrigger 插件

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
            const ServiceCard = ref(null);
            const Title_Product = ref(null);
            const Swiper_Product = ref(null);
            onMounted(() => {

              // 這邊是產品區域的標題
              gsap.fromTo
              (
                Title_Product.value,
                {opacity:0, y:50},
                { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' ,
                  scrollTrigger:
                  {
                      trigger: Title_Product.value,
                      start: 'top 80%',
                      end: 'top 30%',
                      scrub: false,
                      once: true,
                  }
                }
              )

              const onSwiper = (swiper) => {
              // 這邊是產品區域的輪播
              gsap.fromTo
              (
                Swiper_Product.value,
                {opacity:0, y:80},
                { opacity: 1, y: 0, duration: 1.5, ease: 'power1.out' ,
                  scrollTrigger:
                  {
                      trigger: Swiper_Product.value,
                      start: 'top 80%',
                      end: 'top 30%',
                      scrub: false,
                      once: true,
                  }
                }
              )
            }
              // 這邊是產品區域的文字
              gsap.fromTo
              (
                GameSlogan.value,
                { opacity: 0, y: 50 }, // 開始狀態：透明度為 0，y 位移 50px
                { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' ,
                  scrollTrigger:
                  {
                      trigger: GameSlogan.value,
                      start: 'top 80%',
                      end: 'top 30%',
                      scrub: false,
                      once: true,
                  },
                }
              );

              gsap.fromTo
              (
                ServiceCard.value,
                {opacity:0,y:20},
                {opacity:1,y:0,duration:0.8,ease:'power3.out',
                scrollTrigger:
                {
                      trigger: ServiceCard.value,
                      start: 'top 80%',
                      end: 'top 30%',
                      scrub: false,
                      once: true,
                }
              }
              )
    });

            // 第二階層卡片
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
                  { imgSrc: "/img/Card_Info_ANDROIDICON.png", alt: "Android Icon" },
                      { imgSrc: "/img/Card_Info_PCICON.png", alt: "PC Icon" },
                  ],
              },
              {
                  imgSrc: "/img/Card_8inKey.png",
                  title: "8 DAYS IN KEY",
                  platforms: [
                      { imgSrc: "/img/Card_Info_IOSICON.png", alt: "iOS Icon" },
                      { imgSrc: "/img/Card_Info_ANDROIDICON.png", alt: "Android Icon" },
                      { imgSrc: "/img/Card_Info_PCICON.png", alt: "PC Icon" },
                  ],
              },
              {
                  imgSrc: "/img/Card_HellKnight.png",
                  title: "HELL KNIGHT",
                  platforms: [
                      { imgSrc: "/img/Card_Info_IOSICON.png", alt: "iOS Icon" },
                      { imgSrc: "/img/Card_Info_ANDROIDICON.png", alt: "Android Icon" },
                      { imgSrc: "/img/Card_Info_PCICON.png", alt: "PC Icon" },
                  ],
              },
              {
                  imgSrc: "/img/Card_FATENORTH.png",
                  title: "FATE：NORTH",
                  platforms: [
                      { imgSrc: "/img/Card_Info_IOSICON.png", alt: "iOS Icon" },
                      { imgSrc: "/img/Card_Info_ANDROIDICON.png", alt: "Android Icon" },
                      { imgSrc: "/img/Card_Info_PCICON.png", alt: "PC Icon" },
                  ],
              },
          ];

          const hoverIndex = ref(null); // 用來追蹤滑鼠 hover 的卡片索引
          // 第三階層服務項目
          const services =
          [
                  {
                      titleImg: new URL("@/assets/img/Icon_Business_Game_Y.png", import.meta.url).href,
                      hoverImg: new URL("@/assets/img/Icon_Business_Game_B.png", import.meta.url).href,
                      titleText: "遊戲軟體研發",
                      text: [
                          "我們擁有超過十年的專業遊戲研發經驗，擁有精英企劃、美術、程式團隊，成功上架了20款雙平台遊戲。",
                          "此外，我們提供多語系在地化服務，助您在國內外市場順利推廣產品。"
                      ]
                  },
                  {
                      titleImg: new URL("@/assets/img/Icon_Business_Design_Y.png", import.meta.url).href,
                      hoverImg: new URL("@/assets/img/Icon_Business_Design_B.png", import.meta.url).href,
                      titleText: "視覺設計",
                      text: [
                          "我們擁有專業的視覺設計團隊，為您提供優質視覺設計服務。",
                          "由專業PM協助您與美術人員進行高效溝通，確保您的設計需求得到完美實現。"
                      ]
                  },
                  {
                      titleImg: new URL("@/assets/img/Icon_Business_Web_Y.png", import.meta.url).href,
                      hoverImg: new URL("@/assets/img/Icon_Business_Web_B.png", import.meta.url).href,
                      titleText: "網站平台開發",
                      text: [
                          "我們提供專業的網站平台開發服務，根據您的需求由UI/UX美術繪製設計稿，再由專業的前端和後端工程師進行開發。",
                          "也能根據您的需求建置客製化後台系統，確保您的網站功能齊全且操作便捷。"
                      ]
                  },
                  {
                      titleImg: new URL("@/assets/img/Icon_Business_System_Y.png", import.meta.url).href,
                      hoverImg: new URL("@/assets/img/Icon_Business_System_B.png", import.meta.url).href,
                      titleText: "系統建置維護",
                      text: [
                          "我們提供專業系統建置與維護服務，涵蓋伺服器部署、網絡配置、數據庫管理及日常運維。",
                          "確保系統穩定運行，並通過定期升級與更新保持最新的安全性和功能。"
                      ]
                  }
              ];

              // 預備加載處理
              const preloadImages = () => {
              const images = ['@/assets/img/BG_Business_Card.png', '@/assets/img/BG_Business_Card_hover.png'];
              images.forEach((src) => {
                  const img = new Image();
                  img.src = src;
              });
              };

              onMounted(() => {
              preloadImages();
              });

            const initSwiper = () => {
            // 您可以使用 Swiper 的 API 在這裡初始化或更新 Swiper
            if (swiperRef.value) {
                swiperRef.value.swiper.update();
            }
            };

            const onSwiper = (swiper) => {

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

            const handleRouteChange = () => {
                initSwiper();
            };


            onMounted(() => {
              const unwatch = router.afterEach(() => {
                    initSwiper();
                });

                router.afterEach(handleRouteChange);
            });

            onBeforeUnmount(() => {
                unwatch(); // 移除監聽器
            });

            return { cards,services,hoverIndex,onSwiper, onSlideChange, Navigation, Pagination, Autoplay,GameSlogan,ServiceCard,Title_Product,Swiper_Product };
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
        <section class="GameHex_Index_Card" id="product">
          <div ref="Title_Product" class="Title_Card">
            <h1>Product</h1>
            <img  src="/img/Span_Light.png" alt="發光橘色條">
          </div>

          <Swiper
              ref="Swiper_Product"
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
        <section class="GameHex_Index_Services" id="services">
          <div class="Page_Title">
            <p>Services</p>
            <img src="/img/Span_Light.png" alt="發光橘色條">
          </div>

          <div class="Services_Area">
            <div
              class="Service_Card"
              v-for="(service, index) in services"
              :key="index"
              @mouseover="hoverIndex = index"
              @mouseleave="hoverIndex = null"
              ref="ServiceCard"
            >
              <div class="Service_Title">
                <img :src="hoverIndex === index ?  service.hoverImg : service.titleImg" :alt="service.titleText">
                <p :class="{ hovered: hoverIndex === index }">{{ service.titleText }}</p>
              </div>
              <div class="Service_Text">
                <p v-for="(paragraph, idx) in service.text"
                :key="idx"
                :class="{ hovered: hoverIndex === index }"
                >{{ paragraph }}</p>
              </div>
            </div>
          </div>
        </section>

        <!-- 首頁第四區塊 服務項目 額外內容 -->
        <section class="GameHex_Index_Services_extra">
          <!-- 左邊區域 -->
          <div class="Services_left">
            <img src="@/assets/img/Service_LightingWorld.jpg" alt="">
          </div>
          <!-- 中間區域 -->
          <div class="Services_mid">
            <section class="Services_mid_type1">
              <section class="Services_mid_t1_Word">
                <p>模組化開發</p>
                <p>透過專業團隊實現您的夢想</p>
                <p class="t1_Word_text">專業企劃/美術/程式團隊實現您的委託，讓您的創意點子進入我們模組化的開發模式，並且時刻同步最新進度!</p>
              </section>
              <section class="Services_mid_t1_img">
                <img src="@/assets/img/Service_Money.jpg" alt="">
              </section>
            </section>


            <section class="Services_mid_type2">
              <section class="Services_mid_t1_Word">
                <p>最正確的在地翻譯</p>
                <p>多國語系在地化翻譯</p>
                <p class="t1_Word_text">您打算進軍國外市場?沒問題!我們有具備日文與韓文證照的企劃人員協助翻譯!!</p>
              </section>
              <section class="Services_mid_t2_img">
                <img src="@/assets/img/Service_Language.jpg" alt="">
              </section>
            </section>

            <section class="Services_mid_type1">
              <section class="Services_mid_t1_Word">
                <p>多國行銷</p>
                <p>海量精準投放廣告</p>
                <p class="t1_Word_text">透過大量的廣告投放讓您的遊戲進入各國玩家的視野，並且結合在地線下活動打響遊戲之知名度!</p>
              </section>
              <section class="Services_mid_t1_img">
                <img src="@/assets/img/Service_Intel.jpg" alt="">
              </section>
            </section>
          </div>
          <!-- 右邊區域 -->
          <div class="Services_right"></div>
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
    top: 60%;
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
    top: 60%;
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



  p{
    font-size: 40px;
    margin: 0 auto;
    text-align: center;
    margin-top: 36px;
    opacity: 0;
    transform: translateY(50px);
  }
}

.Title_Card{
  font-family: "Odibee Sans", sans-serif;
  font-weight: 400;
  font-style: normal;
  color: #fff;

  h1{
    font-size: 40px;
    margin: 0 auto;
    text-align: center;
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
  transform: scale(1.2); // 添加微小放大效果
}

//公司提供服務GameHex_Index_Services

.GameHex_Index_Services{
  width: 100%;
  height: 100vh;
  padding: 140px 0 80px 0;
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
  margin-bottom: 24px;

  p{
    font-size: 40px;
  }
}

.Services_Area{
  width: 60%;
  height: 80vh;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2,1fr);
  grid-template-rows: repeat(2,1fr);
  gap: 34.58px;
  align-items: center;
  justify-items: center;
}

.Service_Card{
  width: 545px;
  height: 372px;
  background-image: url('@/assets/img/BG_Business_Card.png');
  background-repeat: no-repeat;
  background-size: contain;

  &:hover{
    background-image: url('@/assets/img/BG_Business_Card_hover.png');
    background-repeat: no-repeat;
    background-size: contain;
    color: #000;
    }
}

.Service_Title{
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Noto Sans", sans-serif;
  font-weight: bold;
  font-style: normal;
  color: #fff;
  margin-top: 47px;
  margin-bottom: 24px;

  p{
    color: #fff;
    font-size: 32px;
    margin-left: 20px;
    transition: color 0.3s ease;

    &:hover{
      color: #000;
    }
  }
}

.Service_Text{
  font-family: "Noto Sans", sans-serif;
  font-weight: 400;
  font-style: normal;
  color: #fff;

  &:hover{
      color: #000;
  }

  p{
    width: 80%;
    margin-top: 24px;
    font-size: 24px;
    margin: 0 auto;
    margin-bottom: 24px;
    line-height: 35px;
    transition: color 0.3s ease;

    &:hover{
      color: #000;
    }
  }
}

// GameHex_Index_Services_extra
.GameHex_Index_Services_extra{
  width: 100%;
  padding: 120px 120px 40px 120px ;
  background-color: #00202B;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
}

.Services_left{
  display: block;
  width: auto;
  height: auto;
}

.Services_mid{
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  width: 33.33%;
}

.Services_mid_type1{
  display: flex;
  justify-content: center;
  border: 1px solid gold;
  width: 100%;
}

.Services_mid_type2{
  display: flex;
  justify-content: center;
  flex-direction: row-reverse;
  border: 1px solid gold;
  width: 100%;
}

.Services_mid_t1_Word {
  width: 48%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  p:nth-child(1) {
    font-size: 36px;
    font-weight: bold;
    margin-bottom: 20px;
  }

  p:nth-child(2) {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 8px;
  }

  .t1_Word_text {
    font-size: 16px;
    line-height: 30px;
    width: 100%;
  }
}


.Services_mid_t1_img{
  display: block;
  width: auto;
  height: auto;
  margin: 8px 0px 8px 24px;
}

.Services_mid_t2_img{
  display: block;
  width: auto;
  height: auto;
  margin: 8px 24px 8px 8px;
}


.Services_right {
  width: 16.9%;
  height: 774px;
  background: linear-gradient(
    to bottom,
    rgba(248, 68, 45, 1) 0%,
    rgba(169, 89, 31, 1) 50%,
    rgba(255, 211, 65, 0.2) 100%
  );
}

</style>