<template>
    <button @click="addCount">{{count}}</button>
</template>

<script>
export default {
    data() {
        return {
            count: 0
        }
    },
    methods: {
        addCount() {
            this.count++;
            this.$emit('add');
        }
    }
}
</script>

