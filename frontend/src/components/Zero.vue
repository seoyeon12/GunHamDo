<template>
    <div class="body">
        <div class="filter"></div>
        <div class="opening">
            <h1>Don't Forget</h1>
            <h3>- 군함도 -</h3>
        </div>
        <div class="explanation" v-if="isActive">
            <p>
                {{propsStorys.text}}
            </p>
        </div>
    </div>
</template>

<script>
export default {
    props: ['propsStorys'], 
    data() { 
        return { 
            isActive: false
        };
    },
    mounted: function () {
        this.$nextTick(function () {
            setTimeout(()=>{ this.isActive = !this.isActive; },4000);
        })
    }
}
</script>

<style scoped>
.body {
    background: url('https://upload.wikimedia.org/wikipedia/commons/6/6b/Battle-Ship_Island_Nagasaki_Japan.jpg') no-repeat center center fixed;
    background-size: cover;
    overflow: hidden;
}
.filter {
    background: url('https://upload.wikimedia.org/wikipedia/commons/6/6b/Battle-Ship_Island_Nagasaki_Japan.jpg') no-repeat center center fixed;
    background-size: cover;
    filter: blur(5px);
    position: absolute;
    left: -30%;
    border-right: 5px solid rgba(255, 255, 255, 0.322);
    box-shadow: 5px 10px 30px 10px rgba(255, 255, 255, 0.322);
    animation: fadein 3s;
}
.opening {
    position: absolute;
    top: 35%;
    text-align: center;
    color: rgba(255, 255, 255, 0.95);
    animation: up 5s;
    animation-fill-mode: forwards;
}
.opening > h1 {
    font-size: 8em;
}
.opening > h3 {
    font-size: 3em;
}
.explanation {
    position: absolute;
    top: 50%;
    text-align: center;
    animation: fadein 5s;
}
.explanation > p {
    width: 400px;
    margin: 0 auto;
    background-color: rgba(255, 255, 255, 0.5);
    padding: 40px 50px;
    border-radius: 25px;
    font-family: 'Noto Sans KR', sans-serif;
    border-bottom: 5px solid rgba(255, 255, 255, 0.322);
    font-size: 1.3em;
}
@keyframes up {
  0% {
    opacity: 0;
  }
  20% {
    opacity: 0.5;
  }
  40% {
    opacity: 1;
  }
  60% {
    top: 35%;
  }
  100% {
    top: 15%;
  }
}
</style>