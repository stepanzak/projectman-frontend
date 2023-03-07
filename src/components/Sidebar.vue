<template>
    <aside class="sidebar">
        <ul class="app-sections-list">
            <li class="app-section-link" @click="currentPageStore.changePage('Naklady')">Náklady</li>
            <li class="app-section-link" @click="currentPageStore.changePage('Ukoly')">Úkoly</li>
            <li class="app-section-link" @click="currentPageStore.changePage('Lide')">Lidé</li>
            <li class="app-section-link" @click="currentPageStore.changePage('Prace')">Práce</li>
            <li class="app-section-link" @click="currentPageStore.changePage('Projekty')">Projekty</li>
            <li class="app-section-link" @click="currentPageStore.changePage('Zakaznici')">Zákazníci</li>
        </ul>
    </aside>

</template>

<script setup>
import { useCurrentPageStore } from '@/stores/CurrentPageStore'
const currentPageStore = useCurrentPageStore()
</script>

<style>
.sidebar {
    grid-area: aside;
    border-right: 5px solid black;
    background-color: var(--main-color-darker);
}

.app-sections-list {
    list-style: none;
}

.app-section-link {
    position: relative;
    margin-top: 20px;
    margin-bottom: 20px;
    padding: 5px;
    background-color: var(--main-color-lighter);
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}

.app-section-link::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 5px;
    background-color: #18272F;
    bottom: 0;
    left: 0;
    transform-origin: right;
    transform: scaleX(0);
    transition: transform .3s ease-in-out;
}

.app-section-link:hover::before {
    transform-origin: left;
    transform: scaleX(1);
}
</style>