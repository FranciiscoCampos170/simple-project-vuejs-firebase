<template>

<div>
  <h1>Create Page</h1>
  <form action="" @submit.prevent="addEmployer">
    <input type="text" placeholder="First Name" name="first_name" v-model="firstName">
    <input type="text" placeholder="Last Name" name="last_name" v-model="lastName">
    <input type="text" placeholder="E-mail" name="email" v-model="email">
  </form>
</div>
</template>

<script>
export default {
  name: 'firstName',
  name: 'lastName',
  name: 'email',
  props: ['name'],
  data(){
    return {
      firstName: null,
      lastName: null,
      email: null
    }
  }
}
</script>

<style scoped>

</style>
