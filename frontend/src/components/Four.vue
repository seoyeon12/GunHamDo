<template>
    <div class="full">
        <div class="body">
            <div class="width" style="height: 50%;">
                <div class="height one" style="width: 50%;"></div>
                <div class="height two" style="width: 50%;"></div>
            </div>
            <div class="width" style="height: 50%;">
                <div class="height three" style="width: 50%;"></div>
                <div class="height four" style="width: 50%;"></div>
            </div>
        </div>

        <div class="explan" style="height:250px;width:550px;" v-show="!active">
            <!-- v-on:mouseover="active = true" v-on:mouseout="active = false" -->
            {{ propsStorys.text }}
            <br>
            <button v-on:click="toggleAct" class="btn_next">click!</button>
        </div>
        <div class="explan" style="height:200px;width:550px;" v-show="active">
            <!-- v-on:mouseover="active = true" v-on:mouseout="active = false" -->
            {{ propsStorys.text2 }}
            <br>
            <button v-on:click="toggleAct" class="btn_next">click!</button>
        </div>
    </div>
</template>

<script>
export default {
    props: ['propsStorys'], 
    data() { 
        return { 
            active: false
        };
    },
    methods: {
        toggleAct() {
            this.active = !this.active;
        }
    },
}
</script>

<style scoped>
.full {
    position: relative;
}
.body {
    display: block;
}
.width {
    display: flex;
    flex-direction: row;
}
.height {
    opacity: .7;
}
.explan {
    background-color: rgba(7, 7, 7, 0.7);
    transition: 100px 2s;
    transition-timing-function: ease;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    margin-top: 400px;
    margin-left: 32%;
    color: white;
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 1.5em;
    padding: 30px 20px 0px 20px;
    position: absolute;
    top: 0;
    text-align: center;
}
.btn_next {
    background: rgba(255, 255, 255, 0.555);
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    color: white;
    padding: 5px 15px;
    margin-top: 15px;
}
.btn_next:hover {
    background: #3994d6;
}
.one {
    background: url('https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=http%3A%2F%2Fcfile8.uf.tistory.com%2Fimage%2F275F034156010A15089709') no-repeat;
    background-size: 120%;
}
.two {
    background: url('https://lh3.googleusercontent.com/proxy/O7rqJaOEBGBQF5wGXzpTSVHq58yDznIBJvA17-GYFBpm_si_uNTJmQ0N5TMlkGs3kb44HUffhbdVpCh37t839w3lCI2R8CLxHgxt5w') no-repeat;
    background-size: 110%;
}
.three {
    background: url('https://newsimg.hankookilbo.com/2017/08/12/201708120944500841_3.jpg') no-repeat;
    background-size: 100%;
}
.four {
    background: url('https://lh3.googleusercontent.com/proxy/X15wpl2oZn2I4Hf1yefJRzT9sMQgzcWcb6zmxHDFKR49Z1ruxm0D1ckHLG16AFdT-kd-ZWq9UixEHRRsH7WGQ-00AIVsO-JPjmF6uQsrbjpSaO0') no-repeat;
    background-size: cover;
}
</style>