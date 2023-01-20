<template>
    <div>
        <ol>
            <li>some naklad</li>
            <li>some naklad</li>
            <li>some naklad</li>
            <li>some naklad</li>
            <li>some naklad</li>
        </ol>
        <div class="toolbar">
            <div class="toolbar-btn">some button</div>
            <div class="toolbar-btn">some button</div>
            <div class="toolbar-btn">some button</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'NakladyPage'
    }
</script>

<style>
    .toolbar {
        background-color: green;
        border: 10px solid red;
        position: fixed;
        width: 100%;
    }
</style>