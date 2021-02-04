<template>
  <div>
    <ol>
      <li v-for="(item, index) in items" :key=index>
         <router-link v-bind:to=item.path>
            {{ item.title }}
         </router-link>
      </li>
    </ol>
  </div>
</template>

<script>
import HomeVue from './Home.vue'
export default {
  name: 'TabMenu',
  data () {
    return {
      items: [
        { id:'Home', title: 'Home', path: '/' },
        { id:'AboutUs', title: 'About us', path: '/about-us' },
        { id:'Schedule', title: 'Schedule', path: '/schedule' },
        { id:'Memory', title: 'Memory', path: '/memory' },
        { id:'Contact', title: 'Contact', path: '/contact'}
      ]
    }
  }
}
</script>

<style scoped>

ol {
  /* margin-right: auto; */
  margin-left: 5%;
  width: 480px;
  display:flex;
  /* justify-content: center; */
  /* padding-left: auto; */
  list-style: none
}

li {
  width: 150px;
  height: 50px;
  margin-left:10px;
  margin-right:10px;
  font-size: 18px;
  /* background-color: blue; */
  /* border-radius: 10px; */
  position: relative;
}

li:hover {
  /* background-color: skyblue; */
}

/*  router-linkがaタグとして表示されてたのでスタイルをaタグに書いた*/
a {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  color: black;
  text-decoration: none;
  line-height: 50px;
  transition: 1s;
}

a:hover {
  color: red;
}

</style>