<template>
    <div class="body">
        <div class="title" style="height:150px;" v-if="scrolled">
            <h1>끝까지 내려주세요....</h1>
        </div>
        <div class="explan" v-if="scrollDone">
            <div class="frame"></div>
        </div>
        <div class="writing">
            <P>이곳은 군함도,지옥도,하시마 섬 입니다.</P>
            <P>
            현재 이곳은 유네스코 세계문화유산으로 등재되었습니다.<br>
            <strong>"일본 메이지유신 시대의 산업혁명 시설"</strong>로
            <br><br><br><br>
            {{ propsStorys.text }}
            <br>
            {{ propsStorys.text2 }}
            <br>
            {{ propsStorys.text3 }}
            <br><br>
            <strong id="big">"{{ propsStorys.keyword }}"</strong>
            </P>
        </div>
    </div>
</template>

<script>
export default {
    props: ['propsStorys'], 
    data() { 
        return { 
            scrolled: false,
            scrollY: 0,
            scrollDone: false
        };
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll, true);
        this.getWindowHeight();
    },
    watch: {
        scrollY() {
            console.log(this.scrollY);
            if(this.scrollY >= 4700 && this.scrollY <= 5500) {
                this.scrolled = true;
            } else if (this.scrollY >= 5500){
                this.scrollDone = true;
            } else {
                this.scrolled = false;
                this.scrollDone = false;
            }
        },
    },
    methods: {
        handleScroll() {
            this.scrollY = window.scrollY + this.windowHeight;
        },
        getWindowHeight() {
            this.windowHeight = window.innerHeight;
        },
    },
}
</script>

<style scoped>
.body {
    position: relative;
}
.title {
    position: absolute;
    top: 0;
    height: 10%;
    text-align: center;
    font-size: 50px;
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    animation: fadeinout 5s;
    animation-fill-mode: forwards;
}
.explan {
    animation: fadein 3s;
    text-align: center;
    font-size: 2em;
}
.frame {
    background: url('https://cdn.pixabay.com/photo/2017/04/07/21/22/wave-2211925_960_720.jpg') no-repeat center center fixed;
    background-size: cover;
}
.writing {
    position: absolute;
    top: 200px;
    background-color: rgba(255, 255, 255, 0.3);
    text-align: center;
    font-size: 2em;
}
#big {
    font-size: 3em;
}
@keyframes fadeinout {
  0% {
    opacity: 0;
  }
  40% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>