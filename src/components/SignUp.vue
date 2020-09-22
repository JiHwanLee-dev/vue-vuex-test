<template>
  <div>
      <h1> SignUp </h1> 
      <v-text-field
          v-model="id"
          label="아이디"
        ></v-text-field>
        <v-text-field
          v-model="passwd"
          type="password"
          label="비밀번호"
        ></v-text-field>
        <v-text-field
          v-model="name"
          label="이름"
        ></v-text-field>
        <v-text-field
          v-model="address"
          label="주소"
        ></v-text-field>
        <v-text-field
          v-model="image"
          label="이미지"
        ></v-text-field>
        <v-btn
        @click="btnJoin"> 회원가입 </v-btn>
  </div>
</template>

<script>
import { eventBus } from '../main.js'
import { mapMutations, mapActions } from 'vuex'
export default {
    data(){
        return {
            id : null,
            passwd : null,
            name : null,
            address : null,
            image : null,
            users : [
                {
                    id : null,
                    passwd : null,
                    name : null,
                    address : null,
                    image : null
                }
            ]
        }
    },
    
    methods : {
       // ...mapMutations(['addUsers']),
       ...mapActions(['addUsers']),


        btnJoin(){
            
            this.users.id = this.id,
            this.users.passwd = this.passwd,
            this.users.name = this.name,
            this.users.address = this.address,
            this.users.image = this.image
            console.log('users : ', this.users)

            //this.$store.commit('addUsers', this.users) // Mutations이름을 인자로 넣음
            // this.$store.dispatch('addUsers', this.users)
            this.addUsers(this.users)  // 여기에서 넘긴 인자가 payload위치로 감
            
            this.$emit('joinInfo', this.users)  // 부모 컴포넌트에 값 보냄
            // eventBus.$emit('getJoinInfo', this.users) // Mutations을 쓰므로 주석
            this.clearForm()
       },

       clearForm(){
         this.id = null,
         this.passwd = null,
         this.name = null,
         this.address = null,
         this.image = null
       }
    }
}
</script>

<style>

</style>