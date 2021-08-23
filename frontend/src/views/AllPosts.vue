<template>
  <div>
    <h1>All posts</h1>
      <div class="post-wrapper">

       <Posts 
        v-for="post in posts.slice(0,3)"
        :title="post.title"
        :image="post.image"
        :key="post.title"       
        
      />
      <button @click="getLatestPosts">get all posts in console</button>
    </div>
  </div>
</template>

<script >
import Posts from '../components/Posts.vue'
import data from '../data/db.json'

export default{
    component: {Posts},
    data(){
      return{
        posts: data,                
      }
    },
    
    methods: {
      getLatestPosts(){
        let latestPosts = this.posts
        .sort((a, b) => a.last_nom > b.last_nom && 1 || -1)
        .slice(0,3);
        for (let i = 0; i < latestPosts.length; i++) {
          
          console.log(latestPosts[i].title, latestPosts[i].date)  
          return latestPosts[i].title  
        }    
      }
      
    }
    
}
</script>
<style scoped>
.post-wrapper{
  height: fit-content;
}
</style>