<template>
    <div class="stroys">
        <!-- <div class="detail" v-for="story in propsStorys" :key="story.id">
            <div>{{story.id}} - {{story.text}}</div>
            <div>{{story.keyword}} - {{story.text2}}</div>
        </div> -->
        <div>{{propsStorys.id}} - {{propsStorys.text}}</div>
        <div>{{propsStorys.keyword}} - {{propsStorys.text2}}</div>
    </div>
</template>

<script>
export default {
    props: ['propsStorys'], 
    data() { 
        return { 
            storys: [] 
        };
    }
}
</script>

<style>

</style>