<template>
    <div class="zakaznici-toolbar toolbar">
        <div class="toolbar-button">tlacitko</div>
        <div class="toolbar-button">tlacitko</div>
        <ToolbarButton icon="Lightbulb" text="zakaznici"></ToolbarButton>
    </div>
</template>

<script>
import ToolbarButton from '@/components/ToolbarButton.vue';
export default {
    name: "ZakazniciToolbar",
    components: {
        ToolbarButton
    }
}
</script>
 
<style>

</style>