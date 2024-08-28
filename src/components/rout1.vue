


<template>
    <h1>task 1</h1>
    <div class="bubble">
        <router-link to="/parent">to parent/child pair of components</router-link><br>
        <router-link to="/fsdkjfshk">to NotFound</router-link>
    </div>
    <div class="bubble">
        <customInput v-model="inputValue" />
        <div>{{ inputValue }}</div>
    </div>
    <div class="bubble">
        <customForm/>
    </div>
    <div class="bubble">
        <counter v-model="counterValue"/>
    </div>
    <div class="bubble">
        <toggle v-model="toggleAnswer"/>
    </div>
    <div class="bubble">
        <classRedactor />
    </div>
    <div class="bubble">
        <customSelect :options="optionsArray" v-model="selectedOption"/>
    </div>

    <router-view />
</template>

<script type="module">
import customInput from './customInput.vue';
import customForm from './customForm.vue';
import counter from './counter.vue';
import toggle from './toggle.vue';
import classRedactor from './classRedactor.vue';
import customSelect from './customSelect.vue';

export default {
    name: 'rout1',
    data () {
        return {
            inputValue: '',
            counterValue: 0,
            toggleAnswer: false,
            selectedOption: '',
            optionsArray: [
                {text: 'option1', value: 'value1'},
                {text: 'option2', value: 'value2'},
                {text: 'option3', value: 'value3'},
            ]
        }
    },
    methods: {
        
    },
    components: {
        customInput,
        customForm,
        counter,
        toggle,
        classRedactor,
        customSelect,
    }
}
</script>

<style scoped>
.bubble {
    margin: 15px;
    padding: 15px;
    border-radius: 15px;
    box-shadow: 3px -3px 5px rgb(131, 131, 131);

    background-color: rgb(54, 54, 54);
}
</style>