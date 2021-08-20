<template>
  <div class="home">
  
    <p>This home page</p>



      <Posts
      v-for="post in posts"
        :title="post.title"
        :img="post.image"
        :key="post.title"   
     
        />
 <!-- v-for="post in posts" -->
        <!-- :title="post.title" -->
        <!-- :img="post.image" -->
        <!-- :key="post.title" -->
        <!-- @click="clicker" -->

       <!-- <template v-for="item in items.slice(0, 3)"> -->
  
  </div>
  
</template>

<script>
  import Posts from '../components/Posts.vue'


export default {

  name: 'Home',
  components: {Posts},
// accept props from imported component
  data(){
    return {
      options: [
        {
        title: "What is Lorem Ipsum?",
        article: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        date: "01.01.2021",
        author: "Peter Block",
        image: "https://i.pinimg.com/originals/17/5c/13/175c1355af4adc478512f2ed7d3d677f.png"
        },  
        {
        title: "What is Lorem Ipsum?",
        article: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        date: "01.01.2021",
        author: "Peter Block",
        image: "https://i.pinimg.com/originals/17/5c/13/175c1355af4adc478512f2ed7d3d677f.png"
        },  
        {
        title: "What is Lorem Ipsum?",
        article: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        date: "01.01.2021",
        author: "Peter Block",
        image: "https://i.pinimg.com/originals/17/5c/13/175c1355af4adc478512f2ed7d3d677f.png"
        }
      ]
    }
  },
  methods: {
    clicker(){
      console.log('post clicked')
    }
  }
}
</script>
