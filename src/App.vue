<script>
// import task1 from './components/task1.vue'
export default {
  name: 'App',
  data () {
    return {

    }
  },
  methods: {
    redirect(){
      this.$router.push({
        name: 'rout1',
        params: {
          customPath: 'itshouldwork'
        }
      })
    }
  }
}
</script>

<template>
  <main>
    <nav class="tabs">
      <v-tabs>
        <router-link to="/"><v-tab :value="0" >Main</v-tab></router-link>
        <div @click="redirect"><v-tab :value="1" >task 1</v-tab></div>
        <router-link to="/rout2"><v-tab :value="2" >task 2</v-tab></router-link>
        <v-tab :value="3">task 3</v-tab>
      </v-tabs>
    </nav>
    <router-view></router-view>
  </main>
</template>

<style scoped>
.tabs {
  display: flex;
  justify-content: flex-start;
}
@media (min-width: 1024px) {
  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
