<template>
    <section class="Card_Area">
        <!-- 動態渲染卡片 -->
        <section class="Card">
            <div class="Card_Img" @click="commingsoon">
                <!-- <img src="@/assets/img/Card_HolyPoem.png" alt=""> -->
                <!-- <img :src="card.imgSrc" :alt="card.title"> -->
                <img :src="cardData.imgSrc" :alt="cardData.title" />
            </div>
            <div class="Card_Info">
                <div class="Card_Contain">
                    <div class="Card_Title">
                        <!-- <p>HOLY POEM</p> -->
                        <!-- <p>{{ card.title }}</p> -->
                        <p>{{ cardData.title }}</p>
                    </div>

                    <div class="Card_Platform">
                        <!-- <img src="@/assets/img/Card_Info_IOSICON.png" alt="">
                        <img src="@/assets/img/Card_Info_ANDROIDICON.png" alt="">
                        <img src="@/assets/img/Card_Info_PCICON.png" alt=""> -->
                        <!-- <img
                            v-for="(platform, pIndex) in card.platforms"
                            :key="pIndex"
                            :src="platform.imgSrc"
                            :alt="platform.alt"
                        > -->
                        <img
                            v-for="(platform, index) in cardData.platforms"
                            :key="index"
                            :src="platform.imgSrc"
                            :alt="platform.alt"
                        />
                    </div>
                </div>

                <div class="Card_Link">
                    <img src="@/assets/img/Card_Info_Arrow.png" alt="">
                </div>

            </div>
        </section>
    </section>
</template>

<script>

// 第二種方式（從完整檔案導入）
import Swal from 'sweetalert2/dist/sweetalert2.js';
import 'sweetalert2/dist/sweetalert2.css';

    export default {
        props: {
            cardData: {
            type: Object,
            required: true,
            },
        },
        data() {
        return {
            // 動態卡片資料
            cards: [
                {
                    imgSrc: "/img/Card_HolyPoem.png",
                    title: "HOLY POEM",
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
                },
            ],
        };
    },
        methods: {
            commingsoon(){
                console.log(Swal); // 應顯示 `fire` 函數
                Swal.fire({
                title: '頁面製作中',
                text: '您好，相關頁面規劃中',
                icon: 'info',
                confirmButtonColor: '#FCD15B',
                confirmButtonText: 'OK'
                });
            }
        }
    }
</script>

<style lang="scss" scoped >
@use 'sass:map';
@use '../assets/sass/basic/_var' as var;
@use '../assets/sass/basic/_color' as color;
@use '../assets/sass/mixins/_minins' as minins;
@use '../assets/sass/basic/_animate' as animate;


    .Card_Area{
        width: 100%;
        margin: 0 auto;
        display: grid;
    }

    .Card{
        position: relative;
        margin: 0 auto;
    }

    .Card_Img {
        display: block;
        cursor: pointer;
        position: relative;
        z-index: 1;

        img{
            display: block;
            cursor: pointer;
            width: auto;
            height: auto;
            max-width: 100%;
        }
    }

    .Card_Info {
        width: 100%;
        background-color: #81007E;
        border-radius: 0 0 60px 60px;
        position: absolute;
        z-index: 2;
        top: 84%;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 12px 0 12px 0;
    }

    .Card_Contain{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .Card_Link{
        margin-left: 40px;
    }

    .Card_Title {
        width: 100%;
        display: flex;
        align-items: center;


        p {
            font-size: 32px;
            color: map.get(color.$colors , white );
            font-family: "Odibee Sans", sans-serif;
            font-weight: 400;
            font-style: normal;
        }

    }

    .Card_Platform {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-around;

        img {
            display: block;
            cursor: pointer;
        }
    }
</style>