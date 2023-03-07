<template>
    <button class="toolbar-button" :title="tooltip">
        <MyIcon v-if="icon" :size="IconSize"></MyIcon>
        <slot />
    </button>
</template>

<script setup>
import { defineAsyncComponent, defineProps } from "vue";

const props = defineProps({
    icon: {
        type: String,
    },
    IconSize: {
        type: Number,
        default: 30,
    },
    tooltip: {
        type: String,
        required: true
    }
})
const MyIcon = defineAsyncComponent(function () {
  return import(`../../node_modules/vue-material-design-icons/${props.icon}.vue`);
});
</script>

<script>
export default {
    name: 'ToolbarButton',
}
</script>

<style>
.toolbar-button {
    margin: 0.2rem;
    padding: 1rem;
    border: 0.2rem solid black;
    border-radius: 1rem;
    background-color: var(--main-color-lighter);
    cursor: pointer;
    box-shadow: 0.1rem 0.1rem 0.3rem rgb(37, 37, 37);
    user-select: none;

    display: flex;
    flex-direction: column;
    align-items: center;
}

.toolbar-button:hover {
    background-color: var(--main-color);
}

.toolbar-button:active {
    box-shadow: none;
}
</style>