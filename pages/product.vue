<template>
  <div>
	  <h1 v-bind:class="className" v-html="messages"></h1>
  </div>
</template>

<script>
export default {

  data(){
    return{
      "messages" : "<h1 v-bind:class='className'>Hi! Vue</h1>",
      "className" : "className",
    }
  }

}
</script>

<style scoped>
.className {
  color: red;
}
</style>

