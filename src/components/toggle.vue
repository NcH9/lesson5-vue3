<template>
    <div @click="toggle" :class="{active: isRed}" class="toggle">
        <label> {{ isRed ? 'Red' : 'Not Red' }} </label>
    </div>
</template>

<script type="module">
export default {
    name: 'toggle',
    data () {
        return {
            
        }
    },
    props: {
        modelValue: {
            type: Boolean,
            required: true
        }
    },
    computed: {
        isRed: {
            get() {
                return this.modelValue;
            },
            set(newValue) {
                this.$emit('update:modelValue', newValue);
            }
        }
    },
    methods: {
        toggle(){
            this.isRed = !this.isRed
        }
    }
}
</script>

<style scoped>
.toggle {
    border-radius: 15px;
    padding: 5px;
    display: flex;
    justify-content: center;
    transition: 0.25s;

    background-color: rgb(73, 73, 73);
}
.toggle.active {
    background-color: rgb(183, 52, 52);
}
</style>