<template>
    <div class="naklady-toolbar toolbar">
        <div class="toolbar-button">button</div>
        <div class="toolbar-button">button</div>
        <ToolbarButton icon="Plus" tooltip="add new" text="jarel"></ToolbarButton>
        <ToolbarButton icon="Lightbulb" text="naklady" IconSize="30"></ToolbarButton>
        <div class="toolbar-button">button</div>
        <div class="toolbar-button">button</div>
    </div>
</template>

<script>
import ToolbarButton from '@/components/ToolbarButton.vue';
export default {
    name: "NakladyToolbar",
    components: {
        ToolbarButton
    }
}
</script>
 
<style>

</style>