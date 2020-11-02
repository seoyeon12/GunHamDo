<template>
    <div id="background">
        <div id="explan">
            좌표 : {{mouseX}}, {{mouseY}}
            <p>
                {{propsStorys.text}} <br>
                [좌표 (400,600),(700,1000),(1000,600)을 찾으세요.]
            </p>
        </div>
        <div id="screen" v-on:mousemove.capture="updateXY">
            <div class="spot one" style="width:100px;height:100px;" 
            v-on:click="active1 = !active1"></div>
            <div class="words one" v-if="active1" style="width:250px;height:100px;">
                1000m 깊이의 지하
            </div>

            <div class="spot two" style="width:100px;height:100px;"
            v-on:click="active2 = !active2"></div>
            <div class="words two" v-show="active2" style="width:250px;height:100px;">
                60°의 가파른 기울기
            </div>

            <div class="spot three" style="width:100px;height:100px;"
            v-on:click="active3 = !active3"></div>
            <div class="words three" v-show="active3" style="width:250px;height:100px;">
                40도가 넘어가는 온도
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['propsStorys'],
    data() {
        return {
            mouseX: 0,
            mouseY: 0,
            active1: false,
            active2: false,
            active3: false,
        };
    },
    methods: {
        updateXY:function(event){
            this.mouseX=event.screenX;
            this.mouseY=event.screenY;
        },
    },
}
</script>

<style scoped>
#background {
    background: url('https://cdn.pixabay.com/photo/2016/08/28/16/50/coal-1626368_960_720.jpg') center no-repeat;
    background-size: cover;
}
#explan {
    height: 30%;
    background-color: rgba(7, 7, 7, 0.5);
    animation: fadein 3s;
    color: white;
    text-align: center;
    padding-top: 5px;
}
#explan > p {
    width: 70%;
    margin: 40px auto 0% auto;
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 1.5em;
}
#screen {
    position: relative;
}
.spot {
    position: absolute;
    background: transparent;
}
.one {
    top: 170px;
    left: 350px;
}
.two {
    top: 560px;
    left: 650px;
}
.three {
    top: 170px;
    left: 950px;
}
.words {
    position: absolute;
    margin-left: -70px;
    background-color: rgba(7, 7, 7, 0.5);
    color: white;
    text-align: center;
    padding-top: 25px;
    font-size: 1.3em;
}
</style>