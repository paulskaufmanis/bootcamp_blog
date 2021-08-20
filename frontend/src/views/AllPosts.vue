<template>
    <h1>All posts</h1>
       <!-- <Posts 
        v-for="post in posts"
        :title="post.title"
        :img="post.image"
        :key="post.title"
        v-on:click="clicker"
      /> -->
</template>

<script >
import Posts from '../components/Posts.vue'

export default{
    component: {Posts},
    data(){
      return{
        posts: []
                
      }
    }
}


</script>

