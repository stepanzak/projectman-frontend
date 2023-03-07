<template>
    <div class="naklady-toolbar toolbar">
        <button class="toolbar-button">btn2</button>
        <button class="toolbar-button">btn3</button>
        <button class="toolbar-button">btn4</button>
        <button class="toolbar-button">btn1</button>
        <ToolbarButton icon="Lightbulb" text="ukoly"></ToolbarButton>
    </div>
</template>

<script>
import ToolbarButton from '@/components/ToolbarButton.vue';
export default {
    name: "UkolyToolbar",
    components: {
        ToolbarButton
    }
}
</script>
 
<style>

</style>