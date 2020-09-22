<template>
  <div>
      <h1> AllUsers : {{ count }}</h1> 
      <h3> Seoul Users : {{ seouls }} ({{ percent}}%)</h3> 
      <!--  $store.getters.percentOfSeoul 이렇게 쓰다가 mapGetters를 사용하고 나면 코드가 간편해짐 -->
       
       <!-- $store.state.list -> list    mapState로 변경하면 코드가 간편함-->
      <v-card
      class="mx-auto"
      v-for="(item,index) in list"   
      :key="index">

    
        <v-layout>
            <v-flex>
            <v-img
            class="elevation-6"
            sizes="125"
            src="https://cdn.vuetifyjs.com/images/cards/foster.jpg"
            style="width:40px;">
            
            </v-img>
            </v-flex>
            <v-flex>
             
                <h3>name : {{ item.name }} </h3>
                <p> id : {{ item.id }} / {{ item.address }} 거주</p>     
            </v-flex>

           
        </v-layout>
      

      </v-card>

   
  </div>
</template>

<script>
import {eventBus} from '../main'
import { mapState, mapGetters } from 'vuex'          // 
export default {
   // props : ['list'],
    
    data() {
        return {
            //  vuex에 state에 넣음
           
        
        }
    },

    computed :  {
        // ...mapGetters(['allUsersCount', 'countOfSeoul', 'percentOfSeoul'])
        ...mapGetters({
            count : 'allUsersCount',
            seouls : 'countOfSeoul',
            percent : 'percentOfSeoul'
        }),
        
        ...mapState(['list'])
    },

    created() {
        eventBus.$on('getJoinInfo', (data) => {
            console.log('eventBus : ', data)

            this.$store.state.list.push(data)
        })
    }
    
}
</script>

<style>
v-img{
    width : 20%;
    height: 20%;
}
</style>