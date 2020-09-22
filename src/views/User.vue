<template>
  <div>
      <h1>User</h1>

      <v-layout>

          <v-flex
          xs6
          justify-center>
                   <AllUsers
                   :list="Info"/>
          </v-flex>
           <v-flex
           xs6
           style="margin-left : 40px;">
                     <SignUp
                     @joinInfo='joinInfo'/>
          </v-flex>
          
      
      </v-layout>

  </div>
</template>

<script>
import AllUsers from '../components/AllUsers.vue';  // @ ->를 쓰면 src부터 시작.
import SignUp from '../components/SignUp.vue';
export default {
    components : {
        AllUsers,
        SignUp
    },

    methods : {
        joinInfo(users){
            console.log('User : ', users)
            this.Info = users
            console.log('Info : ', this.Info)
        }
    },

    data() {
        return {
            Info : null
        }
    }


}
</script>

<style>

</style>