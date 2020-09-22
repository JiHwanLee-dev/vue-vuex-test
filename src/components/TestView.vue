<template>
  <div>
      <v-flex>
        <h2> count : {{ $store.getters.count }} </h2> 
      </v-flex>
        <v-flex>
          <v-btn @click="increment"> increment </v-btn>
          <v-btn @click="decrement"> decrement </v-btn>
      </v-flex>
  </div>
</template>

<script>

export default {
    data() {
        return {

        }
    },

    methods : {
        increment() {
            console.log('increment')
            this.$store.commit('increment') // commit이라는 함수를 이용하여 mutations에 접근해서 값을 변동시킴.
        },

        decrement(){
            console.log('decrement')
            this.$store.commit('decrement') // commit이라는 함수를 이용하여 mutations에 접근해서 값을 변동시킴.
        }
    }
}
</script>

<style>

</style>