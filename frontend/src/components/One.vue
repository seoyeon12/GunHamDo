<template>
    <div>
        <div id="screen">
            <div class="wavebox">
                <div class="wave" :class="[isChange ? 'one' : '']" ></div>
                <div class="wave" :class="[isChange ? 'two' : '']" ></div>
                <div class="wave" :class="[isChange ? 'three' : '']" ></div>
                <div class="wave" :class="[isChange ? 'four' : '']" ></div>
            </div>
            <div id="screenShadow"></div>
            <div class="explanation">
                <p v-if="storyAct">
                    {{propsStorys.text}}
                </p>
                <p v-if="!storyAct" id="keyword">
                    {{propsStorys.text2}}<br><br>
                    <strong style="font-size: 2.3em;">{{propsStorys.keyword}}</strong>
                </p>
            </div>
            <div class="iCountUp" v-show="isChange">
                <div class="btns">
                    <button v-on:click="toggleStoryAct()" class="storyBtn" :class="[storyAct ? 'storyBtnAct' : '']" >1</button>
                    <button v-on:click="toggleStoryAct()" class="storyBtn" :class="[storyAct ? '' : 'storyBtnAct']">2</button>
                </div>
                <i-count-up
                    :start="0"
                    :endVal="endVal"
                    :duration="5"
                    :options="options"
                    :callback="callback"
                    v-if="isChange"
                ></i-count-up>
            </div>
        </div>
    </div>
</template>

<script>
import ICountUp from 'vue-countup-v2'

export default {
    props: ['propsStorys'], 
    data() { 
        return { 
            scrollY: 0,
            windowHeight: 0,
            isChange: false,
            storyAct: true,
            endVal:1810,
            options: {
                useEasing: true,
                useGrouping: false,
                suffix: '년',
            }
        };
    },
    components: {
        ICountUp
    },
    watch: {
        scrollY() {
            if(this.scrollY >= 1400 && this.scrollY <= 2500) {
                this.isChange = true;
            } else {
                this.isChange = false;
            }
        },
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll, true);
        this.getWindowHeight();
    },
    destroyed() {
        window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
        handleScroll() {
            this.scrollY = window.scrollY + this.windowHeight;
        },
        getWindowHeight() {
            this.windowHeight = window.innerHeight;
        },
        callback(ins) {
            ins.update(ins.endVal + 100);
        },
        toggleStoryAct() {
            if(this.storyAct)
            {
                this.endVal = 1916;
                this.storyAct = !this.storyAct;
            }else if(!this.storyAct){
                this.endVal = 1890;
                this.storyAct = !this.storyAct;
            }else{
                console.log("error!!!!!");
            }
        },
    }
}
</script>

<style scoped>
#screen {
    position: relative;
    background-color: #f6f6f8;
    border-bottom: 5px solid rgba(255, 255, 255, 0.322);
}
.wave {
    /* opacity: .4; */
    position: absolute;
    top: 3%;
    left: 50%;
    width: 1500px;
    height: 1500px;
    margin-left: -250px;
    margin-top: -250px;
    transform-origin: 10% 48%;
    border-radius: 45%;
    background: #3994d6;
}
.one {
    animation: drift 5000ms infinite linear;
}
.two {
    animation: drift 6000ms infinite linear;
}
.three {
    animation: drift 8000ms infinite linear;
}
.four {
    animation: drift 10000ms infinite linear;
}
.iCountUp {
    position: absolute;
    top: 0;
    font-size: 15em;
    margin: 0;
    color: white;
    display: flex;
    flex-direction: column-reverse;
}
.btns {
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
}
.storyBtn {
    width: 100px;
    height: 100px;
    background: transparent;
    /* border: 5px solid #3d4f96; */
    font-size: 30px;
    color: white;
    border-radius: 43%;
    margin: 0px 40px;
    box-shadow: 1px 3px 10px 3px rgba(17, 17, 17, 0.356);
}
.storyBtn:nth-child(2) {
    margin-top: 40px;
}
.storyBtnAct {
    background: rgba(255, 255, 255, 0.712);
    color: #3994d6;
}
.explanation {
    position: absolute;
    top: 0;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    text-align: center;
}
.explanation > p {
    width: 600px;
    padding: 40px 50px;
    margin-right: 10%;
    border-radius: 25px;
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 1.7em;
    color: white;
}
#keyword {
    width: 800px;
}
#screenShadow {
    background-color: rgba(0, 0, 0, 0.05);
    position: absolute;
    top: 0;
    animation: fadein 3s;
}
@keyframes drift {
  from { transform: rotate(0deg); }
  from { transform: rotate(360deg); }
}
/* rgb(64, 73, 46) */
</style>