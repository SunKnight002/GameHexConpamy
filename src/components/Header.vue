<template>
    <header class="topbar">
        <nav>
            <router-link to="/"><img src="@/assets/img/LOGO_GameHex_SMALL.png" alt=""></router-link>
            <ul class="topbarUL">
                <router-link to="#services" class="nav-link"><li class="nav-item"><span>Services</span></li></router-link>
                <router-link to="#product" class="nav-link"><li class="nav-item"><span>Product</span></li></router-link>
                <router-link to="/about" class="nav-link"><li class="nav-item" @click="commingsoon"><span>Organization</span></li></router-link>
                <router-link to="/recruitment" class="nav-link"><li class="nav-item" @click="commingsoon"><span>Recruitment</span></li></router-link>
                <router-link to="/recruitment" class="nav-link"><li class="nav-item" @click="commingsoon"><span>Contact</span></li></router-link>
            </ul>
        </nav>
    </header>
</template>

<script>

import Swal from 'sweetalert2/dist/sweetalert2.js';
import 'sweetalert2/dist/sweetalert2.css';

export default {
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

<style lang="scss" scoped>

@use 'sass:map';
@use '../assets/sass/basic/_var' as var;
@use '../assets/sass/basic/_color' as color;
@use '../assets/sass/mixins/_minins' as minins;

.topbar{
    width: 100%;
    margin: 0 auto;
    font-family: "Odibee Sans", sans-serif;
    font-size: 32px;
    font-weight: 400;
    font-style: normal;
    color: white;
    padding: 20px 0px;
    background-color: map.get(color.$colors , coffee04);
}

nav{
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;

    img{
        margin-right: 80px;
        display: block;
    }
}

.topbarUL {
    display: flex;
    gap: 40px;
    align-items: center;
    justify-content: center;

    .nav-link {
        color: map.get(color.$colors , white );
        text-decoration: none;
        transition: 0.7s ease;

        span {
            display: inline-block;
            font-weight: 500;
            position: relative;

            &::after {
                content: "";
                position: absolute;
                width: 0;
                height: 2px;
                display: block;
                left: 0;
                top: 30px;
                background-color: rgb(168, 212, 255);
                transition: width 0.3s ease;
            }

            &:hover {
                color: map.get(color.$colors , dodgerBlue);

                &::after {
                    width: 100%;
                    background: rgb(5, 205, 255);
                }
            }
        }
    }
}

</style>