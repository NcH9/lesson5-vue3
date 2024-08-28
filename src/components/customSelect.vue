<template>
    <div>
        <div class="flex-center">
            <select class="selector" v-model="selectedValue">
                <option v-for="(option, index) in options" :key="index" :value="option.value">
                    {{ option.text }}
                </option>
            </select>
        </div>
        
        <div class="flex-center"> {{ selectedValue }}</div>
    </div>
</template>

<script type="select">
export default {
    name: 'customSelect',
    data () {
        return {
            
        }
    },
    props: {
        modelValue: {
            type: String,
        },
        options: {
            required: true,
            type: Array,
        },  
    },
    computed: {
        selectedValue: {
            get(){
                return this.modelValue;
            },
            set(newValue){
                this.$emit('update:modelValue', newValue);
            }
        }
    },
    methods: {

    }
}
</script>

<style scoped>
.selector {
    min-width: 100px;
    padding: 10px;
    margin: 5px;

    border-radius: 15px;

    box-shadow: 3px -3px 5px rgb(205, 205, 205);
    color: white;
    background-color: rgb(80, 80, 80);

    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
option{
    color: white;
    background-color: rgb(52, 52, 52);
}
.flex-center {
    border-radius: 15px;

    display: flex;
    justify-content: center;
    place-items: center;
}
</style>