<template>

<div>
  <h1>Create Page</h1>
  <form @submit.prevent="addEmployer">
    <input type="text" name="first-name" v-model="firstName" placeholder="First Name">
    <input type="text" name="last-name" v-model="lastName" placeholder="Last Name">
    <input type="text" name="email" v-model="email" placeholder="Email">
    <button>Cadastrar</button>
  </form>
</div>
</template>

<script>
import db from '@/firebase/init'
export default {
  name: 'Create',
  props: ['name'],
  data(){
    return {
      firstName: null,
      lastName: null,
      email: null
    }
  },
  methods: {
      addEmployer(){
          //console.log(this.firstName + this.lastName + this.email);
          if(this.firstName && this.lastName && this.email){
            db.collection('employers').add({
              firstName: this.firstName,
              lastName: this.lastName,
              email: this.email,
              //name: this.name,
              timestamp: Date.now()
            }).catch(err => {
              console.log(err);
            })
            this.firstName = null,
            this.lastName = null,
            this.email = null
          }else{

          }
      }
  }
}
</script>

<style scoped>

</style>
