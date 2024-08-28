<template>
    <h2>Counter element</h2> 
    <div>{{ value }}</div>
    <div>
        <button @click="increment">+</button>
        <button @click="decrement">-</button>
    </div>
    
</template>

<script type="module">
export default {
    name: 'counter',
    data () {
        return {
            
        }
    },
    props: {
        modelValue: {
            type: Number,
            required: true
        }
    },
    computed: {
        value: {
            get() {
                return this.modelValue;
            },
            set(newValue) {
                this.$emit('update:modelValue', newValue);
            }
        }
    },
    methods: {
        increment(){
            this.value++;
        },
        decrement(){
            this.value--;
        }
    }
}
</script>

<style scoped>
button {
    background-color: rgb(104, 104, 104);
    border-radius: 30%;
    padding: 10px;
    margin: 10px;
}
div {
    display: flex;
    justify-content: center;
    place-items: center;
}
h2 {
    margin-top: 15px;
    display: flex;
    justify-content: center;
    place-items: center;
}
</style>