<template>
  <div class="home">
    <h1>Home</h1>
    <h4> 모든 유저의 수 :  {{ $store.getters.allUsersCount }} </h4>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
