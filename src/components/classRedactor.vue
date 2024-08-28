<template>
    <div>
        <label>Enter red/green/blue</label><br>
        <input v-model.lazy="userInput" placeholder="red/green/blue"/><br>
        <div :class="userInput.trim().toLowerCase()" class="original">You entered: {{ userInput }}</div>
    </div>
</template>

<script type="module">
export default {
    name: 'classRedactor',
    data () {
        return {
            userInput: '',
        }
    }
}
</script>

<style scoped>
label {
    margin-top: 15px;
}
input {
    margin-top: 10px;
    margin-bottom: 10px;
    border-radius: 15px;
    padding: 5px;

    color: white;
    background-color: rgb(112, 112, 112);
}
.original {
    border-radius: 15px;
    background-color: rgb(88, 88, 88);
    padding: 5px;
    margin-top: 5px;
}
.red {
    background-color: rgb(169, 61, 61);
    color: white;
}
.green {
    background-color: rgb(63, 138, 63);
    color: white;
}
.blue {
    background-color: rgb(81, 108, 171);
    color: white;
}
</style>