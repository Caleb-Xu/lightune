<template>
    <div>
        {{ result }}
    </div>
</template>

<script setup lang="ts" name="App">
import { ref, onBeforeMount } from 'vue'

const result = ref()

const fetchData = async () => {
    result.value = await window.musicApi.search_hot({})
}

onBeforeMount(() => {
    fetchData()
})
</script>

<style lang="less"></style>
