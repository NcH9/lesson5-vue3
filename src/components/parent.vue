<template>
    <div><h1>Parent</h1></div>
    <router-link to="/parent/child">open child component</router-link><br>
    <router-link to=".">close child component</router-link>
    <router-view />
</template>

<script type="module">
export default {
    name: 'parent',
    data () {
        return {
            
        }
    },
    methods: {
        redirectTo(){
            this.$router.push('child')
        }
    },
}
</script>

<style scoped>

</style>