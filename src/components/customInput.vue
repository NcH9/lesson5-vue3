<template>
    <div >
        <input id="input" :value="modelValue" @input="onInput" />
    </div>
</template>
  
<script>
    export default {
        name: 'customInput',
        props: {
            modelValue: String
        },
        methods: {
            onInput(event) {
                this.$emit('update:modelValue', event.target.value);
            }
        }
    };
</script>
<style>
#input{
    padding: 5px;
    margin: 5px;
    margin-left: -5px;
    background-color: rgb(138, 137, 137);
    border-radius: 15px;
}
#input:focus {
    background-color: white;
}
</style>
  