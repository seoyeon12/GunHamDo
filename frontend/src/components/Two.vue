<template>
    <div>
        <div class="cards">
            <div class="explanation">
                <p class="explan" v-if="act">
                    사진을 한번 씩 클릭해주세요!!
                </p>
                <p class="explan" v-if="!act" :class="[!act ? 'change' : '']">
                    {{propsStorys.text}}
                </p>
            </div>

            <div class="card" style="width:300px;height:300px;">
                <div class="card-front" style="width:300px;height:300px;">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/c/cb/Mukden_1931_japan_shenyang.jpg" alt="만주사변" 
                    class="cardImg" style="width:300px;height:300px;" v-on:click.once="togglenextAct(0)">
                </div>
                <div class="card-back" style="width:300px;height:300px;">
                    <h1>1931년</h1> 
                    <p>만주사변</p> 
                </div>
            </div>

            <div class="card" style="width:300px;height:300px;">
                <div class="card-front" style="width:300px;height:300px;">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Iwane_Matsui_rides_into_Nanjing.jpg/250px-Iwane_Matsui_rides_into_Nanjing.jpg" alt="중일전쟁" 
                    class="cardImg" style="width:300px;height:300px;" v-on:click.once="togglenextAct(1)">
                </div>
                <div class="card-back" style="width:300px;height:300px;">
                    <h1>1937년</h1> 
                    <p>중일전쟁</p> 
                </div>
            </div>

            <div class="card" style="width:300px;height:300px;">
                <div class="card-front" style="width:300px;height:300px;">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/PacificWar_artwork.jpg/350px-PacificWar_artwork.jpg" alt="태평양전쟁" 
                    class="cardImg" style="width:300px;height:300px;" v-on:click.once="togglenextAct(2)">
                </div>
                <div class="card-back" style="width:300px;height:300px;">
                    <h1>1941년</h1> 
                    <p>태평양전쟁</p> 
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['propsStorys'], 
    data() { 
        return { 
            ClickCounter: 0,
            act: true,
            scrolled:false
        };
    },
    methods: {
        togglenextAct(index) {
            this.ClickCounter += 1;
            alert( 3-this.ClickCounter + "장 만 더 클릭해주세요~");
            if(this.ClickCounter === 3){
                this.act = !this.act;
            }
        }
    },
}
</script>

<style scoped>
.cards {
    margin-top: -100px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: relative;
}
.card {
    position: relative;
    background-color: transparent;
    width: 300px;
    height: 300px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
}
.card-front {
    position: absolute;
    top: 0;
}
.card-back {
    text-align: center;
}
.card-back > h1 {
    font-size: 3em;
    margin-top: 100px;
}
.card-back > p {
    font-size: 1.8em;
}
.cardImg:hover, .cardImg:active {
    animation: rotatefadeout 1.5s;
    animation-fill-mode: forwards;
}
.explanation {
    position: absolute;
    text-align: center;
    display: flex;
    align-items: flex-end;
    animation: fadein 5s;
}
.explan {
    width: 800px;
    height: 150px;
    margin: 0 auto;
    padding: 40px 50px 0px 50px;
    background-color: rgba(41, 39, 39, 0.548);
    border-radius: 25px;
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 1.3em;
    color: white;
}
.change {
    background-color: #3994d6;
    animation: fadein 3s;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
}

@keyframes rotatefadeout {
  from {
    opacity: 1;
    transform: rotateY(180deg);
  }
  to {
    opacity: 0;
  }
}
@-webkit-keyframes rotatefadeout {
  from {
    opacity: 1;
    transform: rotateY(180deg);
  }
  to {
    opacity: 0;
  }
}
@-o-keyframes rotatefadeout {
  from {
    opacity: 1;
    transform: rotateY(180deg);
  }
  to {
    opacity: 0;
  }
}
</style>