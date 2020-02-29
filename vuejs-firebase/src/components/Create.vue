<template>

<div>
  <h1>Create Page</h1>
  <form @submit.prevent="addEmployer">
    <input type="text" name="first-name" v-model="firstName">
    <p>{{ firstName }}</p>
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
      firstName: null
    }
  },
  methods: {
      addEmployer(){
          //console.log(this.firstName);
          if(this.firstName){
            db.collection('employers').add({
              content: this.firstName,
              //name: this.name,
              timestamp: Date.now()
            }).catch(err => {
              console.log(err);
            })
            this.firstName = null
          }else{

          }
      }
  }
}
</script>

<style scoped>

</style>
